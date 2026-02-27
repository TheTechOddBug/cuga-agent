#!/usr/bin/env bash
set -euo pipefail

# ---------------------------------------------------------------------------
# CUGA OpenShift Cleanup Script
#
# Removes all resources deployed by deploy-openshift.sh for a given instance.
# Does NOT touch other instances or the namespace itself (unless --delete-namespace).
#
# Usage:
#   ./cleanup-openshift.sh [path/to/openshift.env] [--delete-namespace]
# ---------------------------------------------------------------------------

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${1:-${SCRIPT_DIR}/openshift.env}"
DELETE_NAMESPACE=false

for arg in "$@"; do
  [[ "$arg" == "--delete-namespace" ]] && DELETE_NAMESPACE=true
done

# ---------------------------------------------------------------------------
# Load environment
# ---------------------------------------------------------------------------

if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: env file not found: $ENV_FILE"
  echo "Usage: $0 [path/to/openshift.env] [--delete-namespace]"
  exit 1
fi

# shellcheck disable=SC1090
set -a
source "$ENV_FILE"
set +a

if [[ -z "${INSTANCE_ID:-}" ]]; then
  echo "ERROR: INSTANCE_ID is not set in $ENV_FILE"
  exit 1
fi

NAMESPACE="${NAMESPACE:-cuga}"
RELEASE_NAME="cuga-${INSTANCE_ID}"
PULL_SECRET_NAME="${INSTANCE_ID}-icr-pull-secret"
ENV_SECRET_NAME="${INSTANCE_ID}-env-secret"

echo ""
echo "========================================"
echo "  CUGA OpenShift Cleanup"
echo "  Instance  : ${INSTANCE_ID}"
echo "  Release   : ${RELEASE_NAME}"
echo "  Namespace : ${NAMESPACE}"
if [[ "$DELETE_NAMESPACE" == true ]]; then
  echo "  WARNING   : Namespace will be DELETED"
fi
echo "========================================"
echo ""
read -r -p "Are you sure you want to delete all resources for instance '${INSTANCE_ID}'? [y/N] " confirm
[[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 0; }
echo ""

# ---------------------------------------------------------------------------
# 1. Uninstall Helm release (removes deployment, service, route, pvc)
# ---------------------------------------------------------------------------

echo "[1/3] Uninstalling Helm release: ${RELEASE_NAME}"
if helm status "${RELEASE_NAME}" --namespace "${NAMESPACE}" &>/dev/null; then
  helm uninstall "${RELEASE_NAME}" --namespace "${NAMESPACE}"
  echo "      Release ${RELEASE_NAME} uninstalled."
else
  echo "      Release ${RELEASE_NAME} not found, skipping."
fi

# ---------------------------------------------------------------------------
# 2. Delete secrets
# ---------------------------------------------------------------------------

echo "[2/3] Deleting secrets for instance: ${INSTANCE_ID}"

for secret in "${PULL_SECRET_NAME}" "${ENV_SECRET_NAME}"; do
  if kubectl get secret "${secret}" --namespace "${NAMESPACE}" &>/dev/null; then
    kubectl delete secret "${secret}" --namespace "${NAMESPACE}"
    echo "      Deleted secret: ${secret}"
  else
    echo "      Secret ${secret} not found, skipping."
  fi
done

# ---------------------------------------------------------------------------
# 3. Optionally delete namespace
# ---------------------------------------------------------------------------

if [[ "$DELETE_NAMESPACE" == true ]]; then
  echo "[3/3] Deleting namespace: ${NAMESPACE}"
  read -r -p "This will delete the ENTIRE namespace '${NAMESPACE}' and ALL resources inside it. Confirm? [y/N] " confirm2
  if [[ "$confirm2" =~ ^[Yy]$ ]]; then
    kubectl delete namespace "${NAMESPACE}"
    echo "      Namespace ${NAMESPACE} deleted."
  else
    echo "      Skipped namespace deletion."
  fi
else
  echo "[3/3] Namespace '${NAMESPACE}' left intact (pass --delete-namespace to remove it)."
fi

echo ""
echo "========================================"
echo "  Cleanup complete for instance: ${INSTANCE_ID}"
echo "========================================"
echo ""
