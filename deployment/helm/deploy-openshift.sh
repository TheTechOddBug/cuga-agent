#!/usr/bin/env bash
set -euo pipefail

# ---------------------------------------------------------------------------
# CUGA OpenShift Deployment Script
#
# Usage:
#   ./deploy-openshift.sh [path/to/openshift.env]
#
# Prerequisites:
#   - Logged in to OpenShift cluster via `oc login` or `kubectl` with valid kubeconfig
#   - helm 3 installed
#   - openshift.env filled in (copy from openshift.env template)
# ---------------------------------------------------------------------------

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${1:-${SCRIPT_DIR}/openshift.env}"

# ---------------------------------------------------------------------------
# Load environment
# ---------------------------------------------------------------------------

if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: env file not found: $ENV_FILE"
  echo "Usage: $0 [path/to/openshift.env]"
  exit 1
fi

# shellcheck disable=SC1090
set -a
source "$ENV_FILE"
set +a

# ---------------------------------------------------------------------------
# Validate required variables
# ---------------------------------------------------------------------------

REQUIRED_VARS=(
  INSTANCE_ID
  NAMESPACE
  ICR_API_KEY
  IMAGE_REPOSITORY
  IMAGE_TAG
  GROQ_API_KEY
  MODEL_NAME
  AGENT_SETTING_CONFIG
)

MISSING=()
for var in "${REQUIRED_VARS[@]}"; do
  if [[ -z "${!var:-}" ]]; then
    MISSING+=("$var")
  fi
done

if [[ ${#MISSING[@]} -gt 0 ]]; then
  echo "ERROR: The following required variables are not set in $ENV_FILE:"
  for v in "${MISSING[@]}"; do
    echo "  - $v"
  done
  exit 1
fi

# Derived names — all scoped to INSTANCE_ID so multiple instances coexist
RELEASE_NAME="cuga-${INSTANCE_ID}"
PULL_SECRET_NAME="${INSTANCE_ID}-icr-pull-secret"
ENV_SECRET_NAME="${INSTANCE_ID}-env-secret"
CHART_PATH="${SCRIPT_DIR}/cuga"

echo ""
echo "========================================"
echo "  CUGA OpenShift Deployment"
echo "  Instance  : ${INSTANCE_ID}"
echo "  Release   : ${RELEASE_NAME}"
echo "  Namespace : ${NAMESPACE}"
echo "  Hostname  : ${ROUTE_HOSTNAME:-<auto-assigned by OpenShift>}"
echo "========================================"
echo ""

# ---------------------------------------------------------------------------
# 1. Create namespace (idempotent)
# ---------------------------------------------------------------------------

echo "[1/5] Creating namespace: ${NAMESPACE}"
kubectl create namespace "${NAMESPACE}" \
  --dry-run=client -o yaml | kubectl apply -f -

# ---------------------------------------------------------------------------
# 2. Image pull secret for IBM Container Registry
# ---------------------------------------------------------------------------

echo "[2/5] Creating image pull secret: ${PULL_SECRET_NAME}"
kubectl create secret docker-registry "${PULL_SECRET_NAME}" \
  --docker-server=us.icr.io \
  --docker-username=iamapikey \
  --docker-password="${ICR_API_KEY}" \
  --namespace="${NAMESPACE}" \
  --dry-run=client -o yaml | kubectl apply -f -

# ---------------------------------------------------------------------------
# 3. Environment secret (sensitive values only)
# ---------------------------------------------------------------------------

echo "[3/5] Creating env secret: ${ENV_SECRET_NAME}"

# Build --from-literal args for sensitive keys
SECRET_ARGS=(
  "--from-literal=GROQ_API_KEY=${GROQ_API_KEY}"
)

[[ -n "${OIDC_CLIENT_ID:-}" ]]            && SECRET_ARGS+=("--from-literal=OIDC_CLIENT_ID=${OIDC_CLIENT_ID}")
[[ -n "${OIDC_CLIENT_SECRET:-}" ]]        && SECRET_ARGS+=("--from-literal=OIDC_CLIENT_SECRET=${OIDC_CLIENT_SECRET}")
[[ -n "${OIDC_DISCOVERY_URL:-}" ]]        && SECRET_ARGS+=("--from-literal=OIDC_DISCOVERY_URL=${OIDC_DISCOVERY_URL}")
[[ -n "${OIDC_REDIRECT_URI:-}" ]]         && SECRET_ARGS+=("--from-literal=OIDC_REDIRECT_URI=${OIDC_REDIRECT_URI}")
[[ -n "${DYNACONF_STORAGE__POSTGRES_URL:-}" ]] && SECRET_ARGS+=("--from-literal=DYNACONF_STORAGE__POSTGRES_URL=${DYNACONF_STORAGE__POSTGRES_URL}")

kubectl create secret generic "${ENV_SECRET_NAME}" \
  "${SECRET_ARGS[@]}" \
  --namespace="${NAMESPACE}" \
  --dry-run=client -o yaml | kubectl apply -f -

# ---------------------------------------------------------------------------
# 4. Helm deploy
# ---------------------------------------------------------------------------

echo "[4/5] Deploying Helm release: ${RELEASE_NAME}"

HELM_ARGS=(
  upgrade --install "${RELEASE_NAME}" "${CHART_PATH}"
  --namespace "${NAMESPACE}"
  --set "image.repository=${IMAGE_REPOSITORY}"
  --set "image.tag=${IMAGE_TAG}"
  --set "image.pullPolicy=Always"
  --set "imagePullSecrets[0].name=${PULL_SECRET_NAME}"
  --set "existingSecret=${ENV_SECRET_NAME}"
  --set "env.UV_CACHE_DIR=${UV_CACHE_DIR:-/tmp/uv-cache}"
  --set "env.MODEL_NAME=${MODEL_NAME}"
  --set "env.AGENT_SETTING_CONFIG=${AGENT_SETTING_CONFIG}"
  --set "env.DYNACONF_AUTH__ENABLED=${DYNACONF_AUTH__ENABLED:-true}"
  --set "env.DYNACONF_STORAGE__MODE=${DYNACONF_STORAGE__MODE:-local}"
  --set "route.enabled=true"
)

if [[ -n "${ROUTE_HOSTNAME:-}" ]]; then
  HELM_ARGS+=("--set" "route.hostname=${ROUTE_HOSTNAME}")
fi

helm "${HELM_ARGS[@]}"

# ---------------------------------------------------------------------------
# 5. Print access URLs
# ---------------------------------------------------------------------------

echo ""
echo "[5/5] Deployment complete. Fetching route..."

# Give the route a moment to be assigned a host if no hostname was specified
sleep 2

ASSIGNED_HOST=$(kubectl get route "${RELEASE_NAME}" \
  --namespace="${NAMESPACE}" \
  -o jsonpath='{.spec.host}' 2>/dev/null || true)

echo ""
echo "========================================"
echo "  Access URLs (HTTPS)"
if [[ -n "${ASSIGNED_HOST}" ]]; then
  echo "  App     : https://${ASSIGNED_HOST}/"
  echo "  Chat    : https://${ASSIGNED_HOST}/chat"
  echo "  Manage  : https://${ASSIGNED_HOST}/manage"
else
  echo "  Route not yet ready. Check with:"
  echo "  kubectl get route ${RELEASE_NAME} -n ${NAMESPACE}"
fi
echo "========================================"
echo ""
