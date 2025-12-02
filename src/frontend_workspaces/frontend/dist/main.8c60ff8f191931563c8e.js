/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../agentic_chat/src/AgentHumanConfig.tsx":
/*!************************************************!*\
  !*** ../agentic_chat/src/AgentHumanConfig.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AgentHumanConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");



function AgentHumanConfig({
  onClose
}) {
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    autonomyLevel: 2,
    humanInTheLoop: true,
    requireConfirmationFor: {
      approvalOfPlans: true,
      criticalActions: true,
      financialTransactions: true,
      dataModification: false,
      externalCommunication: true,
      longRunningTasks: false
    },
    interventionRules: [],
    clarificationThreshold: 70,
    autoApproveSimpleTasks: true,
    escalationEnabled: true,
    adaptiveLearning: {
      enabled: false,
      startWithHighOversight: true,
      learningRate: 50,
      confidenceThreshold: 85,
      memoryBased: true,
      trackSuccessRate: true,
      minInteractionsBeforeLearning: 10
    }
  });
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  const [newRule, setNewRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
  }, []);
  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config/agent-human');
      if (response.ok) {
        const data = await response.json();
        setConfig({
          autonomyLevel: data.autonomyLevel ?? 2,
          humanInTheLoop: data.humanInTheLoop ?? true,
          requireConfirmationFor: data.requireConfirmationFor ?? {
            approvalOfPlans: true,
            criticalActions: true,
            financialTransactions: true,
            dataModification: false,
            externalCommunication: true,
            longRunningTasks: false
          },
          interventionRules: data.interventionRules ?? [],
          clarificationThreshold: data.clarificationThreshold ?? 70,
          autoApproveSimpleTasks: data.autoApproveSimpleTasks ?? true,
          escalationEnabled: data.escalationEnabled ?? true,
          adaptiveLearning: data.adaptiveLearning ?? {
            enabled: false,
            startWithHighOversight: true,
            learningRate: 50,
            confidenceThreshold: 85,
            memoryBased: true,
            trackSuccessRate: true,
            minInteractionsBeforeLearning: 10
          }
        });
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/agent-human', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  const addRule = () => {
    if (newRule.trim()) {
      const rule = {
        id: Date.now().toString(),
        condition: newRule.trim(),
        enabled: true
      };
      setConfig({
        ...config,
        interventionRules: [...config.interventionRules, rule]
      });
      setNewRule("");
    }
  };
  const removeRule = id => {
    setConfig({
      ...config,
      interventionRules: config.interventionRules.filter(r => r.id !== id)
    });
  };
  const toggleRule = id => {
    setConfig({
      ...config,
      interventionRules: config.interventionRules.map(r => r.id === id ? {
        ...r,
        enabled: !r.enabled
      } : r)
    });
  };
  const getAutonomyLabel = level => {
    switch (level) {
      case 1:
        return "Safe - Always Asks";
      case 2:
        return "Balanced - Sometimes Asks";
      case 3:
        return "Risky - Rarely Asks";
      default:
        return "Balanced - Sometimes Asks";
    }
  };
  const getAutonomyColor = level => {
    switch (level) {
      case 1:
        return "#10b981";
      // Green for safest (always asks)
      case 2:
        return "#f59e0b";
      // Orange for moderate
      case 3:
        return "#ef4444";
      // Red for riskiest (rarely asks)
      default:
        return "#f59e0b";
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Agent / Human Interaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Autonomy Level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "autonomy-slider-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "autonomy-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 24,
    color: config.autonomyLevel === 1 ? getAutonomyColor(config.autonomyLevel) : "#cbd5e1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 24,
    color: config.autonomyLevel === 3 ? getAutonomyColor(config.autonomyLevel) : "#cbd5e1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "autonomy-label-display"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "autonomy-value",
    style: {
      color: getAutonomyColor(config.autonomyLevel)
    }
  }, "Level ", config.autonomyLevel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "autonomy-description"
  }, getAutonomyLabel(config.autonomyLevel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    min: "1",
    max: "3",
    step: "1",
    value: config.autonomyLevel,
    onChange: e => setConfig({
      ...config,
      autonomyLevel: parseInt(e.target.value)
    }),
    className: "autonomy-slider",
    style: {
      background: `linear-gradient(to right, ${getAutonomyColor(config.autonomyLevel)} 0%, ${getAutonomyColor(config.autonomyLevel)} ${(config.autonomyLevel - 1) * 50}%, #e5e7eb ${(config.autonomyLevel - 1) * 50}%, #e5e7eb 100%)`
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "safety-indicator",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "8px",
      marginBottom: "4px",
      padding: "0 4px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "safety-text",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#10b981"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Safe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "safety-text",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#f59e0b"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Caution")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "safety-text",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#ef4444"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Risky"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "autonomy-markers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Level 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Level 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Level 3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Slide left for maximum safety (agent always asks) or right for higher risk but faster results")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.humanInTheLoop,
    onChange: e => setConfig({
      ...config,
      humanInTheLoop: e.target.checked
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Human-in-the-Loop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Allow human oversight and intervention during agent execution")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.autoApproveSimpleTasks,
    onChange: e => setConfig({
      ...config,
      autoApproveSimpleTasks: e.target.checked
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Auto-Approve Simple Tasks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Skip confirmation for low-risk operations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.escalationEnabled,
    onChange: e => setConfig({
      ...config,
      escalationEnabled: e.target.checked
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Escalation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Agent can escalate complex issues to human"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Require Confirmation For"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "confirmation-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.requireConfirmationFor.approvalOfPlans,
    onChange: e => setConfig({
      ...config,
      requireConfirmationFor: {
        ...config.requireConfirmationFor,
        approvalOfPlans: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Approval of Plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Agent must get approval before executing task plans"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.requireConfirmationFor.criticalActions,
    onChange: e => setConfig({
      ...config,
      requireConfirmationFor: {
        ...config.requireConfirmationFor,
        criticalActions: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Critical Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Deletions, system changes, irreversible operations"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.requireConfirmationFor.financialTransactions,
    onChange: e => setConfig({
      ...config,
      requireConfirmationFor: {
        ...config.requireConfirmationFor,
        financialTransactions: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Financial Transactions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Payments, purchases, billing operations"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.requireConfirmationFor.dataModification,
    onChange: e => setConfig({
      ...config,
      requireConfirmationFor: {
        ...config.requireConfirmationFor,
        dataModification: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Data Modification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Editing, updating, or modifying existing data"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.requireConfirmationFor.externalCommunication,
    onChange: e => setConfig({
      ...config,
      requireConfirmationFor: {
        ...config.requireConfirmationFor,
        externalCommunication: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "External Communication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Sending emails, messages, or external API calls"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.requireConfirmationFor.longRunningTasks,
    onChange: e => setConfig({
      ...config,
      requireConfirmationFor: {
        ...config.requireConfirmationFor,
        longRunningTasks: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Long-Running Tasks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Tasks estimated to take more than 5 minutes")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Return to Human When..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: newRule,
    onChange: e => setNewRule(e.target.value),
    onKeyPress: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        addRule();
      }
    },
    placeholder: "e.g., encountering sensitive data",
    disabled: !config.humanInTheLoop,
    style: {
      width: "300px",
      padding: "6px 10px",
      fontSize: "13px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-small-btn",
    onClick: addRule,
    disabled: !config.humanInTheLoop || !newRule.trim()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 12
  }), "Add Rule"))), config.interventionRules.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "policies-empty"
  }, "No intervention rules defined. Add conditions when the agent should return control to a human.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "intervention-rules-list"
  }, config.interventionRules.map(rule => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: rule.id,
    className: "intervention-rule-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: rule.enabled,
    onChange: () => toggleRule(rule.id),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `rule-text ${!rule.enabled ? 'disabled' : ''}`
  }, rule.condition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-btn",
    onClick: () => removeRule(rule.id),
    disabled: !config.humanInTheLoop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Define specific scenarios when the agent should pause and request human input")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Adaptive Learning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.adaptiveLearning.enabled,
    onChange: e => setConfig({
      ...config,
      adaptiveLearning: {
        ...config.adaptiveLearning,
        enabled: e.target.checked
      }
    }),
    disabled: !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Adaptive Learning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Agent learns from interactions and adjusts autonomy over time")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adaptive-learning-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "info-text"
  }, "With adaptive learning, the agent starts cautious and gradually becomes more autonomous as it learns from successful interactions and builds confidence through memory.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.adaptiveLearning.startWithHighOversight,
    onChange: e => setConfig({
      ...config,
      adaptiveLearning: {
        ...config.adaptiveLearning,
        startWithHighOversight: e.target.checked
      }
    }),
    disabled: !config.adaptiveLearning.enabled || !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Start with High Oversight")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Agent asks frequently at first, then reduces questions as it learns")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.adaptiveLearning.memoryBased,
    onChange: e => setConfig({
      ...config,
      adaptiveLearning: {
        ...config.adaptiveLearning,
        memoryBased: e.target.checked
      }
    }),
    disabled: !config.adaptiveLearning.enabled || !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Memory-Based Learning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Use past interactions from memory to inform decisions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.adaptiveLearning.trackSuccessRate,
    onChange: e => setConfig({
      ...config,
      adaptiveLearning: {
        ...config.adaptiveLearning,
        trackSuccessRate: e.target.checked
      }
    }),
    disabled: !config.adaptiveLearning.enabled || !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Track Success Rate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Monitor and learn from successful vs. corrected actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Min. Interactions Before Learning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: config.adaptiveLearning.minInteractionsBeforeLearning,
    onChange: e => setConfig({
      ...config,
      adaptiveLearning: {
        ...config.adaptiveLearning,
        minInteractionsBeforeLearning: parseInt(e.target.value)
      }
    }),
    min: "1",
    max: "100",
    disabled: !config.adaptiveLearning.enabled || !config.humanInTheLoop
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Number of interactions required before agent starts adapting")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "learning-examples"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "How It Works:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "learning-bullets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "First Time:"), " Agent asks for confirmation on most actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "After Success:"), " If action succeeds and you approve, confidence increases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Pattern Recognition:"), " Agent learns from similar past situations in memory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Gradual Autonomy:"), " Over time, agent stops asking for familiar tasks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Context Aware:"), " Still asks for new or high-risk situations")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))));
}

/***/ }),

/***/ "../agentic_chat/src/App.tsx":
/*!***********************************!*\
  !*** ../agentic_chat/src/App.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: function() { return /* binding */ App; },
/* harmony export */   BootstrapAgentic: function() { return /* binding */ BootstrapAgentic; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js");
/* harmony import */ var _CustomChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomChat */ "../agentic_chat/src/CustomChat.tsx");
/* harmony import */ var _ConfigHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigHeader */ "../agentic_chat/src/ConfigHeader.tsx");
/* harmony import */ var _LeftSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeftSidebar */ "../agentic_chat/src/LeftSidebar.tsx");
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StatusBar */ "../agentic_chat/src/StatusBar.tsx");
/* harmony import */ var _WorkspacePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkspacePanel */ "../agentic_chat/src/WorkspacePanel.tsx");
/* harmony import */ var _FileAutocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FileAutocomplete */ "../agentic_chat/src/FileAutocomplete.tsx");
/* harmony import */ var _AppLayout_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppLayout.css */ "../agentic_chat/src/AppLayout.css");
/* harmony import */ var _mockApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mockApi */ "../agentic_chat/src/mockApi.ts");
/* harmony import */ var _workspaceThrottle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workspaceThrottle */ "../agentic_chat/src/workspaceThrottle.ts");











 // Enforce 3-second minimum interval between workspace API calls

// Error Boundary Component
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          padding: "20px",
          textAlign: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Something went wrong"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, this.state.error?.message || "Unknown error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: () => {
          this.setState({
            hasError: false,
            error: null
          });
          window.location.reload();
        }
      }, "Reload Page"));
    }
    return this.props.children;
  }
}
function App() {
  const [globalVariables, setGlobalVariables] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [variablesHistory, setVariablesHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedAnswerId, setSelectedAnswerId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [workspacePanelOpen, setWorkspacePanelOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [highlightedFile, setHighlightedFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("conversations");
  const [previousVariablesCount, setPreviousVariablesCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [previousHistoryLength, setPreviousHistoryLength] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const leftSidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Handle variables updates from CustomChat
  const handleVariablesUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((variables, history) => {
    console.log('[App] handleVariablesUpdate called');
    console.log('[App] Variables keys:', Object.keys(variables));
    console.log('[App] History length:', history.length);
    console.log('[App] Previous variables count:', previousVariablesCount);
    console.log('[App] Previous history length:', previousHistoryLength);
    const currentVariablesCount = Object.keys(variables).length;
    const currentHistoryLength = history.length;
    setGlobalVariables(variables);
    setVariablesHistory(history);

    // Only switch to variables tab when there's new data (more variables or longer history)
    const hasNewVariables = currentVariablesCount > previousVariablesCount;
    const hasNewHistory = currentHistoryLength > previousHistoryLength;
    if (hasNewVariables || hasNewHistory) {
      console.log('[App] Switching to variables tab - new data detected');
      setActiveTab("variables");
    }

    // Update previous counts
    setPreviousVariablesCount(currentVariablesCount);
    setPreviousHistoryLength(currentHistoryLength);
  }, [previousVariablesCount, previousHistoryLength]);

  // Handle message sent from CustomChat
  const handleMessageSent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(message => {
    console.log('[App] handleMessageSent called with message:', message);
    console.log('[App] leftSidebarRef.current:', leftSidebarRef.current);
    // Add a new conversation to the left sidebar
    if (leftSidebarRef.current) {
      const title = message.length > 50 ? message.substring(0, 50) + "..." : message;
      console.log('[App] Calling addConversation with title:', title);
      leftSidebarRef.current.addConversation(title);
    } else {
      console.log('[App] leftSidebarRef.current is null');
    }
    // Switch to conversations tab to show the new conversation
    setActiveTab("conversations");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfigHeader__WEBPACK_IMPORTED_MODULE_3__.ConfigHeader, {
    onToggleLeftSidebar: () => setLeftSidebarCollapsed(!leftSidebarCollapsed),
    onToggleWorkspace: () => setWorkspacePanelOpen(!workspacePanelOpen),
    leftSidebarCollapsed: leftSidebarCollapsed,
    workspaceOpen: workspacePanelOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LeftSidebar__WEBPACK_IMPORTED_MODULE_4__.LeftSidebar, {
    globalVariables: globalVariables,
    variablesHistory: variablesHistory,
    selectedAnswerId: selectedAnswerId,
    onSelectAnswer: setSelectedAnswerId,
    isCollapsed: leftSidebarCollapsed,
    activeTab: activeTab,
    onTabChange: setActiveTab,
    leftSidebarRef: leftSidebarRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chat-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomChat__WEBPACK_IMPORTED_MODULE_2__.CustomChat, {
    onVariablesUpdate: handleVariablesUpdate,
    onFileAutocompleteOpen: () => setWorkspacePanelOpen(true),
    onFileHover: setHighlightedFile,
    onMessageSent: handleMessageSent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WorkspacePanel__WEBPACK_IMPORTED_MODULE_6__.WorkspacePanel, {
    isOpen: workspacePanelOpen,
    onToggle: () => setWorkspacePanelOpen(!workspacePanelOpen),
    highlightedFile: highlightedFile
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StatusBar__WEBPACK_IMPORTED_MODULE_5__.StatusBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FileAutocomplete__WEBPACK_IMPORTED_MODULE_7__.FileAutocomplete, {
    onFileSelect: path => console.log("File selected:", path),
    onAutocompleteOpen: () => setWorkspacePanelOpen(true),
    onFileHover: setHighlightedFile,
    disabled: false
  })));
}
function BootstrapAgentic(contentRoot) {
  // Create a root for React to render into.
  console.log("Bootstrapping Agentic Chat in sidepanel");
  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(contentRoot);
  // Render the App component into the root.
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));
}

/***/ }),

/***/ "../agentic_chat/src/AppLayout.css":
/*!*****************************************!*\
  !*** ../agentic_chat/src/AppLayout.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_AppLayout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./AppLayout.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/AppLayout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_AppLayout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_AppLayout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_AppLayout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_AppLayout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/CardManager.css":
/*!*******************************************!*\
  !*** ../agentic_chat/src/CardManager.css ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CardManager_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./CardManager.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CardManager.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CardManager_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CardManager_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CardManager_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CardManager_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/CardManager.tsx":
/*!*******************************************!*\
  !*** ../agentic_chat/src/CardManager.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "../node_modules/.pnpm/marked@16.3.0/node_modules/marked/lib/marked.esm.js");
/* harmony import */ var _CardManager_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardManager.css */ "../agentic_chat/src/CardManager.css");
/* harmony import */ var _CustomResponseStyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomResponseStyles.css */ "../agentic_chat/src/CustomResponseStyles.css");
/* harmony import */ var _task_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task_status_component */ "../agentic_chat/src/task_status_component.tsx");
/* harmony import */ var _action_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action_status_component */ "../agentic_chat/src/action_status_component.tsx");
/* harmony import */ var _coder_agent_output__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coder_agent_output */ "../agentic_chat/src/coder_agent_output.tsx");
/* harmony import */ var _app_analyzer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app_analyzer_component */ "../agentic_chat/src/app_analyzer_component.tsx");
/* harmony import */ var _task_decomposition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task_decomposition */ "../agentic_chat/src/task_decomposition.tsx");
/* harmony import */ var _shortlister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shortlister */ "../agentic_chat/src/shortlister.tsx");
/* harmony import */ var _generic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generic_component */ "../agentic_chat/src/generic_component.tsx");
/* harmony import */ var _action_agent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action_agent */ "../agentic_chat/src/action_agent.tsx");
/* harmony import */ var _qa_agent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./qa_agent */ "../agentic_chat/src/qa_agent.tsx");
/* harmony import */ var _Followup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Followup */ "../agentic_chat/src/Followup.tsx");
/* harmony import */ var _StreamingWorkflow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./StreamingWorkflow */ "../agentic_chat/src/StreamingWorkflow.ts");
/* harmony import */ var _ToolReview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ToolReview */ "../agentic_chat/src/ToolReview.tsx");



// Simple ChatInstance interface (no Carbon dependency)



// Import components from CustomResponseExample












// Color constant for highlighting important information
const HIGHLIGHT_COLOR = "#4e00ec";

// Extend the global interface typing to include the new loader API

const CardManager = ({
  chatInstance
}) => {
  const [currentSteps, setCurrentSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentCardId, setCurrentCardId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isProcessingComplete, setIsProcessingComplete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showDetails, setShowDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isReasoningCollapsed, setIsReasoningCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [hasFinalAnswer, setHasFinalAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [currentStepIndex, setCurrentStepIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isStopped, setIsStopped] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('inplace');
  const [globalVariables, setGlobalVariables] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [variablesHistory, setVariablesHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedAnswerId, setSelectedAnswerId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  // Loader for next step within this card is derived from processing state
  const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const stepRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});

  // Function to mark a step as completed
  const markStepCompleted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(stepId => {
    setCurrentSteps(prev => prev.map(step => step.id === stepId ? {
      ...step,
      completed: true
    } : step));
  }, []);

  // Initialize global interface

  // No cross-card loader logic needed; loader will be shown within the card while processing

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== "undefined") {
      console.log("Setting up global aiSystemInterface");
      window.aiSystemInterface = {
        addStep: (title, content) => {
          console.log("🎯 addStep called:", title, content);
          console.log("🎯 Content type:", typeof content);
          console.log("🎯 Current steps before adding:", currentSteps.length);

          // If content is JSON string, try to parse and log it
          if (typeof content === 'string' && (content.startsWith('{') || content.startsWith('['))) {
            try {
              const parsed = JSON.parse(content);
              console.log("🎯 Parsed content:", parsed);
              console.log("🎯 Has variables:", !!parsed.variables);
              console.log("🎯 Variables keys:", parsed.variables ? Object.keys(parsed.variables) : []);
            } catch (e) {
              console.log("🎯 Failed to parse content as JSON");
            }
          }
          const newStep = {
            id: `step-${Date.now()}-${Math.random()}`,
            title,
            content,
            expanded: true,
            isNew: true,
            timestamp: Date.now()
          };
          setCurrentSteps(prev => {
            console.log("🎯 setCurrentSteps called with prev length:", prev.length);
            // If this is the first step, start a new card
            if (prev.length === 0) {
              const newCardId = `card-${Date.now()}`;
              setCurrentCardId(newCardId);
              console.log("🎯 First step - creating new card:", newCardId);
              return [newStep];
            }
            // Otherwise, add to current card
            console.log("🎯 Adding to existing card");
            return [...prev, newStep];
          });

          // Handle in-place card switching vs append mode
          if (viewMode === 'inplace') {
            if (currentSteps.length > 0) {
              setCurrentStepIndex(prev => prev + 1);
            } else {
              setCurrentStepIndex(0);
            }
          }

          // Auto-expand "Waiting for your input" components and collapse reasoning
          if (title === "SuggestHumanActions") {
            setShowDetails(prev => ({
              ...prev,
              [newStep.id]: true
            }));
            // Collapse reasoning process when user action is needed
            setIsReasoningCollapsed(true);
          }

          // Check if this is a final answer step
          if (title === "FinalAnswerAgent" || title === "FinalAnswer") {
            console.log("🎯 Final answer detected, triggering reasoning collapse");
            setHasFinalAnswer(true);
            // Collapse reasoning immediately when final answer arrives
            setIsReasoningCollapsed(true);
            // Show details by default for final answer
            setShowDetails(prev => ({
              ...prev,
              [newStep.id]: true
            }));
          }
        },
        // No external loader toggle needed for within-card loading
        getAllSteps: () => currentSteps,
        stopProcessing: () => {
          setIsStopped(true);
          setIsProcessingComplete(true);
          setIsReasoningCollapsed(true);
          setShowDetails({});
        },
        isProcessingStopped: () => isProcessingComplete,
        setProcessingComplete: isComplete => {
          setIsProcessingComplete(isComplete);
        },
        forceReset: () => {
          setCurrentSteps([]);
          setIsProcessingComplete(false);
          setCurrentCardId(null);
          setIsReasoningCollapsed(false);
          setHasFinalAnswer(false);
          setCurrentStepIndex(0);
          setIsStopped(false);
          setShowDetails({});
          stepRefs.current = {};
          // Note: variablesHistory is preserved across conversations
        },
        hasStepWithTitle: title => {
          return currentSteps.some(step => step.title === title);
        }
      };
    }
  }, [currentSteps, currentCardId, isProcessingComplete, viewMode]);

  // Auto-scroll to latest step
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentSteps.length > 0) {
      const timeoutId = setTimeout(() => {
        const latestStep = currentSteps[currentSteps.length - 1];
        const latestStepRef = stepRefs.current[latestStep.id];
        if (latestStepRef) {
          latestStepRef.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        } else if (cardRef.current) {
          // Fallback to container scroll if step ref not found
          cardRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [currentSteps.length]);

  // Cleanup step refs on unmount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      stepRefs.current = {};
    };
  }, []);

  // Extract variables from final answer steps and track by turn
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('[Variables Debug] Processing steps, total:', currentSteps.length);
    const newHistory = [];
    let turnNumber = 0;
    currentSteps.forEach(step => {
      console.log('[Variables Debug] Step:', step.title, 'Type:', typeof step.content);

      // Only process Answer or FinalAnswerAgent steps
      if (step.title !== "Answer" && step.title !== "FinalAnswerAgent") {
        return;
      }
      console.log('[Variables Debug] Processing Answer/FinalAnswerAgent step');
      try {
        let parsedContent;
        let variables = {};
        if (typeof step.content === "string") {
          try {
            parsedContent = JSON.parse(step.content);
            console.log('[Variables Debug] Parsed JSON content:', parsedContent);

            // Check if we have variables in the parsed content
            if (parsedContent.data !== undefined && parsedContent.variables) {
              variables = parsedContent.variables;
              console.log('[Variables Debug] Found variables in data:', variables);
            } else if (parsedContent.variables) {
              variables = parsedContent.variables;
              console.log('[Variables Debug] Found variables directly:', variables);
            }
          } catch (e) {
            console.log('[Variables Debug] Failed to parse JSON:', e);
          }
        } else if (step.content && typeof step.content === "object" && 'variables' in step.content) {
          const contentWithVars = step.content;
          if (contentWithVars.variables) {
            variables = contentWithVars.variables;
            console.log('[Variables Debug] Found variables in object:', variables);
          }
        }

        // Only add to history if this step has variables
        if (Object.keys(variables).length > 0) {
          console.log('[Variables Debug] Adding to history with', Object.keys(variables).length, 'variables');
          newHistory.push({
            id: step.id,
            title: `Turn ${turnNumber}`,
            timestamp: step.timestamp,
            variables: variables
          });
          turnNumber++;
        } else {
          console.log('[Variables Debug] No variables found in this step');
        }
      } catch (e) {
        console.log('[Variables Debug] Error processing step:', e);
      }
    });

    // Update history only if it actually changed
    setVariablesHistory(prev => {
      // Check if history actually changed
      if (prev.length !== newHistory.length) {
        console.log('Variables history updated: length changed', prev.length, '->', newHistory.length);
        return newHistory;
      }

      // Check if any entries are different
      const hasChanges = prev.some((entry, index) => {
        const newEntry = newHistory[index];
        return !newEntry || entry.id !== newEntry.id || JSON.stringify(entry.variables) !== JSON.stringify(newEntry.variables);
      });
      if (hasChanges) {
        console.log('Variables history updated: content changed');
      }
      return hasChanges ? newHistory : prev;
    });

    // Update selectedAnswerId based on available history
    setSelectedAnswerId(currentSelectedId => {
      // If we have new history from current steps, use that
      if (newHistory.length > 0) {
        if (currentSelectedId && newHistory.find(e => e.id === currentSelectedId)) {
          // Keep current selection if it still exists in new history
          return currentSelectedId;
        }
        // Auto-select most recent from new history
        console.log('Auto-selecting most recent turn:', newHistory[newHistory.length - 1].title);
        return newHistory[newHistory.length - 1].id;
      }

      // No new history from current steps, check if we have existing history
      // This happens when forceReset is called - we want to preserve selection
      if (variablesHistory.length > 0) {
        if (currentSelectedId && variablesHistory.find(e => e.id === currentSelectedId)) {
          // Keep current selection if it exists in existing history
          return currentSelectedId;
        }
        // Auto-select most recent from existing history
        console.log('Preserving selection from existing history:', variablesHistory[variablesHistory.length - 1].title);
        return variablesHistory[variablesHistory.length - 1].id;
      }

      // No history at all
      return null;
    });
  }, [currentSteps]);

  // Update globalVariables based on selected answer
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedAnswerId) {
      const selected = variablesHistory.find(e => e.id === selectedAnswerId);
      if (selected) {
        setGlobalVariables(selected.variables);
      }
    } else if (variablesHistory.length > 0) {
      // Default to most recent
      setGlobalVariables(variablesHistory[variablesHistory.length - 1].variables);
    } else {
      setGlobalVariables({});
    }
  }, [selectedAnswerId, variablesHistory]);

  // Emit variables updates to App.tsx
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const event = new CustomEvent('variablesUpdate', {
      detail: {
        variables: globalVariables,
        history: variablesHistory
      }
    });
    window.dispatchEvent(event);
  }, [globalVariables, variablesHistory]);

  // Function to generate natural language descriptions for each case
  const getCaseDescription = (stepTitle, parsedContent) => {
    switch (stepTitle) {
      case "PlanControllerAgent":
        if (parsedContent.subtasks_progress && parsedContent.next_subtask) {
          const completed = parsedContent.subtasks_progress.filter(status => status === "completed").length;
          const total = parsedContent.subtasks_progress.length;
          if (total === 0) {
            return `I'm managing the overall task progress. There's <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">one next task</span>. ${parsedContent.conclude_task ? 'The task is ready to be concluded.' : `Next up: <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${parsedContent.next_subtask}</span>`}`;
          }
          return `I'm managing the overall task progress. Currently <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${completed} out of ${total} subtasks</span> are completed. ${parsedContent.conclude_task ? 'The task is ready to be concluded.' : `Next up: <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${parsedContent.next_subtask}</span>`}`;
        }
        return "I'm analyzing the task structure and planning the execution approach.";
      case "TaskDecompositionAgent":
        const taskCount = parsedContent.task_decomposition?.length || 0;
        return `I've broken down your request into <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${taskCount} manageable steps</span>. Each step is designed to work with specific applications and accomplish a specific part of your overall goal.`;
      case "APIPlannerAgent":
        if (parsedContent.action && (parsedContent.action_input_coder_agent || parsedContent.action_input_shortlisting_agent || parsedContent.action_input_conclude_task)) {
          const actionType = parsedContent.action;
          if (actionType === "CoderAgent") {
            return `I'm preparing to write code for you. The task involves: <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${parsedContent.action_input_coder_agent?.task_description || 'Code generation task'}</span>`;
          } else if (actionType === "ApiShortlistingAgent") {
            const taskDesc = parsedContent.action_input_shortlisting_agent?.task_description;
            if (taskDesc) {
              const preview = taskDesc.length > 60 ? taskDesc.substring(0, 60) + '...' : taskDesc;
              return `I'm analyzing available APIs, <span style="color:${HIGHLIGHT_COLOR}; font-weight:500;">${preview}</span>`;
            }
            return `I'm analyzing available APIs to find the best options for your request. This will help me understand what tools are available to accomplish your task.`;
          } else if (actionType === "ConcludeTask") {
            const taskDesc = parsedContent.action_input_conclude_task?.final_response;
            if (taskDesc) {
              const preview = taskDesc.length > 60 ? taskDesc.substring(0, 60) + '...' : taskDesc;
              return `I'm ready to provide you with the final answer based on all the work completed so far. <span style="color:${HIGHLIGHT_COLOR}; font-weight:500;">${preview}</span>`;
            }
            return `I'm ready to provide you with the final answer based on all the work completed so far.`;
          }
        }
        return "I'm reflecting on the code and planning the next steps in the workflow.";
      case "CodeAgent":
        if (parsedContent.code) {
          const codeLines = parsedContent.code.split('\n').length;
          const outputPreview = parsedContent.execution_output ? parsedContent.execution_output.substring(0, 50) + (parsedContent.execution_output.length > 50 ? '...' : '') : '';
          return `I've generated and executed <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${codeLines} lines of code</span> to accomplish your request. Here's a preview of the output: <span style="color:#10b981; font-family:monospace; background:#f0fdf4; padding:2px 4px; border-radius:3px; font-weight:500;">${outputPreview}</span>`;
        }
        return "I'm working on generating code for your request.";
      case "ShortlisterAgent":
        if (parsedContent.result) {
          const apiCount = parsedContent.result.length;
          const topResult = parsedContent.result[0];
          const topScore = topResult?.relevance_score || 0;
          const apiName = topResult?.name || topResult?.title || 'Unknown API';
          const truncatedName = apiName.length > 30 ? apiName.substring(0, 30) + '...' : apiName;
          return `I've analyzed and shortlisted <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${apiCount} relevant APIs</span> for your request. The top match is <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${truncatedName}</span> with a <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${Math.round(topScore * 100)}% relevance score</span>.`;
        }
        return "I'm analyzing available APIs to find the most relevant ones for your request.";
      case "TaskAnalyzerAgent":
        if (parsedContent && Array.isArray(parsedContent)) {
          const appNames = parsedContent.map(app => `<span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${app.name}</span>`).join(', ');
          return `I've identified <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${parsedContent.length} integrated applications</span> that can help with your request: ${appNames}. These apps are ready to be used in the workflow.`;
        }
        return "I'm analyzing the available applications to understand what tools we can use.";
      case "PlannerAgent":
        return `I'm planning the next action in the workflow. This involves determining the best approach to continue working on your request.`;
      case "QaAgent":
        if (parsedContent.name && parsedContent.answer) {
          return `I've analyzed the question "<span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${parsedContent.name}</span>" and provided a comprehensive answer with <span style="color:${HIGHLIGHT_COLOR}; font-weight: 600;">${parsedContent.answer.split(' ').length} words</span>.`;
        }
        return "I'm processing a question and preparing a detailed answer.";
      case "FinalAnswerAgent":
        if (parsedContent.final_answer) {
          return `I've completed your request and prepared the final answer.`;
        }
        return "I'm preparing the final answer to your request.";
      case "ReuseAgent":
        if (typeof parsedContent === "string") return parsedContent.split("\n")[0];
        return "Save and reuse operation completed.";
      case "SuggestHumanActions":
        if (parsedContent.action_id) {
          return "I'm waiting for your input to continue. Please review the suggested action and let me know how you'd like to proceed.";
        }
        return "I'm preparing suggestions for your next action.";
      case "APICodePlannerAgent":
        const contentPreview = typeof parsedContent === 'string' ? parsedContent : JSON.stringify(parsedContent);
        const preview = contentPreview.length > 80 ? contentPreview.substring(0, 80) + '...' : contentPreview;
        return `I've generated a plan for the coding agent to follow. Plan preview: <span style="color:${HIGHLIGHT_COLOR}; font-weight:500;">${preview}</span>`;
      default:
        return "I'm processing your request and working on the next step in the workflow.";
    }
  };

  // Memoized function to render the appropriate component based on step title and content
  const renderStepContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(step => {
    try {
      let parsedContent;
      if (typeof step.content === "string") {
        try {
          parsedContent = JSON.parse(step.content);
          const keys = Object.keys(parsedContent);
          console.log(`[${step.title}] Raw parsed content:`, parsedContent);
          console.log(`[${step.title}] Has data:`, parsedContent.data !== undefined);
          console.log(`[${step.title}] Has variables:`, !!parsedContent.variables);

          // Check if we have variables in the parsed content
          if (parsedContent.data !== undefined && parsedContent.variables) {
            console.log(`[${step.title}] Processing with variables...`);

            // For Answer step with variables: treat data as final_answer
            if (step.title === "Answer" || step.title === "FinalAnswerAgent") {
              parsedContent = {
                final_answer: parsedContent.data,
                variables: parsedContent.variables
              };
              console.log(`[${step.title}] Converted to final_answer format:`, parsedContent);
            } else if (typeof parsedContent.data === "object" && !Array.isArray(parsedContent.data)) {
              // Keep both data and variables if data is an object
              parsedContent = {
                ...parsedContent.data,
                variables: parsedContent.variables
              };
            } else {
              // If data is not an object, keep as is with variables
              parsedContent = {
                data: parsedContent.data,
                variables: parsedContent.variables
              };
            }
          } else if (keys.length === 1 && keys[0] === "data") {
            // Only data, no variables
            const data = parsedContent.data;
            parsedContent = data;
          }
        } catch (e) {
          parsedContent = step.content; // fallback
        }
      } else {
        parsedContent = step.content; // already an object
      }
      let outputElements = [];
      if (parsedContent && parsedContent.additional_data && parsedContent.additional_data.tool) {
        const newElem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToolReview__WEBPACK_IMPORTED_MODULE_15__["default"], {
          toolData: parsedContent.additional_data.tool
        });
        outputElements.push(newElem);
      }
      let mainElement = null;
      switch (step.title) {
        case "PlanControllerAgent":
          if (parsedContent.subtasks_progress && parsedContent.next_subtask) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_task_status_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
              taskData: parsedContent
            });
          }
          break;
        case "TaskDecompositionAgent":
          mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_task_decomposition__WEBPACK_IMPORTED_MODULE_8__["default"], {
            decompositionData: parsedContent
          });
          break;
        case "APIPlannerAgent":
          if (parsedContent.action && (parsedContent.action_input_coder_agent || parsedContent.action_input_shortlisting_agent || parsedContent.action_input_conclude_task)) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_status_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
              actionData: parsedContent
            });
          } else {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_generic_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: "Code Reflection",
              content: parsedContent
            });
          }
          break;
        case "CodeAgent":
          if (parsedContent.code) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coder_agent_output__WEBPACK_IMPORTED_MODULE_6__["default"], {
              coderData: parsedContent
            });
          }
          break;
        case "ShortlisterAgent":
          if (parsedContent) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shortlister__WEBPACK_IMPORTED_MODULE_9__["default"], {
              shortlisterData: parsedContent
            });
          }
          break;
        case "WaitForResponse":
          return null;
        case "TaskAnalyzerAgent":
          if (parsedContent && Array.isArray(parsedContent)) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_analyzer_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              appData: parsedContent
            });
          }
          break;
        case "PlannerAgent":
          if (parsedContent) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_agent__WEBPACK_IMPORTED_MODULE_11__["default"], {
              agentData: parsedContent
            });
          }
          break;
        case "simple_text_box":
          if (parsedContent) {
            mainElement = parsedContent;
          }
          break;
        case "QaAgent":
          if (parsedContent) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_qa_agent__WEBPACK_IMPORTED_MODULE_12__["default"], {
              qaData: parsedContent
            });
          }
          break;
        case "Answer":
        case "FinalAnswerAgent":
          if (parsedContent) {
            // Handle both cases: final_answer field or just a string content
            const answerText = parsedContent.final_answer || (typeof parsedContent === 'string' ? parsedContent : null);
            console.log('Answer/FinalAnswerAgent - parsedContent:', parsedContent);
            console.log('Answer/FinalAnswerAgent - answerText:', answerText);
            if (answerText) {
              mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                style: {
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#1e293b"
                },
                dangerouslySetInnerHTML: {
                  __html: (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(answerText)
                }
              });
            }
          }
          break;
        case "SuggestHumanActions":
          if (parsedContent && parsedContent.action_id) {
            mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Followup__WEBPACK_IMPORTED_MODULE_13__.FollowupAction, {
              followupAction: parsedContent,
              callback: async d => {
                console.log("calling fetch again");
                // Mark this step as completed before proceeding
                markStepCompleted(step.id);
                await (0,_StreamingWorkflow__WEBPACK_IMPORTED_MODULE_14__.fetchStreamingData)(chatInstance, "", d);
              }
            });
          }
          break;
        default:
          const isJSONLike = parsedContent !== null && (typeof parsedContent === "object" || Array.isArray(parsedContent)) && !(parsedContent instanceof Date) && !(parsedContent instanceof RegExp);
          if (isJSONLike) {
            parsedContent = JSON.stringify(parsedContent, null, 2);
            parsedContent = `\`\`\`json\n${parsedContent}\n\`\`\``;
          }
          if (!parsedContent) {
            parsedContent = "";
          }
          mainElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_generic_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
            title: step.title,
            content: parsedContent
          });
      }

      // Add main element to outputElements if it exists
      if (mainElement) {
        outputElements.push(mainElement);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, outputElements);
    } catch (error) {
      console.log(`Failed to parse JSON for step ${step.title}:`, error);
      return null;
    }
  }, [chatInstance, markStepCompleted]);

  // Memoized button click handler
  const handleToggleDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(stepId => {
    console.log('Button clicked for step:', stepId, 'Current state:', showDetails[stepId]);
    setShowDetails(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  }, [showDetails]);

  // Handle reasoning collapse toggle
  const handleToggleReasoning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsReasoningCollapsed(prev => !prev);
  }, []);
  const mapStepTitle = stepTitle => {
    const titleMap = {
      TaskDecompositionAgent: "Decomposed task into steps",
      TaskAnalyzerAgent: "Analyzed available applications",
      PlanControllerAgent: "Controlled task execution",
      SuggestHumanActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-4 h-4 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Waiting for your input")),
      APIPlannerAgent: "Planned API actions",
      APICodePlannerAgent: "Planned steps for coding agent",
      CodeAgent: "Generated code solution",
      ShortlisterAgent: "Shortlisted relevant APIs",
      QaAgent: "Answered question",
      FinalAnswerAgent: "Completed final answer",
      Answer: "Answer"
    };
    return titleMap[stepTitle] || stepTitle;
  };
  console.log("CardManager render - currentSteps:", currentSteps.length, "isProcessingComplete:", isProcessingComplete);

  // Check if there's an error step
  const hasErrorStep = currentSteps.some(step => step.title === "Error");

  // Separate final answer steps and active user action steps from reasoning steps
  const finalAnswerSteps = currentSteps.filter(step => step.title === "FinalAnswerAgent" || step.title === "FinalAnswer");

  // Show SuggestHumanActions as active if it's not marked as completed
  const userActionSteps = currentSteps.filter(step => step.title === "SuggestHumanActions" && !step.completed);

  // Include completed SuggestHumanActions in reasoning steps
  const reasoningSteps = currentSteps.filter(step => step.title !== "FinalAnswerAgent" && step.title !== "FinalAnswer" && !(step.title === "SuggestHumanActions" && !step.completed));

  // Get current step to display (before final answer or user action)
  const currentStep = currentSteps[currentStepIndex];
  const isShowingCurrentStep = !isStopped && viewMode === 'inplace' && !hasFinalAnswer && userActionSteps.length === 0 && currentStep;
  const isLoading = !isStopped && currentSteps.length > 0 && !isProcessingComplete && !hasFinalAnswer && userActionSteps.length === 0 && !hasErrorStep;

  // Helper function to render a single step card
  const renderStepCard = (step, isCurrentStep = false) => {
    // Parse content for description
    let parsedContent;
    try {
      if (typeof step.content === "string") {
        try {
          parsedContent = JSON.parse(step.content);
          const keys = Object.keys(parsedContent);
          if (keys.length === 1 && keys[0] === "data") {
            const data = parsedContent.data;
            parsedContent = data;
          }
        } catch (e) {
          parsedContent = step.content;
        }
      } else {
        parsedContent = step.content;
      }
    } catch (error) {
      parsedContent = step.content;
    }
    if (step.title === "simple_text") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: step.id,
        style: {
          marginBottom: "10px"
        }
      }, step.content);
    }

    // Only render component content if details are shown
    const componentContent = showDetails[step.id] ? renderStepContent(step) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: step.id,
      ref: el => {
        stepRefs.current[step.id] = el;
      },
      className: `component-container ${step.isNew ? "new-component" : ""} ${isCurrentStep ? "current-step" : ""}`,
      style: {
        marginBottom: "16px",
        padding: "12px",
        paddingTop: "28px",
        backgroundColor: "#ffffff",
        borderRadius: "6px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        position: "relative"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#475569",
        margin: "0",
        display: "flex",
        alignItems: "center",
        gap: "6px"
      }
    }, mapStepTitle(step.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "12px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        margin: "0",
        fontSize: "13px",
        color: "#64748b",
        lineHeight: "1.4"
      },
      dangerouslySetInnerHTML: {
        __html: getCaseDescription(step.title, parsedContent)
      }
    })), componentContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, componentContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => handleToggleDetails(step.id),
      style: {
        position: "absolute",
        right: "8px",
        top: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "transparent",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "4px 8px",
        fontSize: "11px",
        color: showDetails[step.id] ? "#3b82f6" : "#64748b",
        cursor: "pointer"
      },
      onMouseOver: e => {
        e.currentTarget.style.backgroundColor = "#f8fafc";
      },
      onMouseOut: e => {
        e.currentTarget.style.backgroundColor = "transparent";
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: "inline-block",
        transform: showDetails[step.id] ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        fontSize: "12px"
      }
    }, "\u25BC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "details")));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "components-container",
    ref: cardRef
  }, !isStopped && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "6px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: "11px",
      color: "#64748b"
    }
  }, "View:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setViewMode('inplace'),
    style: {
      padding: "2px 6px",
      backgroundColor: viewMode === 'inplace' ? "#2563eb" : "transparent",
      color: viewMode === 'inplace' ? "#ffffff" : "#64748b",
      border: "1px solid #e5e7eb",
      borderRadius: "3px",
      fontSize: "10px",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "In-place"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setViewMode('append'),
    style: {
      padding: "2px 6px",
      backgroundColor: viewMode === 'append' ? "#2563eb" : "transparent",
      color: viewMode === 'append' ? "#ffffff" : "#64748b",
      border: "1px solid #e5e7eb",
      borderRadius: "3px",
      fontSize: "10px",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Append"))), !isStopped && viewMode === 'append' && currentSteps.length > 0 && (hasFinalAnswer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, reasoningSteps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "16px",
      padding: "12px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      userSelect: "none"
    },
    onClick: handleToggleReasoning
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#374151",
      margin: "0",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      transform: isReasoningCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      fontSize: "14px"
    }
  }, "\u25BC"), "Reasoning Process", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#6b7280",
      backgroundColor: "#e5e7eb",
      padding: "2px 8px",
      borderRadius: "12px"
    }
  }, reasoningSteps.length, " steps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "12px",
      color: "#6b7280",
      fontStyle: "italic"
    }
  }, isReasoningCollapsed ? "Click to expand" : "Click to collapse")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxHeight: isReasoningCollapsed ? "0" : "10000px",
      overflow: "hidden",
      transition: "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
      opacity: isReasoningCollapsed ? 0 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "12px"
    }
  }, reasoningSteps.map(step => renderStepCard(step, false))))), finalAnswerSteps.map(step => renderStepCard(step, false))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, currentSteps.map(step => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: step.id
  }, renderStepCard(step, false))))), isStopped && currentSteps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "16px",
      padding: "12px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      userSelect: "none"
    },
    onClick: handleToggleReasoning
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#374151",
      margin: "0",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      transform: isReasoningCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      fontSize: "14px"
    }
  }, "\u25BC"), "Reasoning Process", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#6b7280",
      backgroundColor: "#e5e7eb",
      padding: "2px 8px",
      borderRadius: "12px"
    }
  }, currentSteps.length, " steps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "12px",
      color: "#6b7280",
      fontStyle: "italic"
    }
  }, isReasoningCollapsed ? "Click to expand" : "Click to collapse")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxHeight: isReasoningCollapsed ? "0" : "10000px",
      overflow: "hidden",
      transition: "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
      opacity: isReasoningCollapsed ? 0 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "12px"
    }
  }, currentSteps.map(step => renderStepCard(step, false))))), isStopped && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "8px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "16px",
      padding: "12px",
      backgroundColor: "#ffffff",
      borderRadius: "6px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#475569",
      margin: "0",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, "Task Interrupted")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      margin: "0",
      fontSize: "13px",
      color: "#64748b",
      lineHeight: "1.4"
    }
  }, "The task was stopped by the user.")))), !isStopped && viewMode === 'inplace' && (hasFinalAnswer || userActionSteps.length > 0) && reasoningSteps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "16px",
      padding: "12px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      userSelect: "none"
    },
    onClick: handleToggleReasoning
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#374151",
      margin: "0",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      transform: isReasoningCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      fontSize: "14px"
    }
  }, "\u25BC"), "Reasoning Process", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#6b7280",
      backgroundColor: "#e5e7eb",
      padding: "2px 8px",
      borderRadius: "12px"
    }
  }, reasoningSteps.length, " steps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "12px",
      color: "#6b7280",
      fontStyle: "italic"
    }
  }, isReasoningCollapsed ? "Click to expand" : "Click to collapse")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxHeight: isReasoningCollapsed ? "0" : "10000px",
      overflow: "hidden",
      transition: "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
      opacity: isReasoningCollapsed ? 0 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "12px"
    }
  }, reasoningSteps.map(step => renderStepCard(step, false))))), !isStopped && viewMode === 'inplace' && isShowingCurrentStep && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `current-step-container ${isLoading ? "loading-border" : ""}`,
    style: {
      position: "relative",
      minHeight: "200px"
    }
  }, renderStepCard(currentStep, true)), !isStopped && viewMode === 'inplace' && finalAnswerSteps.map(step => renderStepCard(step, false)), !isStopped && viewMode === 'inplace' && userActionSteps.map(step => renderStepCard(step, false)), !isStopped && viewMode === 'inplace' && currentSteps.length > 0 && !isProcessingComplete && !hasFinalAnswer && userActionSteps.length === 0 && !hasErrorStep && !isShowingCurrentStep && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "8px",
      marginBottom: "2px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "10px",
      color: "#94a3b8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "4px",
      userSelect: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "CUGA is thinking..")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: "4px",
      position: "relative",
      overflow: "hidden",
      background: "#eef2ff",
      borderRadius: "9999px",
      boxShadow: "inset 0 0 0 1px #e5e7eb"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "28%",
      background: "linear-gradient(90deg, #a78bfa 0%, #6366f1 100%)",
      borderRadius: "9999px",
      animation: "cugaShimmer 1.7s infinite",
      boxShadow: "0 0 6px rgba(99,102,241,0.25)"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, `
              @keyframes cugaShimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(300%); }
              }
            `)));
};
/* harmony default export */ __webpack_exports__["default"] = (CardManager);

/***/ }),

/***/ "../agentic_chat/src/ConfigHeader.css":
/*!********************************************!*\
  !*** ../agentic_chat/src/ConfigHeader.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigHeader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./ConfigHeader.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/ConfigHeader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/ConfigHeader.tsx":
/*!********************************************!*\
  !*** ../agentic_chat/src/ConfigHeader.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigHeader: function() { return /* binding */ ConfigHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/panel-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/book-open.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/brain.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/cpu.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/folder.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/menu.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/user-cog.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/wrench.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _ConfigHeader_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ConfigHeader.css */ "../agentic_chat/src/ConfigHeader.css");
/* harmony import */ var _MemoryConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MemoryConfig */ "../agentic_chat/src/MemoryConfig.tsx");
/* harmony import */ var _KnowledgeConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KnowledgeConfig */ "../agentic_chat/src/KnowledgeConfig.tsx");
/* harmony import */ var _ToolsConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ToolsConfig */ "../agentic_chat/src/ToolsConfig.tsx");
/* harmony import */ var _SubAgentsConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SubAgentsConfig */ "../agentic_chat/src/SubAgentsConfig.tsx");
/* harmony import */ var _ModelConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModelConfig */ "../agentic_chat/src/ModelConfig.tsx");
/* harmony import */ var _PoliciesConfig__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PoliciesConfig */ "../agentic_chat/src/PoliciesConfig.tsx");
/* harmony import */ var _AgentHumanConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AgentHumanConfig */ "../agentic_chat/src/AgentHumanConfig.tsx");










// import AgentBehaviorConfig from "./AgentBehaviorConfig"; // Temporarily hidden

function ConfigHeader({
  onToggleLeftSidebar,
  onToggleWorkspace,
  leftSidebarCollapsed,
  workspaceOpen
}) {
  const [activeModal, setActiveModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "config-header-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "config-header-title"
  }, "CUGA Agent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-header-buttons"
  }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn mobile-menu-btn",
    onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
    title: "Menu"
  }, isMobileMenuOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: 16
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 16
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    onClick: onToggleLeftSidebar,
    title: leftSidebarCollapsed ? "Show sidebar" : "Hide sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sidebar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    onClick: onToggleWorkspace,
    title: workspaceOpen ? "Close workspace" : "Open workspace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Workspace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    disabled: true,
    title: "Configure knowledge sources (Coming soon)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Knowledge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    disabled: true,
    title: "Configure memory settings (Coming soon)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Memory")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    disabled: true,
    title: "Configure sub-agents (Coming soon)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sub Agents")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    onClick: () => setActiveModal("tools"),
    title: "Configure tools"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    disabled: true,
    title: "Configure model settings (Coming soon)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    disabled: true,
    title: "Configure security policies (Coming soon)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Policies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-header-btn",
    disabled: true,
    title: "Configure agent autonomy and human interaction (Coming soon)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Agent\xA0\u2219\xA0Human")))), activeModal === "knowledge" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_KnowledgeConfig__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClose: () => setActiveModal(null)
  }), activeModal === "memory" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MemoryConfig__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: () => setActiveModal(null)
  }), activeModal === "subagents" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubAgentsConfig__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClose: () => setActiveModal(null)
  }), activeModal === "tools" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToolsConfig__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onClose: () => setActiveModal(null)
  }), activeModal === "model" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModelConfig__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClose: () => setActiveModal(null)
  }), activeModal === "policies" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PoliciesConfig__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onClose: () => setActiveModal(null)
  }), activeModal === "agenthuman" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AgentHumanConfig__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClose: () => setActiveModal(null)
  }), isMobile && isMobileMenuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu-overlay",
    onClick: closeMobileMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-close",
    onClick: closeMobileMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    onClick: () => {
      onToggleLeftSidebar();
      closeMobileMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sidebar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    onClick: () => {
      onToggleWorkspace();
      closeMobileMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Workspace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Knowledge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Memory")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sub Agents")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    onClick: () => {
      setActiveModal("tools");
      closeMobileMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Policies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-item",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Agent \u22C5 Human"))))));
}

/***/ }),

/***/ "../agentic_chat/src/ConfigModal.css":
/*!*******************************************!*\
  !*** ../agentic_chat/src/ConfigModal.css ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./ConfigModal.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/ConfigModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_ConfigModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/CustomChat.css":
/*!******************************************!*\
  !*** ../agentic_chat/src/CustomChat.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomChat_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./CustomChat.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CustomChat.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomChat_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomChat_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomChat_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomChat_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/CustomChat.tsx":
/*!******************************************!*\
  !*** ../agentic_chat/src/CustomChat.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomChat: function() { return /* binding */ CustomChat; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/bot.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/file-text.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/send.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var _CardManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardManager */ "../agentic_chat/src/CardManager.tsx");
/* harmony import */ var _floating_stop_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./floating/stop_button */ "../agentic_chat/src/floating/stop_button.tsx");
/* harmony import */ var _StreamingWorkflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StreamingWorkflow */ "../agentic_chat/src/StreamingWorkflow.ts");
/* harmony import */ var _CustomChat_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CustomChat.css */ "../agentic_chat/src/CustomChat.css");







// Minimal ChatInstance interface compatible with existing code

const WELCOME_TEXT = `<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; padding: 16px; color: white; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); margin: 16px 0;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <div style="flex: 1;">
      <h2 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 4px 0;">👋 I'm CUGA</h2>
      <p style="font-size: 0.9rem; margin: 0; opacity: 0.9;">Your Digital Agent</p>
    </div>
    <div style="text-align: right;">
      <p style="margin: 0; font-size: 0.8rem; font-weight: 500; opacity: 0.9;">✨ Just ask!</p>
    </div>
  </div>
</div>`;
function CustomChat({
  onVariablesUpdate,
  onFileAutocompleteOpen,
  onFileHover,
  onMessageSent
}) {
  const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isProcessing, setIsProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const currentChatInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [showFileAutocomplete, setShowFileAutocomplete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autocompleteQuery, setAutocompleteQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [allFiles, setAllFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [filteredFiles, setFilteredFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedFileIndex, setSelectedFileIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // Create a simple chat instance interface
  const createChatInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return {
      messaging: {
        addMessage: async message => {
          // Handle message addition if needed
        }
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!currentChatInstanceRef.current) {
      currentChatInstanceRef.current = createChatInstance();
    }
  }, [createChatInstance]);

  // Listen for variables updates from CardManager
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleVariablesUpdate = event => {
      console.log('[CustomChat] Received variablesUpdate event:', event.detail);
      const {
        variables,
        history
      } = event.detail;
      console.log('[CustomChat] Variables keys:', Object.keys(variables));
      console.log('[CustomChat] History length:', history.length);
      if (onVariablesUpdate) {
        console.log('[CustomChat] Calling onVariablesUpdate callback');
        onVariablesUpdate(variables, history);
      } else {
        console.warn('[CustomChat] onVariablesUpdate callback is not defined!');
      }
    };
    if (typeof window !== "undefined") {
      console.log('[CustomChat] Setting up variablesUpdate event listener');
      window.addEventListener('variablesUpdate', handleVariablesUpdate);
      return () => {
        console.log('[CustomChat] Cleaning up variablesUpdate event listener');
        window.removeEventListener('variablesUpdate', handleVariablesUpdate);
      };
    }
  }, []);

  // Scroll to bottom when messages change
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  // Show welcome message on mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (messages.length === 0) {
      setMessages([{
        id: "welcome",
        text: WELCOME_TEXT,
        isUser: false,
        timestamp: Date.now()
      }]);
    }
  }, []);

  // Load workspace files using shared service with enforced throttling
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadFiles = async () => {
      try {
        const {
          workspaceService
        } = await __webpack_require__.e(/*! import() */ "agentic_chat_src_workspaceService_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workspaceService */ "../agentic_chat/src/workspaceService.ts"));
        const data = await workspaceService.getWorkspaceTree();
        const files = extractFiles(data.tree || []);
        setAllFiles(files);
      } catch (error) {
        console.error('Error loading files:', error);
      }
    };
    loadFiles();
    const interval = setInterval(loadFiles, 15000);
    return () => clearInterval(interval);
  }, []);

  // Filter files based on query
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!showFileAutocomplete) {
      setFilteredFiles([]);
      return;
    }
    if (autocompleteQuery === '') {
      setFilteredFiles(allFiles.slice(0, 10));
    } else {
      const lowerQuery = autocompleteQuery.toLowerCase();
      const filtered = allFiles.filter(file => {
        const nameMatch = file.name.toLowerCase().includes(lowerQuery);
        const pathMatch = file.path.toLowerCase().includes(lowerQuery);
        return nameMatch || pathMatch;
      }).slice(0, 10);
      setFilteredFiles(filtered);
    }
    setSelectedFileIndex(0);
  }, [showFileAutocomplete, autocompleteQuery, allFiles]);

  // Highlight file when selection changes via keyboard navigation
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showFileAutocomplete && filteredFiles.length > 0 && selectedFileIndex >= 0 && selectedFileIndex < filteredFiles.length) {
      onFileHover?.(filteredFiles[selectedFileIndex].path);
    } else if (!showFileAutocomplete) {
      onFileHover?.(null);
    }
  }, [selectedFileIndex, showFileAutocomplete, filteredFiles, onFileHover]);
  const extractFiles = nodes => {
    const files = [];
    for (const node of nodes) {
      if (node.type === "file") {
        files.push({
          name: node.name,
          path: node.path
        });
      } else if (node.children) {
        files.push(...extractFiles(node.children));
      }
    }
    return files;
  };
  const handleSend = async () => {
    if (!inputRef.current) return;
    const text = inputRef.current.textContent?.trim() || '';
    if (!text || isProcessing) return;

    // Convert file reference elements back to ./path format for backend processing
    let processedText = text;
    const fileElements = inputRef.current.querySelectorAll('.inline-file-reference');
    fileElements.forEach(element => {
      const filePath = element.getAttribute('data-file-path');
      const fileName = element.getAttribute('data-file-name');
      if (filePath && fileName) {
        // Replace the element's text content with the dot path
        processedText = processedText.replace(element.textContent || '', `./${filePath}`);
      }
    });

    // Create display HTML for the message (keep the styled file references)
    const displayHTML = inputRef.current.innerHTML;

    // Add user message with styled HTML
    const userMessage = {
      id: `msg-${Date.now()}`,
      text: displayHTML,
      // Store the HTML for proper rendering
      isUser: true,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMessage]);

    // Notify parent component that a message was sent
    if (onMessageSent) {
      onMessageSent(processedText);
    }

    // Clear the input
    inputRef.current.innerHTML = '';
    setInputValue("");
    setSelectedFiles([]);
    setIsProcessing(true);

    // Create a new chat instance for this message
    const newChatInstance = createChatInstance();
    currentChatInstanceRef.current = newChatInstance;

    // Add bot card response message
    const botMessage = {
      id: `bot-${Date.now()}`,
      text: "",
      isUser: false,
      timestamp: Date.now(),
      isCardResponse: true,
      chatInstance: newChatInstance
    };
    setMessages(prev => [...prev, botMessage]);
    try {
      // Call the streaming workflow with processed text (bracket format converted to ./path)
      await (0,_StreamingWorkflow__WEBPACK_IMPORTED_MODULE_8__.fetchStreamingData)(newChatInstance, processedText);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsProcessing(false);
    }
  };
  const handleRestart = async () => {
    // Reset backend
    try {
      const response = await fetch('/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error("Error calling reset endpoint:", error);
    }

    // Clear messages and show welcome
    setMessages([{
      id: "welcome",
      text: WELCOME_TEXT,
      isUser: false,
      timestamp: Date.now()
    }]);
    setIsProcessing(false);

    // Create a fresh chat instance
    currentChatInstanceRef.current = createChatInstance();
  };
  const handleContentEditableInput = e => {
    const target = e.currentTarget;
    const text = target.textContent || '';
    setInputValue(text);

    // Check for @ trigger
    const lastAtIndex = text.lastIndexOf('@');
    if (lastAtIndex !== -1) {
      const charBeforeAt = lastAtIndex > 0 ? text[lastAtIndex - 1] : ' ';
      const isValidTrigger = lastAtIndex === 0 || /\s/.test(charBeforeAt);
      if (isValidTrigger) {
        const textAfterAt = text.substring(lastAtIndex + 1);
        const searchTerm = textAfterAt.split(/\s/)[0];
        setAutocompleteQuery(searchTerm);
        setShowFileAutocomplete(true);
        onFileAutocompleteOpen?.();
      } else {
        setShowFileAutocomplete(false);
      }
    } else {
      setShowFileAutocomplete(false);
    }

    // Extract file references from the HTML content
    const foundFiles = [];
    const fileElements = target.querySelectorAll('.inline-file-reference');
    fileElements.forEach(element => {
      const filePath = element.getAttribute('data-file-path');
      const fileName = element.getAttribute('data-file-name');
      if (filePath && fileName) {
        const existingFile = selectedFiles.find(f => f.path === filePath);
        const id = existingFile?.id || `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        foundFiles.push({
          name: fileName,
          path: filePath,
          id
        });
      }
    });
    setSelectedFiles(foundFiles);

    // Auto-resize
    target.style.height = 'auto';
    target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
  };
  const handleContentEditableClick = e => {
    const target = e.target;

    // Check if clicked element is a remove button
    if (target.classList.contains('file-chip-remove')) {
      e.preventDefault();
      e.stopPropagation();

      // Find the parent file reference element
      const fileChip = target.closest('.inline-file-reference');
      if (fileChip && inputRef.current) {
        // Remove the file chip from the DOM
        fileChip.remove();

        // Update the input and selected files
        handleContentEditableInput({
          currentTarget: inputRef.current
        });

        // Focus back to the input
        inputRef.current.focus();
      }
      return;
    }

    // Check if clicked within a file chip (but not on remove button)
    const fileChip = target.closest('.inline-file-reference');
    if (fileChip) {
      e.preventDefault();
      e.stopPropagation();

      // Focus the input but position cursor appropriately
      if (inputRef.current) {
        inputRef.current.focus();

        // Try to place cursor after the chip
        const range = document.createRange();
        const selection = window.getSelection();

        // Find the next text node or position after the chip
        let nextNode = fileChip.nextSibling;
        if (nextNode && nextNode.nodeType === Node.TEXT_NODE) {
          range.setStart(nextNode, 0);
          range.setEnd(nextNode, 0);
        } else {
          // Create a text node after the chip if none exists
          const textNode = document.createTextNode('');
          fileChip.parentNode?.insertBefore(textNode, nextNode);
          range.setStart(textNode, 0);
          range.setEnd(textNode, 0);
        }
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  };
  const handleFileSelect = filePath => {
    if (!inputRef.current) return;
    const selectedFile = allFiles.find(f => f.path === filePath);
    if (!selectedFile) return;

    // Find the @ trigger using the current selection/cursor position
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (!range) return;

    // Create the file reference element
    const fileElement = document.createElement('span');
    fileElement.className = 'inline-file-reference';
    fileElement.setAttribute('data-file-path', filePath);
    fileElement.setAttribute('data-file-name', selectedFile.name);
    fileElement.setAttribute('contentEditable', 'false');
    fileElement.innerHTML = `<svg class="file-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline></svg><span class="file-name">${selectedFile.name}</span><button class="file-chip-remove" type="button" aria-label="Remove file">×</button>`;

    // Find and replace the @ trigger and search term
    const text = inputRef.current.textContent || '';
    const lastAtIndex = text.lastIndexOf('@');
    if (lastAtIndex === -1) return;
    const textAfterAt = text.substring(lastAtIndex + 1);
    const searchTerm = textAfterAt.split(/\s/)[0];

    // Find the text nodes containing the @ and search term
    const treeWalker = document.createTreeWalker(inputRef.current, NodeFilter.SHOW_TEXT, null);
    let foundAtNode = null;
    let atOffset = -1;
    let currentNode;
    while (currentNode = treeWalker.nextNode()) {
      const nodeText = currentNode.textContent || '';
      const atIndex = nodeText.indexOf('@');
      if (atIndex !== -1) {
        foundAtNode = currentNode;
        atOffset = atIndex;
        break;
      }
    }
    if (foundAtNode && atOffset !== -1) {
      // Calculate the range for @ and search term
      const searchTermEnd = atOffset + 1 + searchTerm.length;

      // Create a range to replace the @ and search term
      const replaceRange = document.createRange();
      replaceRange.setStart(foundAtNode, atOffset);
      replaceRange.setEnd(foundAtNode, Math.min(searchTermEnd, foundAtNode.length));

      // Replace the range with the file element
      replaceRange.deleteContents();
      replaceRange.insertNode(fileElement);

      // Add a space after the file element
      const spaceNode = document.createTextNode(' ');
      replaceRange.setStartAfter(fileElement);
      replaceRange.insertNode(spaceNode);

      // Position cursor after the space
      replaceRange.setStartAfter(spaceNode);
      replaceRange.setEndAfter(spaceNode);
      selection?.removeAllRanges();
      selection?.addRange(replaceRange);
    }
    setShowFileAutocomplete(false);

    // Update selected files
    handleContentEditableInput({
      currentTarget: inputRef.current
    });

    // Ensure focus remains
    inputRef.current.focus();
  };
  const handlePaste = e => {
    e.preventDefault();

    // Get plain text from clipboard
    const text = e.clipboardData.getData('text/plain');

    // Insert the plain text at cursor position
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (range && inputRef.current) {
      range.deleteContents();
      const textNode = document.createTextNode(text);
      range.insertNode(textNode);

      // Move cursor to end of inserted text
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection?.removeAllRanges();
      selection?.addRange(range);

      // Trigger input handler to update state
      handleContentEditableInput({
        currentTarget: inputRef.current
      });
    }
  };
  const handleKeyPress = e => {
    // Check if cursor is inside a file chip
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    let isInsideChip = false;
    if (range) {
      let node = range.commonAncestorContainer;
      // If it's a text node, check parent
      if (node.nodeType === Node.TEXT_NODE) {
        node = node.parentNode;
      }

      // Walk up the DOM to check if we're inside a file chip
      while (node && node !== e.currentTarget) {
        if (node instanceof HTMLElement && node.classList.contains('inline-file-reference')) {
          isInsideChip = true;
          break;
        }
        node = node.parentNode;
      }
    }

    // Prevent editing within file chips
    if (isInsideChip) {
      // Allow navigation keys and special keys
      const allowedKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'];
      const controlKeys = ['Backspace', 'Delete'];
      if (!allowedKeys.includes(e.key) && !controlKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        return;
      }

      // Handle backspace/delete within chips - remove the entire chip
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        let chipElement = null;
        if (range?.commonAncestorContainer?.parentNode instanceof HTMLElement) {
          chipElement = range.commonAncestorContainer.parentNode.closest('.inline-file-reference');
        }
        if (!chipElement && range?.startContainer?.parentNode instanceof HTMLElement) {
          chipElement = range.startContainer.parentNode.closest('.inline-file-reference');
        }
        if (chipElement && inputRef.current) {
          chipElement.remove();
          handleContentEditableInput({
            currentTarget: inputRef.current
          });
          inputRef.current.focus();
        }
        return;
      }
    }
    if (showFileAutocomplete && filteredFiles.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedFileIndex(prev => (prev + 1) % filteredFiles.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedFileIndex(prev => (prev - 1 + filteredFiles.length) % filteredFiles.length);
        return;
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        handleFileSelect(filteredFiles[selectedFileIndex].path);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowFileAutocomplete(false);
        return;
      }
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-chat-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-chat-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chat-header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "chat-header-title"
  }, "CUGA Agent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "chat-restart-btn",
    onClick: handleRestart,
    title: "Restart conversation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Restart"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-chat-messages"
  }, messages.map(message => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: message.id,
    className: `message ${message.isUser ? "message-user" : "message-bot"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-avatar"
  }, message.isUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 18
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://avatars.githubusercontent.com/u/230847519?s=48&v=4",
    alt: "Bot Avatar",
    className: "bot-avatar-image"
  })), message.isCardResponse && message.chatInstance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-content message-card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardManager__WEBPACK_IMPORTED_MODULE_6__["default"], {
    chatInstance: message.chatInstance
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-content",
    dangerouslySetInnerHTML: {
      __html: message.text
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: messagesEndRef
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-chat-input-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_floating_stop_button__WEBPACK_IMPORTED_MODULE_7__.StopButton, {
    location: "sidebar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chat-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "textarea-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: inputRef,
    id: "main-input_field",
    className: "chat-input",
    contentEditable: !isProcessing,
    onInput: handleContentEditableInput,
    onClick: handleContentEditableClick,
    onKeyDown: handleKeyPress,
    onPaste: handlePaste,
    "data-placeholder": "Type your message... (use @ for file autocomplete - add multiple files)",
    style: {
      minHeight: "44px",
      maxHeight: "120px",
      overflowY: "auto"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "chat-send-btn",
    onClick: handleSend,
    disabled: !inputValue.trim() || isProcessing,
    title: "Send message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 18
  }))), showFileAutocomplete && filteredFiles.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "simple-file-autocomplete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "simple-file-autocomplete-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Workspace Files"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-count"
  }, filteredFiles.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "simple-file-autocomplete-list"
  }, filteredFiles.map((file, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: file.path,
    className: `simple-file-autocomplete-item ${index === selectedFileIndex ? 'selected' : ''}`,
    onClick: () => handleFileSelect(file.path),
    onMouseEnter: () => {
      setSelectedFileIndex(index);
      onFileHover?.(filteredFiles[index].path);
    },
    onMouseLeave: () => onFileHover?.(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16,
    className: "file-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-name"
  }, file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-path"
  }, "./", file.path))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "simple-file-autocomplete-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hint"
  }, "\u2191\u2193 navigate \u2022 Enter/Tab select \u2022 Esc close")))));
}

/***/ }),

/***/ "../agentic_chat/src/CustomResponseStyles.css":
/*!****************************************************!*\
  !*** ../agentic_chat/src/CustomResponseStyles.css ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomResponseStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./CustomResponseStyles.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CustomResponseStyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomResponseStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomResponseStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomResponseStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_CustomResponseStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/FileAutocomplete.css":
/*!************************************************!*\
  !*** ../agentic_chat/src/FileAutocomplete.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_FileAutocomplete_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./FileAutocomplete.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/FileAutocomplete.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_FileAutocomplete_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_FileAutocomplete_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_FileAutocomplete_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_FileAutocomplete_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/FileAutocomplete.tsx":
/*!************************************************!*\
  !*** ../agentic_chat/src/FileAutocomplete.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileAutocomplete: function() { return /* binding */ FileAutocomplete; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/file-text.js");
/* harmony import */ var _FileAutocomplete_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileAutocomplete.css */ "../agentic_chat/src/FileAutocomplete.css");




function FileAutocomplete({
  onFileSelect,
  onAutocompleteOpen,
  onFileHover,
  disabled = false
}) {
  const [allFiles, setAllFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const currentInputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const lastProcessedValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const usedMockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const suggestionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isProcessingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const selectedItemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const getInputPosition = () => {
    const inputContainer = document.querySelector('.WACInputContainer');
    if (inputContainer) {
      const rect = inputContainer.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        width: rect.width
      };
    }
    const carbonChat = document.querySelector('cds-aichat-react');
    if (carbonChat) {
      const rect = carbonChat.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        width: rect.width
      };
    }
    const textarea = document.querySelector('.WAC__TextArea-textarea, textarea, input[type="text"]');
    if (textarea) {
      const rect = textarea.getBoundingClientRect();
      if (rect.top > 50 && rect.left > 0) {
        return {
          top: rect.top,
          left: rect.left,
          width: rect.width
        };
      }
    }
    return {
      top: window.innerHeight - 100,
      left: 20,
      width: Math.min(600, window.innerWidth - 40)
    };
  };
  const handleInputChange = value => {
    if (isProcessingRef.current || value === lastProcessedValueRef.current) {
      return;
    }
    isProcessingRef.current = true;
    lastProcessedValueRef.current = value;
    const lastAtIndex = value.lastIndexOf('@');
    if (lastAtIndex !== -1) {
      const charBeforeAt = lastAtIndex > 0 ? value[lastAtIndex - 1] : ' ';
      const isValidTrigger = lastAtIndex === 0 || /\s/.test(charBeforeAt);
      if (isValidTrigger) {
        const textAfterAt = value.substring(lastAtIndex + 1);
        const searchTerm = textAfterAt.split(/\s/)[0].trim();
        let filtered;
        if (searchTerm === '') {
          filtered = allFiles.slice(0, 10);
        } else {
          const lowerSearchTerm = searchTerm.toLowerCase();
          filtered = allFiles.filter(file => {
            const nameMatch = file.name.toLowerCase().includes(lowerSearchTerm);
            const pathMatch = file.path.toLowerCase().includes(lowerSearchTerm);
            return nameMatch || pathMatch;
          }).slice(0, 10);
        }
        if (filtered.length > 0) {
          setSuggestions(filtered);
          setSelectedIndex(0);
          setShowSuggestions(true);
          onAutocompleteOpen?.();
          const inputPos = getInputPosition();
          const dropdownHeight = Math.min(filtered.length * 42 + 60, 450);
          let top = inputPos.top - dropdownHeight - 8;
          if (top < 0) {
            top = inputPos.top + 60;
          }
          const pos = {
            top: Math.max(10, top),
            left: Math.max(10, inputPos.left + 50)
          };
          setPosition(pos);
        } else {
          setShowSuggestions(false);
        }
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
    requestAnimationFrame(() => {
      isProcessingRef.current = false;
    });
  };
  const handleFileSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(file => {
    const textarea = document.getElementById('main-input_field');
    if (!textarea) {
      return;
    }
    let currentValue = textarea.value;
    const lastAtIndex = currentValue.lastIndexOf('@');
    if (lastAtIndex === -1) {
      return;
    }
    const textAfterAt = currentValue.substring(lastAtIndex + 1);
    const searchTerm = textAfterAt.split(/\s/)[0];
    const textAfterSearchTerm = currentValue.substring(lastAtIndex + 1 + searchTerm.length);
    const newValue = currentValue.substring(0, lastAtIndex) + `./${file.path}` + textAfterSearchTerm;
    const nativeTextareaSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
    if (nativeTextareaSetter) {
      nativeTextareaSetter.call(textarea, newValue);
    } else {
      textarea.value = newValue;
    }
    const inputEvent = new InputEvent('input', {
      bubbles: true,
      composed: true,
      inputType: 'insertText',
      data: newValue
    });
    textarea.dispatchEvent(inputEvent);
    textarea.focus();
    const cursorPosition = newValue.length;
    textarea.setSelectionRange(cursorPosition, cursorPosition);
    currentInputValueRef.current = newValue;
    lastProcessedValueRef.current = newValue;
    setShowSuggestions(false);
    onFileSelect(file.path);
  }, [onFileSelect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      return;
    }
    loadWorkspaceFiles();
    const fileInterval = setInterval(loadWorkspaceFiles, 15000);

    // Listen to Carbon AI Chat events
    const setupCarbonListeners = () => {
      // Find the Carbon AI Chat component
      const carbonChat = document.querySelector('cds-aichat-react');

      // Also check for custom chat textarea
      const customChatTextarea = document.getElementById('main-input_field');
      if (carbonChat || customChatTextarea) {
        // Listen for input events from Carbon chat
        const handleCarbonInput = event => {
          const target = event.target || event.currentTarget;
          const tryHandleValue = value => {
            if (typeof value === 'string') {
              currentInputValueRef.current = value;
              handleInputChange(value);
              return true;
            }
            return false;
          };
          if (tryHandleValue(target?.value)) {
            return;
          }
          if (tryHandleValue(event.detail?.value)) {
            return;
          }
          if (typeof event.composedPath === 'function') {
            const path = event.composedPath();
            for (const el of path) {
              const node = el;
              if (node && (node.tagName === 'TEXTAREA' || node.tagName === 'INPUT' || node.contentEditable === 'true')) {
                if (tryHandleValue(node.value || node.textContent)) {
                  return;
                }
              }
            }
          }
          const active = document.activeElement;
          if (active && (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT' || active.contentEditable === 'true')) {
            if (tryHandleValue(active.value || active.textContent)) {
              return;
            }
          }
          const textarea = document.querySelector('.WAC__TextArea-textarea, textarea, input[type="text"], [contenteditable]');
          if (textarea) {
            tryHandleValue(textarea.value || textarea.textContent);
          }
        };

        // Only add Carbon Chat listeners if it exists
        if (carbonChat) {
          carbonChat.addEventListener('input', handleCarbonInput);
          carbonChat.addEventListener('change', handleCarbonInput);
          carbonChat.addEventListener('input-change', handleCarbonInput);
          carbonChat.addEventListener('value-change', handleCarbonInput);
        }
        setTimeout(() => {
          const textareas = document.querySelectorAll('.WAC__TextArea-textarea, textarea, input[type="text"], [contenteditable]');
          textareas.forEach(textarea => {
            if (!textarea.hasAttribute('data-autocomplete-listener')) {
              textarea.setAttribute('data-autocomplete-listener', 'true');
              textarea.addEventListener('input', e => {
                // Don't stop propagation - let React handle it too
                const value = e.target?.value || e.target?.textContent || '';
                currentInputValueRef.current = value;
                handleInputChange(value);
              });
            }
          });
        }, 1000);
        const handleDocumentInput = e => {
          const target = e.target;
          if (target && target.hasAttribute('data-autocomplete-listener')) {
            return;
          }
          if (target && (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT' || target.contentEditable === 'true')) {
            // Don't stop propagation - let other handlers process it too
            const value = target.value || target.textContent || '';
            currentInputValueRef.current = value;
            handleInputChange(value);
          }
        };
        document.addEventListener('input', handleDocumentInput, true);
        return () => {
          // Only remove Carbon Chat listeners if it existed
          if (carbonChat) {
            carbonChat.removeEventListener('input', handleCarbonInput);
            carbonChat.removeEventListener('change', handleCarbonInput);
            carbonChat.removeEventListener('input-change', handleCarbonInput);
            carbonChat.removeEventListener('value-change', handleCarbonInput);
          }
          document.removeEventListener('input', handleDocumentInput, true);
        };
      } else {
        setTimeout(setupCarbonListeners, 500);
      }
    };
    setupCarbonListeners();
    return () => {
      clearInterval(fileInterval);
    };
  }, [disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      return;
    }
    const handleKeyDown = e => {
      if (!showSuggestions || suggestions.length === 0) {
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        setSelectedIndex(prev => (prev + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        setSelectedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (suggestions[selectedIndex]) {
          handleFileSelect(suggestions[selectedIndex]);
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (suggestions[selectedIndex]) {
          handleFileSelect(suggestions[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        setShowSuggestions(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [suggestions, selectedIndex, showSuggestions, handleFileSelect, disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [selectedIndex]);

  // Highlight file when selection changes via keyboard navigation
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showSuggestions && suggestions.length > 0 && selectedIndex >= 0 && selectedIndex < suggestions.length) {
      onFileHover?.(suggestions[selectedIndex].path);
    } else if (!showSuggestions) {
      onFileHover?.(null);
    }
  }, [selectedIndex, showSuggestions, suggestions, onFileHover]);
  const loadWorkspaceFiles = async () => {
    try {
      const {
        workspaceService
      } = await __webpack_require__.e(/*! import() */ "agentic_chat_src_workspaceService_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workspaceService */ "../agentic_chat/src/workspaceService.ts"));
      const data = await workspaceService.getWorkspaceTree();
      const files = extractFiles(data.tree || []);
      setAllFiles(files);
    } catch (error) {
      if (!usedMockRef.current) {
        useMockData();
      }
    }
  };
  const useMockData = () => {
    const mockFiles = [{
      name: 'top_opportunities_arkansas.txt',
      path: 'cuga_workspace/top_opportunities_arkansas.txt'
    }, {
      name: 'top_10_opportunities_arkansas.txt',
      path: 'cuga_workspace/top_10_opportunities_arkansas.txt'
    }, {
      name: 'top_3_opportunities_arkansas.txt',
      path: 'cuga_workspace/top_3_opportunities_arkansas.txt'
    }, {
      name: 'analysis_report.md',
      path: 'cuga_workspace/analysis_report.md'
    }, {
      name: 'data_export.json',
      path: 'cuga_workspace/data_export.json'
    }];
    usedMockRef.current = true;
    setAllFiles(mockFiles);
  };
  const extractFiles = nodes => {
    const files = [];
    for (const node of nodes) {
      if (node.type === "file") {
        files.push({
          name: node.name,
          path: node.path
        });
      } else if (node.children) {
        files.push(...extractFiles(node.children));
      }
    }
    return files;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showSuggestions && suggestions.length > 0 && position && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: suggestionsRef,
    className: "file-autocomplete",
    style: {
      top: `${position.top}px`,
      left: `${position.left}px`
    },
    "data-debug-position": JSON.stringify(position)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-autocomplete-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Workspace Files"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-count"
  }, suggestions.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-autocomplete-list"
  }, suggestions.map((file, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: file.path,
    ref: index === selectedIndex ? selectedItemRef : null,
    className: `file-autocomplete-item ${index === selectedIndex ? 'selected' : ''}`,
    onClick: e => {
      e.preventDefault();
      handleFileSelect(file);
    },
    onMouseEnter: () => {
      setSelectedIndex(index);
      onFileHover?.(file.path);
    },
    onMouseLeave: () => onFileHover?.(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 16,
    className: "file-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-name"
  }, file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-path"
  }, "./", file.path))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-autocomplete-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hint"
  }, "\u2191\u2193 navigate \u2022 Enter/Tab select \u2022 Esc close"))));
}

/***/ }),

/***/ "../agentic_chat/src/Followup.tsx":
/*!****************************************!*\
  !*** ../agentic_chat/src/Followup.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FollowupAction: function() { return /* binding */ FollowupAction; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/send.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");


const FollowupAction = ({
  followupAction,
  callback
}) => {
  const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedValues, setSelectedValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [startTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Date.now());
  const [isWaiting, setIsWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    action_id,
    action_name,
    description,
    type,
    button_text,
    placeholder,
    options,
    max_selections,
    min_selections = 1,
    required = true,
    validation_pattern,
    max_length,
    min_length,
    color = "primary"
  } = followupAction;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = setTimeout(() => {
      setIsWaiting(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const colorThemes = {
    primary: {
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      accent: "text-blue-600 border-blue-200 bg-blue-50"
    },
    success: {
      button: "bg-green-500 hover:bg-green-600 text-white",
      accent: "text-green-600 border-green-200 bg-green-50"
    },
    warning: {
      button: "bg-yellow-500 hover:bg-yellow-600 text-white",
      accent: "text-yellow-600 border-yellow-200 bg-yellow-50"
    },
    danger: {
      button: "bg-red-500 hover:bg-red-600 text-white",
      accent: "text-red-600 border-red-200 bg-red-50"
    },
    secondary: {
      button: "bg-gray-500 hover:bg-gray-600 text-white",
      accent: "text-gray-600 border-gray-200 bg-gray-50"
    }
  };
  const theme = colorThemes[color] || colorThemes.primary;
  const createResponse = responseData => {
    const baseResponse = {
      action_id,
      response_type: type,
      timestamp: new Date().toISOString(),
      response_time_ms: Date.now() - startTime,
      client_info: {
        user_agent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform
      }
    };
    return {
      ...baseResponse,
      ...responseData
    };
  };
  const handleSubmit = responseData => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    const fullResponse = createResponse(responseData);
    callback(fullResponse);
  };
  const handleTextSubmit = () => {
    if (!response.trim() && required) return;

    // Validation
    if (validation_pattern && !new RegExp(validation_pattern).test(response)) {
      // Replaced alert with a simple console log for demonstration.
      // In a real app, you'd use a custom modal or inline error message.
      console.error("Please enter a valid response");
      return;
    }
    if (min_length && response.length < min_length) {
      console.error(`Response must be at least ${min_length} characters`);
      return;
    }
    if (max_length && response.length > max_length) {
      console.error(`Response must be no more than ${max_length} characters`);
      return;
    }
    handleSubmit({
      text_response: response
    });
  };
  const handleButtonClick = () => {
    handleSubmit({
      button_clicked: true
    });
  };
  const handleConfirmation = confirmed => {
    handleSubmit({
      confirmed
    });
  };
  const handleSelectChange = value => {
    let newSelection;
    if (type === "multi_select") {
      if (selectedValues.includes(value)) {
        newSelection = selectedValues.filter(v => v !== value);
      } else {
        if (max_selections && selectedValues.length >= max_selections) {
          return;
        }
        newSelection = [...selectedValues, value];
      }
    } else {
      newSelection = [value];
    }
    setSelectedValues(newSelection);
    if (type === "select") {
      const selectedOptions = (options || []).filter(opt => newSelection.includes(opt.value));
      handleSubmit({
        selected_values: newSelection,
        selected_options: selectedOptions
      });
    }
  };
  const handleMultiSelectSubmit = () => {
    if (selectedValues.length < min_selections) {
      console.error(`Please select at least ${min_selections} option(s)`);
      return;
    }
    const selectedOptions = (options || []).filter(opt => selectedValues.includes(opt.value));
    handleSubmit({
      selected_values: selectedValues,
      selected_options: selectedOptions
    });
  };
  const renderWaitingState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm text-gray-500"
  }, "Loading..."));
  const renderActionContent = () => {
    if (isWaiting) {
      return renderWaitingState();
    }
    if (isSubmitted) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-center py-4 text-green-600"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center space-x-2 bg-green-50 px-4 py-2 rounded border border-green-200"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-5 h-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-sm font-medium"
      }, "Response submitted successfully!")));
    }
    switch (type) {
      case "button":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: handleButtonClick,
          disabled: isSubmitted,
          className: `w-full px-4 py-3 rounded font-medium ${theme.button} flex items-center justify-center gap-2 ${isSubmitted ? "opacity-50 cursor-not-allowed" : ""}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, button_text || action_name));
      case "text_input":
      case "natural_language":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "space-y-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
          value: response,
          onChange: e => setResponse(e.target.value),
          placeholder: placeholder || "Enter your response...",
          disabled: isSubmitted,
          className: `w-full px-4 py-3 border border-gray-200 rounded resize-none focus:outline-none focus:border-blue-500 text-sm ${response.trim() ? theme.accent : ""} ${isSubmitted ? "opacity-50 cursor-not-allowed bg-gray-50" : ""}`,
          rows: type === "natural_language" ? 3 : 1,
          maxLength: max_length
        }), max_length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-xs text-gray-500 text-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: response.length > max_length * 0.8 ? "text-orange-500" : ""
        }, response.length), "/", max_length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: handleTextSubmit,
          disabled: isSubmitted || !response.trim() && required,
          className: `px-4 py-2 rounded text-sm font-medium ${isSubmitted || !response.trim() && required ? "bg-gray-200 text-gray-400 cursor-not-allowed" : theme.button} flex items-center gap-2`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "w-4 h-4"
        }), "Submit"));
      case "select":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "space-y-2"
        }, (options || []).map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          key: option.value,
          onClick: () => handleSelectChange(option.value),
          disabled: isSubmitted,
          className: `w-full px-4 py-3 text-left rounded border text-sm ${selectedValues.includes(option.value) ? theme.button : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"} ${isSubmitted ? "opacity-50 cursor-not-allowed" : ""}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "font-medium"
        }, option.label), option.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-xs opacity-75 mt-1"
        }, option.description))));
      case "multi_select":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "space-y-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "space-y-2 max-h-48 overflow-y-auto"
        }, (options || []).map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          key: option.value,
          className: `flex items-start gap-3 p-3 rounded border cursor-pointer ${selectedValues.includes(option.value) ? theme.accent : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          type: "checkbox",
          checked: selectedValues.includes(option.value),
          onChange: () => handleSelectChange(option.value),
          className: "mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500",
          disabled: isSubmitted || !selectedValues.includes(option.value) && !!max_selections && selectedValues.length >= max_selections
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-sm font-medium"
        }, option.label), option.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-xs text-gray-600 mt-1"
        }, option.description))))), max_selections && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-xs text-gray-500"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: selectedValues.length === max_selections ? "text-orange-500 font-medium" : ""
        }, selectedValues.length), "/", max_selections, " selected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: handleMultiSelectSubmit,
          disabled: isSubmitted || selectedValues.length < min_selections,
          className: `px-4 py-2 rounded text-sm font-medium ${isSubmitted || selectedValues.length < min_selections ? "bg-gray-200 text-gray-400 cursor-not-allowed" : theme.button} flex items-center gap-2`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "w-4 h-4"
        }), "Submit (", selectedValues.length, ")"));
      case "confirmation":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: () => handleConfirmation(true),
          disabled: isSubmitted,
          className: `flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded font-medium flex items-center justify-center gap-2 ${isSubmitted ? "opacity-50 cursor-not-allowed" : ""}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "w-4 h-4"
        }), "Confirm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: () => handleConfirmation(false),
          disabled: isSubmitted,
          className: `flex-1 px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded font-medium flex items-center justify-center gap-2 ${isSubmitted ? "opacity-50 cursor-not-allowed" : ""}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "w-4 h-4"
        }), "Cancel"));
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-gray-500 text-sm"
        }, "Unsupported action type: ", type);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white border border-gray-200 rounded p-4 mx-auto"
  }, !isWaiting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "font-medium text-gray-900 text-sm"
  }, action_name), required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-red-500 text-xs"
  }, "*")), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-600 text-xs"
  }, description)), renderActionContent());
};

/***/ }),

/***/ "../agentic_chat/src/KnowledgeConfig.tsx":
/*!***********************************************!*\
  !*** ../agentic_chat/src/KnowledgeConfig.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KnowledgeConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");



function KnowledgeConfig({
  onClose
}) {
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    sources: [],
    embeddingModel: "text-embedding-3-small",
    chunkSize: 1000,
    chunkOverlap: 200
  });
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
  }, []);
  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config/knowledge');
      if (response.ok) {
        const data = await response.json();
        setConfig(data);
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/knowledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  const addSource = () => {
    const newSource = {
      id: Date.now().toString(),
      name: "New Source",
      type: "file",
      enabled: true
    };
    setConfig({
      ...config,
      sources: [...config.sources, newSource]
    });
  };
  const updateSource = (id, updates) => {
    setConfig({
      ...config,
      sources: config.sources.map(source => source.id === id ? {
        ...source,
        ...updates
      } : source)
    });
  };
  const removeSource = id => {
    setConfig({
      ...config,
      sources: config.sources.filter(source => source.id !== id)
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Knowledge Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Embedding Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Embedding Model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: config.embeddingModel,
    onChange: e => setConfig({
      ...config,
      embeddingModel: e.target.value
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "text-embedding-3-small"
  }, "text-embedding-3-small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "text-embedding-3-large"
  }, "text-embedding-3-large"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "text-embedding-ada-002"
  }, "text-embedding-ada-002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Chunk Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: config.chunkSize,
    onChange: e => setConfig({
      ...config,
      chunkSize: parseInt(e.target.value)
    }),
    min: "100",
    max: "4000"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Chunk Overlap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: config.chunkOverlap,
    onChange: e => setConfig({
      ...config,
      chunkOverlap: parseInt(e.target.value)
    }),
    min: "0",
    max: "1000"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Knowledge Sources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-btn",
    onClick: addSource
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 16
  }), "Add Source")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sources-list"
  }, config.sources.map(source => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: source.id,
    className: "source-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "source-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: source.enabled,
    onChange: e => updateSource(source.id, {
      enabled: e.target.checked
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: source.name,
    onChange: e => updateSource(source.id, {
      name: e.target.value
    }),
    className: "source-name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: source.type,
    onChange: e => updateSource(source.id, {
      type: e.target.value
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "file"
  }, "File"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "url"
  }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "database"
  }, "Database")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "delete-btn",
    onClick: () => removeSource(source.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "source-details"
  }, source.type === "file" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: source.path || "",
    onChange: e => updateSource(source.id, {
      path: e.target.value
    }),
    placeholder: "File path..."
  })), source.type === "url" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: source.url || "",
    onChange: e => updateSource(source.id, {
      url: e.target.value
    }),
    placeholder: "https://..."
  })))))), config.sources.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No knowledge sources configured. Click \"Add Source\" to get started.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))));
}

/***/ }),

/***/ "../agentic_chat/src/LeftSidebar.css":
/*!*******************************************!*\
  !*** ../agentic_chat/src/LeftSidebar.css ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_LeftSidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./LeftSidebar.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/LeftSidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_LeftSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_LeftSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_LeftSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_LeftSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/LeftSidebar.tsx":
/*!*******************************************!*\
  !*** ../agentic_chat/src/LeftSidebar.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftSidebar: function() { return /* binding */ LeftSidebar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/database.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/info.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/message-square.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/workflow.js");
/* harmony import */ var _LeftSidebar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LeftSidebar.css */ "../agentic_chat/src/LeftSidebar.css");
/* harmony import */ var _VariablesSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VariablesSidebar */ "../agentic_chat/src/VariablesSidebar.tsx");




const ENABLE_CHAT_HISTORY = false;
function LeftSidebar({
  globalVariables,
  variablesHistory,
  selectedAnswerId,
  onSelectAnswer,
  isCollapsed = false,
  activeTab = "conversations",
  onTabChange,
  leftSidebarRef
}) {
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isCollapsed);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsExpanded(!isCollapsed);
  }, [isCollapsed]);

  // Debug logging for variables
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('[LeftSidebar] globalVariables updated:', Object.keys(globalVariables).length, 'keys');
    console.log('[LeftSidebar] variablesHistory updated:', variablesHistory.length, 'items');
  }, [globalVariables, variablesHistory]);
  const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedConversation, setSelectedConversation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [savedFlows, setSavedFlows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [hoveredFlowId, setHoveredFlowId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [tooltipPosition, setTooltipPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('[LeftSidebar] Component mounted');
    loadConversations();
    loadSavedFlows();
  }, []);
  const loadConversations = async () => {
    try {
      const response = await fetch('/api/conversations');
      if (response.ok) {
        const data = await response.json();
        setConversations(data);
      }
    } catch (error) {
      console.error("Error loading conversations:", error);
    }
  };
  const createNewConversation = async customTitle => {
    console.log('[LeftSidebar] createNewConversation called with title:', customTitle);
    const newConv = {
      id: `conv-${Date.now()}`,
      title: customTitle || "New Conversation",
      timestamp: Date.now()
    };

    // Always add conversation locally first for immediate UI feedback
    console.log('[LeftSidebar] Adding conversation locally:', newConv);
    setConversations(prevConversations => [newConv, ...prevConversations]);
    setSelectedConversation(newConv.id);

    // Try to sync with API (but don't fail if API is unavailable)
    try {
      const response = await fetch('/api/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: customTitle || "New Conversation",
          timestamp: Date.now()
        })
      });
      if (response.ok) {
        const apiConv = await response.json();
        console.log('[LeftSidebar] API sync successful:', apiConv);
        // Update with API response if needed
        setConversations(prevConversations => prevConversations.map(conv => conv.id === newConv.id ? {
          ...apiConv,
          id: newConv.id
        } : conv));
      } else {
        console.warn('[LeftSidebar] API call failed but local conversation added');
      }
    } catch (error) {
      console.warn('[LeftSidebar] API error but local conversation added:', error);
    }
  };

  // Function to add a conversation programmatically
  const addConversation = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(title => {
    createNewConversation(title);
  }, []);

  // Expose addConversation function via ref
  react__WEBPACK_IMPORTED_MODULE_0___default().useImperativeHandle(leftSidebarRef, () => ({
    addConversation
  }), [addConversation]);

  // Debug: log when ref is set
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (leftSidebarRef?.current) {
      console.log('[LeftSidebar] Ref is set, addConversation available');
    }
  }, [leftSidebarRef?.current]);
  const deleteConversation = async (id, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/conversations/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setConversations(conversations.filter(c => c.id !== id));
        if (selectedConversation === id) {
          setSelectedConversation(null);
        }
      }
    } catch (error) {
      console.error("Error deleting conversation:", error);
    }
  };
  const loadSavedFlows = async () => {
    try {
      const response = await fetch('/api/flows');
      if (response.ok) {
        const data = await response.json();
        setSavedFlows(data.flows || []);
      } else {
        setSavedFlows([]);
      }
    } catch (error) {
      console.error("Error loading saved flows:", error);
      setSavedFlows([]);
    }
  };
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (minutes < 1) return "1 minute ago";
    if (minutes < 60) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    if (days === 1) return "now";
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };
  if (!isExpanded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "left-sidebar-floating-toggle",
      onClick: () => setIsExpanded(true)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 20
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sidebar-floating-count"
    }, conversations.length));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `left-sidebar ${isExpanded ? "expanded" : "collapsed"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left-sidebar-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left-sidebar-tabs"
  }, ENABLE_CHAT_HISTORY && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `sidebar-tab ${activeTab === "conversations" ? "active" : ""}`,
    onClick: () => onTabChange ? onTabChange("conversations") : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Chats")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `sidebar-tab ${activeTab === "variables" ? "active" : ""}`,
    onClick: () => onTabChange ? onTabChange("variables") : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Variables")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `sidebar-tab ${activeTab === "savedflows" ? "active" : ""}`,
    onClick: () => onTabChange ? onTabChange("savedflows") : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Saved Flows"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "left-sidebar-toggle",
    onClick: () => setIsExpanded(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 18
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left-sidebar-content"
  }, ENABLE_CHAT_HISTORY && activeTab === "conversations" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversations-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "new-conversation-btn",
    onClick: () => createNewConversation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "New Chat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversations-list"
  }, conversations.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No conversations yet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Start a new chat to begin")) : conversations.map(conv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: conv.id,
    className: `conversation-item ${selectedConversation === conv.id ? "selected" : ""}`,
    onClick: () => setSelectedConversation(conv.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversation-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "conversation-title"
  }, conv.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "delete-conversation-btn",
    onClick: e => deleteConversation(conv.id, e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 14
  }))), conv.preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversation-preview"
  }, conv.preview), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversation-date"
  }, formatDate(conv.timestamp)))))) : activeTab === "variables" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variables-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariablesSidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variables: globalVariables,
    history: variablesHistory,
    selectedAnswerId: selectedAnswerId,
    onSelectAnswer: onSelectAnswer
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversations-list"
  }, savedFlows.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No saved flows yet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Saved flows will appear here")) : savedFlows.map(flow => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: flow.id,
    className: "conversation-item flow-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversation-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "conversation-title"
  }, flow.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flow-info-icon-wrapper",
    onMouseEnter: e => {
      const rect = e.currentTarget.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const tooltipWidth = 300;
      const tooltipHeight = 120; // approximate height

      // Position tooltip to the right if there's space, otherwise to the left
      let left = rect.right + 12;
      if (left + tooltipWidth > viewportWidth) {
        left = rect.left - tooltipWidth - 12;
      }

      // Ensure tooltip doesn't go off the top or bottom
      let top = rect.top;
      if (top + tooltipHeight > window.innerHeight) {
        top = window.innerHeight - tooltipHeight - 10;
      }
      if (top < 10) {
        top = 10;
      }
      setTooltipPosition({
        top,
        left
      });
      setHoveredFlowId(flow.id);
    },
    onMouseLeave: e => {
      // Only hide if the mouse is not entering the tooltip area
      const tooltip = document.querySelector('.flow-info-tooltip');
      if (tooltip) {
        const tooltipRect = tooltip.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Check if mouse is within tooltip bounds
        if (mouseX >= tooltipRect.left && mouseX <= tooltipRect.right && mouseY >= tooltipRect.top && mouseY <= tooltipRect.bottom) {
          return; // Keep tooltip visible
        }
      }
      setHoveredFlowId(null);
      setTooltipPosition(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 14,
    className: "flow-info-icon"
  }))), flow.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversation-preview"
  }, flow.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flow-parameters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flow-function-signature"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, flow.name, "("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flow-params-list"
  }, flow.parameters.map((param, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: idx,
    className: "flow-param"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    className: "param-name"
  }, param.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "param-type"
  }, ": ", param.type), !param.required && param.default !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "param-default"
  }, " = ", JSON.stringify(param.default)), param.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "param-required"
  }, "*"), idx < flow.parameters.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ",")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "conversation-date"
  }, formatDate(flow.timestamp))))))), hoveredFlowId && tooltipPosition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flow-info-tooltip",
    style: {
      top: `${tooltipPosition.top}px`,
      left: `${tooltipPosition.left}px`
    },
    onMouseEnter: () => {
      // Keep tooltip visible when mouse enters it
      setHoveredFlowId(hoveredFlowId);
    },
    onMouseLeave: () => {
      // Hide tooltip when mouse leaves
      setHoveredFlowId(null);
      setTooltipPosition(null);
    }
  }, "Saved from a previous conversation where you completed a similar task using CRM, filesystem, and email tools. Reuse this flow to repeat the same pattern with different parameters."));
}

/***/ }),

/***/ "../agentic_chat/src/MemoryConfig.tsx":
/*!********************************************!*\
  !*** ../agentic_chat/src/MemoryConfig.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MemoryConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");



function MemoryConfig({
  onClose
}) {
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    enableMemory: true,
    disableMemory: false,
    memoryType: "both",
    contextWindow: 4096,
    maxMemoryItems: 100,
    semanticSearch: true,
    autoSummarization: true,
    factStorage: false,
    learningFromFailures: false,
    blockedMemoryItems: [],
    saveAndReuse: {
      enabled: false,
      autoGeneralize: false,
      minSuccessfulRuns: 3,
      requireApproval: true,
      savedTrajectories: []
    }
  });
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  const [newBlockedItem, setNewBlockedItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [expandedTrajectory, setExpandedTrajectory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
  }, []);
  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config/memory');
      if (response.ok) {
        const data = await response.json();
        setConfig({
          enableMemory: data.enableMemory ?? true,
          disableMemory: data.disableMemory ?? false,
          memoryType: data.memoryType ?? "both",
          contextWindow: data.contextWindow ?? 4096,
          maxMemoryItems: data.maxMemoryItems ?? 100,
          semanticSearch: data.semanticSearch ?? true,
          autoSummarization: data.autoSummarization ?? true,
          factStorage: data.factStorage ?? false,
          learningFromFailures: data.learningFromFailures ?? false,
          blockedMemoryItems: data.blockedMemoryItems ?? [],
          saveAndReuse: data.saveAndReuse ?? {
            enabled: false,
            autoGeneralize: false,
            minSuccessfulRuns: 3,
            requireApproval: true,
            savedTrajectories: []
          }
        });
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/memory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  const addBlockedItem = () => {
    if (newBlockedItem.trim() && !config.blockedMemoryItems.includes(newBlockedItem.trim())) {
      setConfig({
        ...config,
        blockedMemoryItems: [...config.blockedMemoryItems, newBlockedItem.trim()]
      });
      setNewBlockedItem("");
    }
  };
  const removeBlockedItem = item => {
    setConfig({
      ...config,
      blockedMemoryItems: config.blockedMemoryItems.filter(i => i !== item)
    });
  };
  const toggleTrajectory = id => {
    setConfig({
      ...config,
      saveAndReuse: {
        ...config.saveAndReuse,
        savedTrajectories: config.saveAndReuse.savedTrajectories.map(t => t.id === id ? {
          ...t,
          enabled: !t.enabled
        } : t)
      }
    });
  };
  const deleteTrajectory = id => {
    setConfig({
      ...config,
      saveAndReuse: {
        ...config.saveAndReuse,
        savedTrajectories: config.saveAndReuse.savedTrajectories.filter(t => t.id !== id)
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Memory Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Memory Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.disableMemory,
    onChange: e => {
      const disabled = e.target.checked;
      setConfig({
        ...config,
        disableMemory: disabled,
        enableMemory: disabled ? false : config.enableMemory
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Disable Memory Completely")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Turn off all memory functionality")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.enableMemory,
    onChange: e => setConfig({
      ...config,
      enableMemory: e.target.checked
    }),
    disabled: config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Memory System")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Allow the agent to remember context across conversations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Max Memory Items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: config.maxMemoryItems,
    onChange: e => setConfig({
      ...config,
      maxMemoryItems: parseInt(e.target.value)
    }),
    min: "10",
    max: "1000",
    disabled: !config.enableMemory || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Maximum number of memory items to store")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.semanticSearch,
    onChange: e => setConfig({
      ...config,
      semanticSearch: e.target.checked
    }),
    disabled: !config.enableMemory || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Semantic Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Use embeddings to find relevant memories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.autoSummarization,
    onChange: e => setConfig({
      ...config,
      autoSummarization: e.target.checked
    }),
    disabled: !config.enableMemory || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Auto-summarization")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Automatically summarize long conversations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.factStorage,
    onChange: e => setConfig({
      ...config,
      factStorage: e.target.checked
    }),
    disabled: !config.enableMemory || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Fact Storage and Retrieval")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Store and retrieve important facts like IDs, key values, and persistent information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.learningFromFailures,
    onChange: e => setConfig({
      ...config,
      learningFromFailures: e.target.checked
    }),
    disabled: !config.enableMemory || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Learning from Failures and Tip Injection")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Learn from past failures and analyze trajectories to improve future task performance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Blocked Memory Items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: newBlockedItem,
    onChange: e => setNewBlockedItem(e.target.value),
    onKeyPress: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        addBlockedItem();
      }
    },
    placeholder: "e.g., passwords, secrets",
    disabled: config.disableMemory,
    style: {
      width: "200px",
      padding: "4px 8px",
      fontSize: "12px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-small-btn",
    onClick: addBlockedItem,
    disabled: config.disableMemory || !newBlockedItem.trim()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 12
  }), "Add"))), config.blockedMemoryItems.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "policies-empty"
  }, "No blocked items. Add items that the agent should never remember.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "policies-list"
  }, config.blockedMemoryItems.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "policy-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      flex: 1,
      padding: "8px",
      fontSize: "13px"
    }
  }, item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-btn",
    onClick: () => removeBlockedItem(item),
    disabled: config.disableMemory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 14
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Items the agent is not allowed to remember (e.g., sensitive information, passwords)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Save & Reuse Trajectories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.saveAndReuse.enabled,
    onChange: e => setConfig({
      ...config,
      saveAndReuse: {
        ...config.saveAndReuse,
        enabled: e.target.checked
      }
    }),
    disabled: config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable Save & Reuse")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Allow agent to save successful task trajectories as reusable tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.saveAndReuse.autoGeneralize,
    onChange: e => setConfig({
      ...config,
      saveAndReuse: {
        ...config.saveAndReuse,
        autoGeneralize: e.target.checked
      }
    }),
    disabled: !config.saveAndReuse.enabled || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Auto-generalize Trajectories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Automatically identify patterns and create reusable tools from successful tasks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Min. Successful Runs Before Saving"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: config.saveAndReuse.minSuccessfulRuns,
    onChange: e => setConfig({
      ...config,
      saveAndReuse: {
        ...config.saveAndReuse,
        minSuccessfulRuns: parseInt(e.target.value)
      }
    }),
    min: "1",
    max: "10",
    disabled: !config.saveAndReuse.enabled || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Number of successful executions before suggesting trajectory as reusable tool")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.saveAndReuse.requireApproval,
    onChange: e => setConfig({
      ...config,
      saveAndReuse: {
        ...config.saveAndReuse,
        requireApproval: e.target.checked
      }
    }),
    disabled: !config.saveAndReuse.enabled || config.disableMemory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Require User Approval")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Ask for permission before saving new trajectories as tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group",
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      fontSize: "14px",
      fontWeight: 600,
      marginBottom: "12px",
      display: "block"
    }
  }, "Saved Trajectories (", config.saveAndReuse.savedTrajectories.length, ")"), config.saveAndReuse.savedTrajectories.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "policies-empty"
  }, "No saved trajectories yet. When enabled, successful task patterns will appear here.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "policies-list",
    style: {
      maxHeight: "400px",
      overflowY: "auto"
    }
  }, config.saveAndReuse.savedTrajectories.map(trajectory => {
    const isExpanded = expandedTrajectory === trajectory.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: trajectory.id,
      className: "policy-item",
      style: {
        flexDirection: "column",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: trajectory.enabled,
      onChange: () => toggleTrajectory(trajectory.id),
      disabled: !config.saveAndReuse.enabled || config.disableMemory,
      style: {
        cursor: "pointer"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        flex: 1,
        cursor: "pointer"
      },
      onClick: () => setExpandedTrajectory(isExpanded ? null : trajectory.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: "13px",
        color: "#1e293b"
      }
    }, trajectory.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontSize: "11px",
        color: "#64748b",
        marginTop: "2px"
      }
    }, trajectory.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        gap: "4px",
        alignItems: "center",
        fontSize: "11px",
        color: "#64748b"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Confidence: ", trajectory.confidence, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, trajectory.parameters.length, " params")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "remove-btn",
      onClick: () => deleteTrajectory(trajectory.id),
      disabled: !config.saveAndReuse.enabled || config.disableMemory
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 14
    }))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: "12px",
        background: "#f8fafc",
        borderTop: "1px solid #e5e7eb",
        fontSize: "12px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "12px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
      style: {
        color: "#475569",
        display: "block",
        marginBottom: "6px"
      }
    }, "Parameters:"), trajectory.parameters.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        color: "#94a3b8",
        fontStyle: "italic"
      }
    }, "No parameters") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "6px"
      }
    }, trajectory.parameters.map((param, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: idx,
      style: {
        background: "white",
        padding: "6px 8px",
        borderRadius: "4px",
        border: "1px solid #e5e7eb"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
      style: {
        color: "#667eea",
        fontWeight: 600,
        fontSize: "11px"
      }
    }, param.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: "#64748b"
      }
    }, ": ", param.type), param.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: "#ef4444",
        marginLeft: "4px"
      }
    }, "*"), param.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        color: "#64748b",
        fontSize: "11px",
        marginTop: "2px"
      }
    }, param.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        gap: "16px",
        fontSize: "11px",
        color: "#64748b"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Min interactions: ", trajectory.minInteractions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Created: ", new Date(trajectory.createdAt).toLocaleDateString()))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    style: {
      display: "block",
      marginTop: "8px"
    }
  }, "Trajectories are automatically learned from successful task completions"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))));
}

/***/ }),

/***/ "../agentic_chat/src/ModelConfig.tsx":
/*!*******************************************!*\
  !*** ../agentic_chat/src/ModelConfig.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModelConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");



function ModelConfig({
  onClose
}) {
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    provider: "watsonx",
    model: "openai/gpt-oss-120b",
    temperature: 0.7,
    maxTokens: 4096,
    topP: 1.0
  });
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
  }, []);
  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config/model');
      if (response.ok) {
        const data = await response.json();
        setConfig(data);
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Model Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Language Model Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Provider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: config.provider,
    onChange: e => setConfig({
      ...config,
      provider: e.target.value
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "anthropic"
  }, "Anthropic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "openai"
  }, "OpenAI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "azure"
  }, "Azure OpenAI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "watsonx"
  }, "IBM watsonx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "ollama"
  }, "Ollama"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: config.model,
    onChange: e => setConfig({
      ...config,
      model: e.target.value
    }),
    placeholder: "e.g., claude-3-5-sonnet-20241022"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Temperature: ", config.temperature), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    min: "0",
    max: "2",
    step: "0.1",
    value: config.temperature,
    onChange: e => setConfig({
      ...config,
      temperature: parseFloat(e.target.value)
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Controls randomness: 0 = focused, 2 = creative")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Max Tokens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: config.maxTokens,
    onChange: e => setConfig({
      ...config,
      maxTokens: parseInt(e.target.value)
    }),
    min: "1",
    max: "200000"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Top P: ", config.topP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.01",
    value: config.topP,
    onChange: e => setConfig({
      ...config,
      topP: parseFloat(e.target.value)
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Nucleus sampling threshold")), config.provider !== "ollama" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "API Key"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    value: config.apiKey || "",
    onChange: e => setConfig({
      ...config,
      apiKey: e.target.value
    }),
    placeholder: "Enter API key..."
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))));
}

/***/ }),

/***/ "../agentic_chat/src/PoliciesConfig.tsx":
/*!**********************************************!*\
  !*** ../agentic_chat/src/PoliciesConfig.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PoliciesConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");




function PoliciesConfig({
  onClose
}) {
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    enablePolicies: true,
    intentPolicies: [],
    sopPolicies: [],
    subAgentPolicies: [],
    appPolicies: [],
    toolGuards: [],
    toolEnrichments: [],
    answerPolicies: [],
    strictMode: false,
    logViolations: true
  });
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("intent");
  const [toolsSubTab, setToolsSubTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("guards");
  const [expandedPolicy, setExpandedPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
  }, []);
  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config/policies');
      if (response.ok) {
        const data = await response.json();
        setConfig({
          enablePolicies: data.enablePolicies ?? true,
          intentPolicies: data.intentPolicies ?? [],
          sopPolicies: data.sopPolicies ?? [],
          subAgentPolicies: data.subAgentPolicies ?? [],
          appPolicies: data.appPolicies ?? [],
          toolGuards: data.toolGuards ?? [],
          toolEnrichments: data.toolEnrichments ?? [],
          answerPolicies: data.answerPolicies ?? [],
          strictMode: data.strictMode ?? false,
          logViolations: data.logViolations ?? true
        });
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  const addIntentPolicy = () => {
    const newPolicy = {
      id: Date.now().toString(),
      name: "New Intent Policy",
      policyType: "intent",
      enabled: true,
      intentPattern: "",
      action: "block",
      response: "",
      allowedTopics: []
    };
    setConfig({
      ...config,
      intentPolicies: [...config.intentPolicies, newPolicy]
    });
  };
  const addSOPPolicy = () => {
    const newPolicy = {
      id: Date.now().toString(),
      name: "New SOP",
      policyType: "sop",
      enabled: true,
      trigger: "",
      steps: [""],
      description: ""
    };
    setConfig({
      ...config,
      sopPolicies: [...config.sopPolicies, newPolicy]
    });
  };
  const addSubAgentPolicy = () => {
    const newPolicy = {
      id: Date.now().toString(),
      name: "New Sub-Agent Policy",
      policyType: "subagent",
      enabled: true,
      subAgentName: "",
      constraints: [],
      allowedTools: [],
      restrictions: ""
    };
    setConfig({
      ...config,
      subAgentPolicies: [...config.subAgentPolicies, newPolicy]
    });
  };
  const addAppPolicy = () => {
    const newPolicy = {
      id: Date.now().toString(),
      name: "New App Policy",
      policyType: "app",
      enabled: true,
      appName: "",
      instructions: "",
      rules: [],
      permissions: []
    };
    setConfig({
      ...config,
      appPolicies: [...config.appPolicies, newPolicy]
    });
  };
  const addToolGuard = () => {
    const newGuard = {
      id: Date.now().toString(),
      name: "New Tool Guard",
      policyType: "toolguard",
      enabled: true,
      toolName: "",
      guardType: "rate_limit",
      config: {
        maxCallsPerMinute: 10,
        maxCallsPerHour: 100
      },
      description: ""
    };
    setConfig({
      ...config,
      toolGuards: [...config.toolGuards, newGuard]
    });
  };
  const addAnswerPolicy = () => {
    const newPolicy = {
      id: Date.now().toString(),
      name: "New Answer Policy",
      policyType: "answer",
      enabled: true,
      responseFormat: "natural",
      tone: "professional",
      includeConfidence: false,
      includeSources: false,
      customInstructions: [],
      forbiddenPhrases: []
    };
    setConfig({
      ...config,
      answerPolicies: [...config.answerPolicies, newPolicy]
    });
  };
  const addToolEnrichment = () => {
    const newEnrichment = {
      id: Date.now().toString(),
      name: "New Tool Enrichment",
      policyType: "toolenrichment",
      enabled: true,
      toolName: "",
      customInstructions: [],
      exampleUsages: [],
      bestPractices: []
    };
    setConfig({
      ...config,
      toolEnrichments: [...config.toolEnrichments, newEnrichment]
    });
  };
  const updateIntentPolicy = (id, updates) => {
    setConfig({
      ...config,
      intentPolicies: config.intentPolicies.map(policy => policy.id === id ? {
        ...policy,
        ...updates
      } : policy)
    });
  };
  const updateSOPPolicy = (id, updates) => {
    setConfig({
      ...config,
      sopPolicies: config.sopPolicies.map(policy => policy.id === id ? {
        ...policy,
        ...updates
      } : policy)
    });
  };
  const updateSubAgentPolicy = (id, updates) => {
    setConfig({
      ...config,
      subAgentPolicies: config.subAgentPolicies.map(policy => policy.id === id ? {
        ...policy,
        ...updates
      } : policy)
    });
  };
  const updateAppPolicy = (id, updates) => {
    setConfig({
      ...config,
      appPolicies: config.appPolicies.map(policy => policy.id === id ? {
        ...policy,
        ...updates
      } : policy)
    });
  };
  const updateToolGuard = (id, updates) => {
    setConfig({
      ...config,
      toolGuards: config.toolGuards.map(guard => guard.id === id ? {
        ...guard,
        ...updates
      } : guard)
    });
  };
  const updateAnswerPolicy = (id, updates) => {
    setConfig({
      ...config,
      answerPolicies: config.answerPolicies.map(policy => policy.id === id ? {
        ...policy,
        ...updates
      } : policy)
    });
  };
  const updateToolEnrichment = (id, updates) => {
    setConfig({
      ...config,
      toolEnrichments: config.toolEnrichments.map(enrichment => enrichment.id === id ? {
        ...enrichment,
        ...updates
      } : enrichment)
    });
  };
  const removePolicy = (id, type) => {
    switch (type) {
      case "intent":
        setConfig({
          ...config,
          intentPolicies: config.intentPolicies.filter(p => p.id !== id)
        });
        break;
      case "sop":
        setConfig({
          ...config,
          sopPolicies: config.sopPolicies.filter(p => p.id !== id)
        });
        break;
      case "subagent":
        setConfig({
          ...config,
          subAgentPolicies: config.subAgentPolicies.filter(p => p.id !== id)
        });
        break;
      case "app":
        setConfig({
          ...config,
          appPolicies: config.appPolicies.filter(p => p.id !== id)
        });
        break;
      case "toolguards":
        setConfig({
          ...config,
          toolGuards: config.toolGuards.filter(p => p.id !== id)
        });
        break;
      case "toolenrichments":
        setConfig({
          ...config,
          toolEnrichments: config.toolEnrichments.filter(p => p.id !== id)
        });
        break;
      case "answer":
        setConfig({
          ...config,
          answerPolicies: config.answerPolicies.filter(p => p.id !== id)
        });
        break;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Policies Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "intent" ? "active" : ""}`,
    onClick: () => setActiveTab("intent")
  }, "Intent Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "sop" ? "active" : ""}`,
    onClick: () => setActiveTab("sop")
  }, "SOPs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "subagent" ? "active" : ""}`,
    onClick: () => setActiveTab("subagent")
  }, "Sub-Agent Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "app" ? "active" : ""}`,
    onClick: () => setActiveTab("app")
  }, "App Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "toolguards" || activeTab === "toolenrichments" ? "active" : ""}`,
    onClick: () => {
      setActiveTab("toolguards");
      setToolsSubTab("guards");
    }
  }, "Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "answer" ? "active" : ""}`,
    onClick: () => setActiveTab("answer")
  }, "Answer Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Global Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.enablePolicies,
    onChange: e => setConfig({
      ...config,
      enablePolicies: e.target.checked
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enable All Policies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Master switch for all policy enforcement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.strictMode,
    onChange: e => setConfig({
      ...config,
      strictMode: e.target.checked
    }),
    disabled: !config.enablePolicies
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Strict Mode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Deny all actions not explicitly allowed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: config.logViolations,
    onChange: e => setConfig({
      ...config,
      logViolations: e.target.checked
    }),
    disabled: !config.enablePolicies
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Log Violations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Record all policy violations"))))), activeTab === "intent" && renderIntentPolicies(), activeTab === "sop" && renderSOPPolicies(), activeTab === "subagent" && renderSubAgentPolicies(), activeTab === "app" && renderAppPolicies(), (activeTab === "toolguards" || activeTab === "toolenrichments") && renderToolsSection(), activeTab === "answer" && renderAnswerPolicies()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))));
  function renderIntentPolicies() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Intent Blockers & Redirections"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addIntentPolicy,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add Intent Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.intentPolicies.map(policy => {
      const isExpanded = expandedPolicy === policy.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: policy.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.enabled,
        onChange: e => updateIntentPolicy(policy.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.name,
        onChange: e => updateIntentPolicy(policy.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "Policy Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : policy.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(policy.id, "intent"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      })))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Intent Pattern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.intentPattern,
        onChange: e => updateIntentPolicy(policy.id, {
          intentPattern: e.target.value
        }),
        placeholder: "e.g., 'personal information', 'sensitive data'",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Keywords or phrases that trigger this policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        value: policy.action,
        onChange: e => updateIntentPolicy(policy.id, {
          action: e.target.value
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "block"
      }, "Block"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "redirect"
      }, "Redirect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "restrict"
      }, "Restrict to Topics"))), policy.action === "block" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Response Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: policy.response || "",
        onChange: e => updateIntentPolicy(policy.id, {
          response: e.target.value
        }),
        placeholder: "I cannot help with that request.",
        rows: 2,
        disabled: !config.enablePolicies
      })), policy.action === "redirect" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Redirect To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.redirectTo || "",
        onChange: e => updateIntentPolicy(policy.id, {
          redirectTo: e.target.value
        }),
        placeholder: "Alternative response or agent",
        disabled: !config.enablePolicies
      })), policy.action === "restrict" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Allowed Topics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.allowedTopics?.join(", ") || "",
        onChange: e => updateIntentPolicy(policy.id, {
          allowedTopics: e.target.value.split(",").map(t => t.trim()).filter(t => t)
        }),
        placeholder: "topic1, topic2, topic3",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Comma-separated list of allowed topics"))));
    })), config.intentPolicies.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No intent policies configured. Click \"Add Intent Policy\" to create one.")));
  }
  function renderSOPPolicies() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Standard Operating Procedures (SOPs)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addSOPPolicy,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add SOP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.sopPolicies.map(policy => {
      const isExpanded = expandedPolicy === policy.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: policy.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.enabled,
        onChange: e => updateSOPPolicy(policy.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.name,
        onChange: e => updateSOPPolicy(policy.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "SOP Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : policy.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(policy.id, "sop"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      }))), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-summary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, policy.steps.length, " step", policy.steps.length !== 1 ? 's' : ''))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: policy.description,
        onChange: e => updateSOPPolicy(policy.id, {
          description: e.target.value
        }),
        placeholder: "What this SOP is for...",
        rows: 2,
        disabled: !config.enablePolicies
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Trigger Condition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.trigger,
        onChange: e => updateSOPPolicy(policy.id, {
          trigger: e.target.value
        }),
        placeholder: "When should this SOP be applied?",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Condition or keywords that activate this SOP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Steps (in order)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "add-small-btn",
        onClick: () => updateSOPPolicy(policy.id, {
          steps: [...policy.steps, ""]
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 12
      }), "Add Step")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "policies-list"
      }, policy.steps.map((step, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "policy-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          fontWeight: "bold",
          marginRight: "8px"
        }
      }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: step,
        onChange: e => {
          const newSteps = [...policy.steps];
          newSteps[index] = e.target.value;
          updateSOPPolicy(policy.id, {
            steps: newSteps
          });
        },
        placeholder: "Describe this step...",
        rows: 2,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => {
          const newSteps = policy.steps.filter((_, i) => i !== index);
          updateSOPPolicy(policy.id, {
            steps: newSteps
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      }))))))));
    })), config.sopPolicies.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No SOPs configured. Click \"Add SOP\" to create one.")));
  }
  function renderSubAgentPolicies() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Sub-Agent Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addSubAgentPolicy,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add Sub-Agent Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.subAgentPolicies.map(policy => {
      const isExpanded = expandedPolicy === policy.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: policy.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.enabled,
        onChange: e => updateSubAgentPolicy(policy.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.name,
        onChange: e => updateSubAgentPolicy(policy.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "Policy Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : policy.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(policy.id, "subagent"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      })))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Sub-Agent Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.subAgentName,
        onChange: e => updateSubAgentPolicy(policy.id, {
          subAgentName: e.target.value
        }),
        placeholder: "Which sub-agent does this apply to?",
        disabled: !config.enablePolicies
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Restrictions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: policy.restrictions,
        onChange: e => updateSubAgentPolicy(policy.id, {
          restrictions: e.target.value
        }),
        placeholder: "General restrictions for this sub-agent...",
        rows: 2,
        disabled: !config.enablePolicies
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Constraints"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.constraints.join(", "),
        onChange: e => updateSubAgentPolicy(policy.id, {
          constraints: e.target.value.split(",").map(c => c.trim()).filter(c => c)
        }),
        placeholder: "constraint1, constraint2, constraint3",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Comma-separated behavioral constraints")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Allowed Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.allowedTools.join(", "),
        onChange: e => updateSubAgentPolicy(policy.id, {
          allowedTools: e.target.value.split(",").map(t => t.trim()).filter(t => t)
        }),
        placeholder: "tool1, tool2, tool3",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Tools this sub-agent is allowed to use"))));
    })), config.subAgentPolicies.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No sub-agent policies configured. Click \"Add Sub-Agent Policy\" to create one.")));
  }
  function renderAppPolicies() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Application Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addAppPolicy,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add App Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.appPolicies.map(policy => {
      const isExpanded = expandedPolicy === policy.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: policy.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.enabled,
        onChange: e => updateAppPolicy(policy.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.name,
        onChange: e => updateAppPolicy(policy.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "Policy Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : policy.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(policy.id, "app"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      })))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Application Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.appName,
        onChange: e => updateAppPolicy(policy.id, {
          appName: e.target.value
        }),
        placeholder: "Which app does this apply to?",
        disabled: !config.enablePolicies
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: policy.instructions || "",
        onChange: e => updateAppPolicy(policy.id, {
          instructions: e.target.value
        }),
        placeholder: "Specific instructions for how the agent should use this application...",
        disabled: !config.enablePolicies,
        rows: 4,
        style: {
          resize: 'vertical',
          fontFamily: 'inherit'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "General guidance for using this app (separate from rules and permissions)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Rules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.rules.join(", "),
        onChange: e => updateAppPolicy(policy.id, {
          rules: e.target.value.split(",").map(r => r.trim()).filter(r => r)
        }),
        placeholder: "rule1, rule2, rule3",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Comma-separated application rules")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Permissions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.permissions.join(", "),
        onChange: e => updateAppPolicy(policy.id, {
          permissions: e.target.value.split(",").map(p => p.trim()).filter(p => p)
        }),
        placeholder: "read, write, execute",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "What the app is allowed to do"))));
    })), config.appPolicies.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No app policies configured. Click \"Add App Policy\" to create one.")));
  }
  function renderToolsSection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-modal-tabs",
      style: {
        marginBottom: "16px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: `config-tab ${toolsSubTab === "guards" ? "active" : ""}`,
      onClick: () => setToolsSubTab("guards")
    }, "Tool Guards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: `config-tab ${toolsSubTab === "enrichments" ? "active" : ""}`,
      onClick: () => setToolsSubTab("enrichments")
    }, "Tool Enrichment")), toolsSubTab === "guards" ? renderToolGuards() : renderToolEnrichments());
  }
  function renderToolGuards() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Tool Guards & Safety Rails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addToolGuard,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add Tool Guard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.toolGuards.map(guard => {
      const isExpanded = expandedPolicy === guard.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: guard.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: guard.enabled,
        onChange: e => updateToolGuard(guard.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: guard.name,
        onChange: e => updateToolGuard(guard.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "Guard Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : guard.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(guard.id, "toolguards"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      }))), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-summary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, guard.guardType.replace('_', ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, guard.toolName || 'No tool set'))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Tool Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: guard.toolName,
        onChange: e => updateToolGuard(guard.id, {
          toolName: e.target.value
        }),
        placeholder: "e.g., web_search, file_system, send_email",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "The specific tool this guard applies to")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: guard.description,
        onChange: e => updateToolGuard(guard.id, {
          description: e.target.value
        }),
        placeholder: "What this guard does...",
        rows: 2,
        disabled: !config.enablePolicies
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Guard Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        value: guard.guardType,
        onChange: e => {
          const newType = e.target.value;
          let newConfig = {};
          switch (newType) {
            case "rate_limit":
              newConfig = {
                maxCallsPerMinute: 10,
                maxCallsPerHour: 100
              };
              break;
            case "input_validation":
              newConfig = {
                inputValidationRules: []
              };
              break;
            case "output_filter":
              newConfig = {
                outputFilterPatterns: []
              };
              break;
            case "approval_required":
              newConfig = {
                approvers: [],
                requireConfirmation: true
              };
              break;
            case "time_restriction":
              newConfig = {
                allowedTimeRanges: []
              };
              break;
          }
          updateToolGuard(guard.id, {
            guardType: newType,
            config: newConfig
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "rate_limit"
      }, "Rate Limit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "input_validation"
      }, "Input Validation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "output_filter"
      }, "Output Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "approval_required"
      }, "Approval Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "time_restriction"
      }, "Time Restriction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Type of safety mechanism")), guard.guardType === "rate_limit" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Max Calls Per Minute"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "number",
        value: guard.config.maxCallsPerMinute || 10,
        onChange: e => updateToolGuard(guard.id, {
          config: {
            ...guard.config,
            maxCallsPerMinute: parseInt(e.target.value)
          }
        }),
        min: "1",
        disabled: !config.enablePolicies
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Max Calls Per Hour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "number",
        value: guard.config.maxCallsPerHour || 100,
        onChange: e => updateToolGuard(guard.id, {
          config: {
            ...guard.config,
            maxCallsPerHour: parseInt(e.target.value)
          }
        }),
        min: "1",
        disabled: !config.enablePolicies
      }))), guard.guardType === "input_validation" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Validation Rules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: guard.config.inputValidationRules?.join(", ") || "",
        onChange: e => updateToolGuard(guard.id, {
          config: {
            ...guard.config,
            inputValidationRules: e.target.value.split(",").map(r => r.trim()).filter(r => r)
          }
        }),
        placeholder: "no-urls, max-length-1000, alphanumeric-only",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Rules to validate input parameters (comma-separated)")), guard.guardType === "output_filter" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Filter Patterns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: guard.config.outputFilterPatterns?.join(", ") || "",
        onChange: e => updateToolGuard(guard.id, {
          config: {
            ...guard.config,
            outputFilterPatterns: e.target.value.split(",").map(p => p.trim()).filter(p => p)
          }
        }),
        placeholder: "password, api-key, credit-card, ssn",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Patterns to filter from tool output (comma-separated)")), guard.guardType === "approval_required" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Approvers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: guard.config.approvers?.join(", ") || "",
        onChange: e => updateToolGuard(guard.id, {
          config: {
            ...guard.config,
            approvers: e.target.value.split(",").map(a => a.trim()).filter(a => a)
          }
        }),
        placeholder: "admin, manager, supervisor",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Who can approve tool execution (comma-separated)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: guard.config.requireConfirmation || false,
        onChange: e => updateToolGuard(guard.id, {
          config: {
            ...guard.config,
            requireConfirmation: e.target.checked
          }
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Require Explicit Confirmation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "User must manually confirm each tool call"))), guard.guardType === "time_restriction" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Allowed Time Ranges"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: guard.config.allowedTimeRanges?.map(r => `${r.start}-${r.end}`).join(", ") || "",
        onChange: e => {
          const ranges = e.target.value.split(",").map(r => {
            const [start, end] = r.trim().split("-");
            return start && end ? {
              start: start.trim(),
              end: end.trim()
            } : null;
          }).filter(r => r !== null);
          updateToolGuard(guard.id, {
            config: {
              ...guard.config,
              allowedTimeRanges: ranges
            }
          });
        },
        placeholder: "09:00-17:00, 14:00-18:00",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Time ranges when tool can be used (HH:MM-HH:MM, comma-separated)"))));
    })), config.toolGuards.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No tool guards configured. Click \"Add Tool Guard\" to create one.")));
  }
  function renderToolEnrichments() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Tool Enrichment & Custom Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addToolEnrichment,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add Tool Enrichment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.toolEnrichments.map(enrichment => {
      const isExpanded = expandedPolicy === enrichment.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: enrichment.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: enrichment.enabled,
        onChange: e => updateToolEnrichment(enrichment.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: enrichment.name,
        onChange: e => updateToolEnrichment(enrichment.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "Enrichment Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : enrichment.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(enrichment.id, "toolenrichments"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      }))), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-summary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, enrichment.toolName || 'No tool set'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, enrichment.customInstructions.length, " instruction", enrichment.customInstructions.length !== 1 ? 's' : ''))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Tool Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: enrichment.toolName,
        onChange: e => updateToolEnrichment(enrichment.id, {
          toolName: e.target.value
        }),
        placeholder: "e.g., web_search, file_system, send_email",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "The specific tool this enrichment applies to")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Pre-Execution Prompt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: enrichment.preExecutionPrompt || "",
        onChange: e => updateToolEnrichment(enrichment.id, {
          preExecutionPrompt: e.target.value
        }),
        placeholder: "Instructions to consider before using this tool...",
        rows: 3,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Guidance provided to the agent before executing the tool")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Post-Processing Rules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: enrichment.postProcessingRules || "",
        onChange: e => updateToolEnrichment(enrichment.id, {
          postProcessingRules: e.target.value
        }),
        placeholder: "How to process or interpret the tool's output...",
        rows: 3,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Instructions for handling the tool's response")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Context Hints"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: enrichment.contextHints || "",
        onChange: e => updateToolEnrichment(enrichment.id, {
          contextHints: e.target.value
        }),
        placeholder: "When this tool is most useful, what context to consider...",
        rows: 2,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Contextual information about when and how to use this tool")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Custom Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "add-small-btn",
        onClick: () => updateToolEnrichment(enrichment.id, {
          customInstructions: [...enrichment.customInstructions, ""]
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 12
      }), "Add Instruction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Specific instructions for using this tool effectively"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "policies-list"
      }, enrichment.customInstructions.map((instruction, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "policy-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: instruction,
        onChange: e => {
          const newInstructions = [...enrichment.customInstructions];
          newInstructions[index] = e.target.value;
          updateToolEnrichment(enrichment.id, {
            customInstructions: newInstructions
          });
        },
        placeholder: "e.g., Always verify the search query is relevant before calling",
        rows: 2,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => {
          const newInstructions = enrichment.customInstructions.filter((_, i) => i !== index);
          updateToolEnrichment(enrichment.id, {
            customInstructions: newInstructions
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Example Usages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "add-small-btn",
        onClick: () => updateToolEnrichment(enrichment.id, {
          exampleUsages: [...enrichment.exampleUsages, ""]
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 12
      }), "Add Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Example scenarios or use cases for this tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "policies-list"
      }, enrichment.exampleUsages.map((example, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "policy-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: example,
        onChange: e => {
          const newExamples = [...enrichment.exampleUsages];
          newExamples[index] = e.target.value;
          updateToolEnrichment(enrichment.id, {
            exampleUsages: newExamples
          });
        },
        placeholder: "e.g., Use when user asks about current weather in a specific location",
        rows: 2,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => {
          const newExamples = enrichment.exampleUsages.filter((_, i) => i !== index);
          updateToolEnrichment(enrichment.id, {
            exampleUsages: newExamples
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Best Practices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "add-small-btn",
        onClick: () => updateToolEnrichment(enrichment.id, {
          bestPractices: [...enrichment.bestPractices, ""]
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 12
      }), "Add Practice")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Best practices and tips for optimal tool usage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "policies-list"
      }, enrichment.bestPractices.map((practice, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "policy-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: practice,
        onChange: e => {
          const newPractices = [...enrichment.bestPractices];
          newPractices[index] = e.target.value;
          updateToolEnrichment(enrichment.id, {
            bestPractices: newPractices
          });
        },
        placeholder: "e.g., Limit search results to top 5 for faster processing",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => {
          const newPractices = enrichment.bestPractices.filter((_, i) => i !== index);
          updateToolEnrichment(enrichment.id, {
            bestPractices: newPractices
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      }))))))));
    })), config.toolEnrichments.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No tool enrichments configured. Click \"Add Tool Enrichment\" to create one.")));
  }
  function renderAnswerPolicies() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Answer & Response Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-btn",
      onClick: addAnswerPolicy,
      disabled: !config.enablePolicies
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16
    }), "Add Answer Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sources-list"
    }, config.answerPolicies.map(policy => {
      const isExpanded = expandedPolicy === policy.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: policy.id,
        className: "agent-config-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.enabled,
        onChange: e => updateAnswerPolicy(policy.id, {
          enabled: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: policy.name,
        onChange: e => updateAnswerPolicy(policy.id, {
          name: e.target.value
        }),
        className: "agent-config-name",
        placeholder: "Policy Name",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "expand-btn",
        onClick: () => setExpandedPolicy(isExpanded ? null : policy.id)
      }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 16
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "delete-btn",
        onClick: () => removePolicy(policy.id, "answer"),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 16
      }))), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-summary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, policy.responseFormat), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "agent-summary-item"
      }, policy.tone, " tone"))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "agent-config-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Response Format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        value: policy.responseFormat,
        onChange: e => updateAnswerPolicy(policy.id, {
          responseFormat: e.target.value
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "natural"
      }, "Natural Language"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "json"
      }, "JSON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "structured"
      }, "Structured"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "markdown"
      }, "Markdown")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "How responses should be formatted")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Response Tone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        value: policy.tone,
        onChange: e => updateAnswerPolicy(policy.id, {
          tone: e.target.value
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "professional"
      }, "Professional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "casual"
      }, "Casual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "technical"
      }, "Technical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "friendly"
      }, "Friendly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "formal"
      }, "Formal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Communication style for responses"))), policy.responseFormat === "json" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "JSON Schema"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: policy.jsonSchema || "",
        onChange: e => updateAnswerPolicy(policy.id, {
          jsonSchema: e.target.value
        }),
        placeholder: '{\n  "type": "object",\n  "properties": {\n    "answer": { "type": "string" }\n  }\n}',
        rows: 6,
        disabled: !config.enablePolicies,
        style: {
          fontFamily: "monospace",
          fontSize: "12px"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "JSON schema that responses must adhere to")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Max Response Length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "number",
        value: policy.maxResponseLength || "",
        onChange: e => updateAnswerPolicy(policy.id, {
          maxResponseLength: e.target.value ? parseInt(e.target.value) : undefined
        }),
        placeholder: "e.g., 500",
        min: "1",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Maximum number of characters (leave empty for no limit)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.includeConfidence,
        onChange: e => updateAnswerPolicy(policy.id, {
          includeConfidence: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Include Confidence Score")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Add confidence level to responses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: policy.includeSources,
        onChange: e => updateAnswerPolicy(policy.id, {
          includeSources: e.target.checked
        }),
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Include Sources")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Cite information sources in responses"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Required Disclaimer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        value: policy.requiredDisclaimer || "",
        onChange: e => updateAnswerPolicy(policy.id, {
          requiredDisclaimer: e.target.value
        }),
        placeholder: "Optional disclaimer to append to all responses...",
        rows: 2,
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Text automatically added to every response")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Custom Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "add-small-btn",
        onClick: () => updateAnswerPolicy(policy.id, {
          customInstructions: [...policy.customInstructions, ""]
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 12
      }), "Add Instruction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Additional rules the agent must follow when responding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "policies-list"
      }, policy.customInstructions.map((instruction, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "policy-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: instruction,
        onChange: e => {
          const newInstructions = [...policy.customInstructions];
          newInstructions[index] = e.target.value;
          updateAnswerPolicy(policy.id, {
            customInstructions: newInstructions
          });
        },
        placeholder: "e.g., Always include a summary at the start",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => {
          const newInstructions = policy.customInstructions.filter((_, i) => i !== index);
          updateAnswerPolicy(policy.id, {
            customInstructions: newInstructions
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Forbidden Phrases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "add-small-btn",
        onClick: () => updateAnswerPolicy(policy.id, {
          forbiddenPhrases: [...policy.forbiddenPhrases, ""]
        }),
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 12
      }), "Add Phrase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Phrases that must not appear in responses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "policies-list"
      }, policy.forbiddenPhrases.map((phrase, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "policy-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: phrase,
        onChange: e => {
          const newPhrases = [...policy.forbiddenPhrases];
          newPhrases[index] = e.target.value;
          updateAnswerPolicy(policy.id, {
            forbiddenPhrases: newPhrases
          });
        },
        placeholder: "e.g., I'm not sure, I don't know",
        disabled: !config.enablePolicies
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => {
          const newPhrases = policy.forbiddenPhrases.filter((_, i) => i !== index);
          updateAnswerPolicy(policy.id, {
            forbiddenPhrases: newPhrases
          });
        },
        disabled: !config.enablePolicies
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      }))))))));
    })), config.answerPolicies.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No answer policies configured. Click \"Add Answer Policy\" to create one.")));
  }
}

/***/ }),

/***/ "../agentic_chat/src/StatusBar.css":
/*!*****************************************!*\
  !*** ../agentic_chat/src/StatusBar.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_StatusBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./StatusBar.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/StatusBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_StatusBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_StatusBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_StatusBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_StatusBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/StatusBar.tsx":
/*!*****************************************!*\
  !*** ../agentic_chat/src/StatusBar.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBar: function() { return /* binding */ StatusBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/wrench.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _StatusBar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StatusBar.css */ "../agentic_chat/src/StatusBar.css");



function StatusBar() {
  const [tools, setTools] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [internalToolsCount, setInternalToolsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("balanced");
  const [agentMode, setAgentMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("supervisor");
  const [subAgents, setSubAgents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [showToolsPopup, setShowToolsPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showAgentsPopup, setShowAgentsPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showAgentSelector, setShowAgentSelector] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedAgent, setSelectedAgent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showMoreMenu, setShowMoreMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [visibleItems, setVisibleItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(['tools', 'mode', 'agents', 'connection']));
  const statusBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const agentsPopupTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadTools();
    loadSubAgents();
  }, []);

  // Cleanup timeout on unmount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (agentsPopupTimeoutRef.current) {
        clearTimeout(agentsPopupTimeoutRef.current);
      }
    };
  }, []);

  // Responsive behavior - hide items when container is too narrow
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updateVisibleItems = () => {
      if (!statusBarRef.current) return;
      const containerWidth = statusBarRef.current.offsetWidth;
      const newVisibleItems = new Set();

      // Priority order: connection (always visible), tools, mode, agents
      if (containerWidth > 800) {
        newVisibleItems.add('tools');
        newVisibleItems.add('mode');
        newVisibleItems.add('agents');
      } else if (containerWidth > 600) {
        newVisibleItems.add('tools');
        newVisibleItems.add('mode');
      } else if (containerWidth > 400) {
        newVisibleItems.add('tools');
      }
      // Connection is always visible

      setVisibleItems(newVisibleItems);
    };
    updateVisibleItems();
    const resizeObserver = new ResizeObserver(updateVisibleItems);
    if (statusBarRef.current) {
      resizeObserver.observe(statusBarRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  const loadTools = async () => {
    try {
      const response = await fetch('/api/tools/status');
      if (response.ok) {
        const data = await response.json();
        setTools(data.tools || []);
        setInternalToolsCount(data.internalToolsCount || {});
      }
    } catch (error) {
      console.error("Error loading tools:", error);
    }
  };
  const loadSubAgents = async () => {
    try {
      const response = await fetch('/api/config/subagents');
      if (response.ok) {
        const data = await response.json();
        setSubAgents(data.subAgents || []);
        setAgentMode(data.mode || "supervisor");
        setSelectedAgent(data.selectedAgent || null);
      }
    } catch (error) {
      console.error("Error loading sub-agents:", error);
    }
  };
  const toggleMode = () => {
    const newMode = mode === "fast" ? "balanced" : "fast";
    setMode(newMode);
    // Send mode change to backend
    fetch('/api/config/mode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mode: newMode
      })
    }).catch(err => console.error("Failed to update mode:", err));
  };
  const toggleAgentMode = () => {
    const newMode = agentMode === "supervisor" ? "single" : "supervisor";
    if (newMode === "single") {
      // Show agent selector when switching to single mode
      setShowAgentSelector(true);
    } else {
      // Clear selected agent when switching to supervisor mode
      setSelectedAgent(null);
      setAgentMode(newMode);
      // Send agent mode change to backend
      fetch('/api/config/agent-mode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mode: newMode,
          selectedAgent: null
        })
      }).catch(err => console.error("Failed to update agent mode:", err));
    }
  };
  const selectAgent = agentName => {
    setSelectedAgent(agentName);
    setAgentMode("single");
    setShowAgentSelector(false);
    // Send agent selection to backend
    fetch('/api/config/agent-mode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mode: "single",
        selectedAgent: agentName
      })
    }).catch(err => console.error("Failed to update agent mode:", err));
  };
  const cancelAgentSelection = () => {
    setShowAgentSelector(false);
    // Keep current mode if cancelled
  };
  const toggleAgentEnabled = agentName => {
    const updatedAgents = subAgents.map(agent => agent.name === agentName ? {
      ...agent,
      enabled: !agent.enabled
    } : agent);
    setSubAgents(updatedAgents);

    // Send update to backend
    fetch('/api/config/subagents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subAgents: updatedAgents,
        mode: agentMode,
        selectedAgent: selectedAgent
      })
    }).catch(err => console.error("Failed to update agent status:", err));
  };
  const handleAgentsMouseEnter = () => {
    // Clear any pending hide timeout
    if (agentsPopupTimeoutRef.current) {
      clearTimeout(agentsPopupTimeoutRef.current);
      agentsPopupTimeoutRef.current = null;
    }
    setShowAgentsPopup(true);
  };
  const handleAgentsMouseLeave = () => {
    // Delay hiding the popup to allow mouse movement to the popup
    agentsPopupTimeoutRef.current = setTimeout(() => {
      setShowAgentsPopup(false);
    }, 300); // 300ms delay
  };
  const handleAgentsPopupMouseEnter = () => {
    // Clear the hide timeout when mouse enters the popup
    if (agentsPopupTimeoutRef.current) {
      clearTimeout(agentsPopupTimeoutRef.current);
      agentsPopupTimeoutRef.current = null;
    }
  };
  const handleAgentsPopupMouseLeave = () => {
    // Hide the popup when mouse leaves the popup area
    setShowAgentsPopup(false);
  };
  const connectedTools = tools.filter(t => t.status === "connected");
  const errorTools = tools.filter(t => t.status === "error");
  const activeAgents = subAgents.filter(a => a.enabled);
  const getSelectedAgentInfo = () => {
    if (!selectedAgent) return null;
    return subAgents.find(a => a.name === selectedAgent);
  };

  // Get overflow items for the More menu
  const getOverflowItems = () => {
    const overflowItems = [];
    if (!visibleItems.has('mode')) {
      overflowItems.push({
        id: 'mode',
        label: `Mode: ${mode === 'fast' ? 'Lite' : 'Balanced'}`,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: 14
        }),
        action: toggleMode
      });
    }
    if (!visibleItems.has('agents')) {
      overflowItems.push({
        id: 'agents',
        label: `${agentMode === 'supervisor' ? 'Supervisor' : 'Single'} (${agentMode === 'supervisor' ? activeAgents.length : selectedAgent ? getSelectedAgentInfo()?.name : 'None'})`,
        icon: agentMode === 'supervisor' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 14
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          size: 14
        }),
        action: () => setShowAgentsPopup(true)
      });
    }
    if (!visibleItems.has('tools')) {
      overflowItems.push({
        id: 'tools',
        label: `Tools: ${connectedTools.length}/${tools.length}`,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
          size: 14
        }),
        action: () => setShowToolsPopup(true)
      });
    }
    return overflowItems;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showAgentSelector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: cancelAgentSelection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: "500px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Select Agent to Talk With"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: cancelAgentSelection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: "20px"
    }
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      marginBottom: "16px",
      color: "#64748b",
      fontSize: "14px"
    }
  }, "Choose which agent you want to communicate with directly:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, subAgents.filter(a => a.enabled).length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: "24px",
      textAlign: "center",
      color: "#94a3b8",
      background: "#f8fafc",
      borderRadius: "8px"
    }
  }, "No active agents available. Enable agents in Sub Agents configuration.") : subAgents.filter(a => a.enabled).map(agent => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: agent.name,
    onClick: () => selectAgent(agent.name),
    style: {
      padding: "16px",
      background: "#f8fafc",
      border: "2px solid #e5e7eb",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.2s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "#667eea";
      e.currentTarget.style.background = "#f1f5f9";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "#e5e7eb";
      e.currentTarget.style.background = "#f8fafc";
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "14px",
      color: "#1e293b",
      marginBottom: "4px"
    }
  }, agent.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "12px",
      color: "#64748b"
    }
  }, agent.role))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: cancelAgentSelection
  }, "Cancel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-bar",
    ref: statusBarRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-bar-left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-bar-center"
  }, visibleItems.has('tools') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-item status-tools",
    onMouseEnter: () => setShowToolsPopup(true),
    onMouseLeave: () => setShowToolsPopup(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "status-label"
  }, "Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "status-badge"
  }, connectedTools.length), errorTools.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 12,
    className: "status-warning"
  }), showToolsPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools-popup-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Connected Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tools-count"
  }, connectedTools.length, "/", tools.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools-list"
  }, tools.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools-empty"
  }, "No tools configured") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Object.entries(tools.reduce((acc, tool) => {
    if (!acc[tool.type]) {
      acc[tool.type] = {
        total: 0,
        connected: 0,
        tools: []
      };
    }
    acc[tool.type].total++;
    if (tool.status === 'connected') {
      acc[tool.type].connected++;
    }
    acc[tool.type].tools.push(tool);
    return acc;
  }, {})).map(([type, data]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: type,
    className: "tool-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tool-group-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-group-name"
  }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tool-group-stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-group-count"
  }, "Connected: ", data.connected, "/", data.total), internalToolsCount[type.toLowerCase()] !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-group-internal"
  }, "Internal: ", internalToolsCount[type.toLowerCase()], " tools"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tool-group-items"
  }, data.tools.map(tool => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: tool.name,
    className: `tool-item ${tool.status}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tool-status-indicator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tool-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-name"
  }, tool.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-status-text"
  }, tool.status)))))))))), visibleItems.has('mode') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-item status-mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mode-toggle",
    onClick: toggleMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `mode-option ${mode === "fast" ? "active" : ""}`
  }, "Lite"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `mode-option ${mode === "balanced" ? "active" : ""}`
  }, "Balanced"))), visibleItems.has('agents') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-item status-agents",
    onMouseEnter: handleAgentsMouseEnter,
    onMouseLeave: handleAgentsMouseLeave
  }, agentMode === "supervisor" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 14
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mode-toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `mode-option ${agentMode === "supervisor" ? "active" : ""}`,
    onClick: e => {
      e.stopPropagation();
      if (agentMode !== "supervisor") {
        toggleAgentMode();
      }
    }
  }, "Supervisor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `mode-option ${agentMode === "single" ? "active" : ""} disabled`,
    title: "Single agent mode (Coming soon)"
  }, "Single")), agentMode === "supervisor" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "status-badge"
  }, activeAgents.length), showAgentsPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agents-popup",
    onMouseEnter: handleAgentsPopupMouseEnter,
    onMouseLeave: handleAgentsPopupMouseLeave
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agents-popup-header"
  }, agentMode === "supervisor" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Talking with All Agents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "agents-count"
  }, activeAgents.length, " active")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Direct Agent Communication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "agents-count"
  }, "Single mode"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agents-list"
  }, agentMode === "supervisor" ? subAgents.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agents-empty"
  }, "No sub-agents configured") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agents-info-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "agents-info-label"
  }, "Available Sub-Agents (click to toggle):")), subAgents.map(agent => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: agent.name,
    className: `agent-item ${agent.enabled ? "enabled" : "disabled"}`,
    onClick: e => {
      e.stopPropagation();
      toggleAgentEnabled(agent.name);
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: agent.enabled,
    onChange: () => {},
    style: {
      cursor: "pointer",
      marginRight: "8px",
      width: "16px",
      height: "16px"
    },
    onClick: e => e.stopPropagation()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agent-status-indicator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agent-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "agent-name"
  }, agent.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "agent-role"
  }, agent.role)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "agent-status-text"
  }, agent.enabled ? "active" : "inactive")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "agents-info-box single-mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 32,
    className: "single-agent-icon"
  }), selectedAgent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "single-agent-label"
  }, "Talking with: ", getSelectedAgentInfo()?.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "single-agent-description"
  }, "Role: ", getSelectedAgentInfo()?.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setShowAgentSelector(true);
    },
    style: {
      marginTop: "8px",
      padding: "6px 12px",
      background: "#667eea",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "Change Agent")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "single-agent-label"
  }, "Direct Agent Communication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "single-agent-description"
  }, "Click to select which agent to talk with."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setShowAgentSelector(true);
    },
    style: {
      marginTop: "8px",
      padding: "6px 12px",
      background: "#667eea",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "Select Agent"))))))), getOverflowItems().length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-item status-more",
    onMouseEnter: () => setShowMoreMenu(true),
    onMouseLeave: () => setShowMoreMenu(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "status-label"
  }, "More"), showMoreMenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-popup-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "More Options")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-list"
  }, getOverflowItems().map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id,
    className: "more-item",
    onClick: e => {
      e.stopPropagation();
      item.action();
      setShowMoreMenu(false);
    }
  }, item.icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "more-item-label"
  }, item.label)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-bar-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-item status-connection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 14,
    className: "status-connected"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "status-label"
  }, "Connected")))));
}

/***/ }),

/***/ "../agentic_chat/src/StreamManager.tsx":
/*!*********************************************!*\
  !*** ../agentic_chat/src/StreamManager.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamStateManager: function() { return /* binding */ streamStateManager; }
/* harmony export */ });
// streamStateManager.ts

class StreamStateManager {
  isStreaming = false;
  listeners = new Set();
  currentAbortController = null;
  setStreaming(streaming) {
    this.isStreaming = streaming;
    console.log("listeners", this.listeners);
    this.listeners.forEach(listener => listener(streaming));
  }
  getIsStreaming() {
    return this.isStreaming;
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  setAbortController(controller) {
    this.currentAbortController = controller;
  }
  async stopStream() {
    if (this.currentAbortController) {
      this.currentAbortController.abort();
    }
    try {
      const response = await fetch("http://localhost:8005/stop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        console.error("Failed to stop stream on server");
      }
    } catch (error) {
      console.error("Error stopping stream:", error);
    }
    this.setStreaming(false);
  }
}
const streamStateManager = new StreamStateManager();

/***/ }),

/***/ "../agentic_chat/src/StreamingWorkflow.ts":
/*!************************************************!*\
  !*** ../agentic_chat/src/StreamingWorkflow.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAKE_STREAM_DELAY: function() { return /* binding */ FAKE_STREAM_DELAY; },
/* harmony export */   FAKE_STREAM_FILE: function() { return /* binding */ FAKE_STREAM_FILE; },
/* harmony export */   USE_FAKE_STREAM: function() { return /* binding */ USE_FAKE_STREAM; },
/* harmony export */   fetchStreamingData: function() { return /* binding */ fetchStreamingData; },
/* harmony export */   streamViaBackground: function() { return /* binding */ streamViaBackground; }
/* harmony export */ });
/* harmony import */ var _microsoft_fetch_event_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fetch-event-source */ "../node_modules/.pnpm/@microsoft+fetch-event-source@2.0.1/node_modules/@microsoft/fetch-event-source/lib/esm/fetch.js");
/* harmony import */ var _StreamManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamManager */ "../agentic_chat/src/StreamManager.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../agentic_chat/src/constants.ts");




// When built without webpack DefinePlugin, `FAKE_STREAM` may not exist at runtime.
// Declare it for TypeScript and compute a safe value that won't throw if undefined.

const USE_FAKE_STREAM =  true ? !!false : 0;
const FAKE_STREAM_FILE = "/fake_data.json"; // Path to your JSON file
const FAKE_STREAM_DELAY = 1000; // Delay between fake stream events in milliseconds
// Unique timestamp generator for IDs
const generateTimestampId = () => {
  return Date.now().toString();
};
function renderPlan(planJson) {
  console.log("Current plan json", planJson);
  return planJson;
}
function getCurrentStep(event) {
  console.log("getCurrentStep received: ", event);
  switch (event.event) {
    case "__interrupt__":
      return;
    case "Stopped":
      // Handle the stopped event from the server
      if (window.aiSystemInterface) {
        window.aiSystemInterface.stopProcessing();
      }
      return renderPlan(event.data);
    default:
      return renderPlan(event.data);
  }
}
const simulateFakeStream = async (instance, query) => {
  console.log("Starting fake stream simulation with query:", query.substring(0, 50));

  // Create abort controller for this stream
  const abortController = new AbortController();
  _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setAbortController(abortController);
  let fullResponse = "";
  let workflowInitialized = false;
  let workflowId = "workflow_" + generateTimestampId();

  // Set streaming state AFTER setting abort controller
  _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setStreaming(true);
  try {
    // Check if already aborted before starting
    if (abortController.signal.aborted) {
      console.log("Stream aborted before starting");
      return fullResponse;
    }

    // Load the fake stream data from JSON file
    const response = await fetch(FAKE_STREAM_FILE, {
      signal: abortController.signal // Pass abort signal to fetch
    });
    if (!response.ok) {
      throw new Error(`Failed to load fake stream data: ${response.status} ${response.statusText}`);
    }
    const fakeStreamData = await response.json();
    if (!fakeStreamData.steps || !Array.isArray(fakeStreamData.steps)) {
      throw new Error("Invalid fake stream data format. Expected { steps: [{ name: string, data: any }] }");
    }
    workflowInitialized = true;

    // Card manager message is already created in customSendMessage, so we don't need to create another one here
    if (window.aiSystemInterface) {
      console.log("Card manager interface available for fake stream, skipping duplicate message creation");
    }

    // Use abortable delay for initial wait
    await abortableDelay(300, abortController.signal);

    // Process each step from the fake data
    for (let i = 0; i < fakeStreamData.steps.length; i++) {
      // Check abort signal at the start of each iteration
      if (abortController.signal.aborted) {
        console.log("Fake stream process aborted by user at step", i);
        break;
      }
      const step = fakeStreamData.steps[i];
      console.log(`Processing step ${i + 1}/${fakeStreamData.steps.length}: ${step.name}`);

      // Use abortable delay instead of regular setTimeout
      await abortableDelay(FAKE_STREAM_DELAY, abortController.signal);

      // Check again after delay in case it was aborted during the wait
      if (abortController.signal.aborted) {
        console.log("Fake stream process aborted during delay at step", i);
        break;
      }

      // Simulate the event
      const fakeEvent = {
        event: step.name,
        data: step.data
      };
      console.log("Simulating fake stream event:", fakeEvent);
      let currentStep = getCurrentStep(fakeEvent);
      let stepTitle = step.name;

      // Add the message (this is not abortable, but it's fast)
      // Use the card manager if available, otherwise add individual messages
      if (window.aiSystemInterface) {
        window.aiSystemInterface.addStep(stepTitle, currentStep);
      } else {
        await instance.messaging.addMessage({
          message_options: {
            response_user_profile: _constants__WEBPACK_IMPORTED_MODULE_2__.RESPONSE_USER_PROFILE
          },
          output: {
            generic: [{
              id: workflowId + stepTitle,
              response_type: "user_defined",
              user_defined: {
                user_defined_type: "my_unique_identifier",
                data: currentStep,
                step_title: stepTitle
              }
            }]
          }
        });
      }

      // Final check after adding message
      if (abortController.signal.aborted) {
        console.log("Fake stream process aborted after adding message at step", i);
        break;
      }
    }

    // If we completed all steps without aborting
    if (!abortController.signal.aborted) {
      console.log("Fake stream completed successfully");
    }
    return fullResponse;
  } catch (error) {
    if (error.name === "AbortError" || abortController.signal.aborted) {
      console.log("Fake stream was cancelled by user");

      // Add a message indicating the stream was stopped
      await instance.messaging.addMessage({
        message_options: {
          response_user_profile: _constants__WEBPACK_IMPORTED_MODULE_2__.RESPONSE_USER_PROFILE
        },
        output: {
          generic: [{
            id: workflowId + "_stopped",
            response_type: "text",
            text: `<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; color: #64748b; text-align: center; margin: 8px 0; display: flex; align-items: center; justify-content: center; gap: 8px;"><div style="font-size: 1.1rem;"></div><div><div style="font-size: 0.9rem; font-weight: 500; margin: 0; color: #475569;">Processing Stopped</div><div style="font-size: 0.75rem; opacity: 0.8; margin: 0; color: #64748b;">You stopped the task</div></div></div>`
          }]
        }
      });
      return fullResponse; // Return partial response
    } else {
      console.error("Fake streaming error:", error);

      // Add error message
      await instance.messaging.addMessage({
        message_options: {
          response_user_profile: _constants__WEBPACK_IMPORTED_MODULE_2__.RESPONSE_USER_PROFILE
        },
        output: {
          generic: [{
            id: workflowId + "_error",
            response_type: "text",
            text: "❌ An error occurred while processing your request."
          }]
        }
      });
      throw error;
    }
  } finally {
    // Always reset streaming state when done
    console.log("Cleaning up fake stream state");
    _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setStreaming(false);
    _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setAbortController(null);
  }
};

// Helper function to create abortable delays
function abortableDelay(ms, signal) {
  return new Promise((resolve, reject) => {
    // If already aborted, reject immediately
    if (signal.aborted) {
      reject(new Error("Aborted"));
      return;
    }
    const timeoutId = setTimeout(() => {
      resolve();
    }, ms);

    // Listen for abort signal
    const abortHandler = () => {
      clearTimeout(timeoutId);
      reject(new Error("Aborted"));
    };
    signal.addEventListener("abort", abortHandler, {
      once: true
    });
  });
}

// Enhanced streaming function that integrates workflow component
// Helper function to send messages easily
const addStreamMessage = async (instance, workflowId, stepTitle, data, responseType = "user_defined") => {
  // For the new card system, we don't add individual messages
  // Instead, we let the CardManager handle the steps through the global interface
  if (window.aiSystemInterface && responseType === "user_defined") {
    console.log("Adding step to card manager:", stepTitle, data);
    console.log("aiSystemInterface available:", !!window.aiSystemInterface);
    console.log("addStep function available:", !!window.aiSystemInterface.addStep);
    try {
      window.aiSystemInterface.addStep(stepTitle, data);
      console.log("Step added successfully");
    } catch (error) {
      console.error("Error adding step:", error);
    }
    return;
  } else {
    console.log("Not using card manager - aiSystemInterface:", !!window.aiSystemInterface, "responseType:", responseType);
  }

  // For text messages, still add them normally
  if (responseType === "text") {
    const messageConfig = {
      id: workflowId + stepTitle,
      response_type: "text",
      text: typeof data === "string" ? data : JSON.stringify(data)
    };
    await instance.messaging.addMessage({
      message_options: {
        response_user_profile: _constants__WEBPACK_IMPORTED_MODULE_2__.RESPONSE_USER_PROFILE
      },
      output: {
        generic: [messageConfig]
      }
    });
  }
};
const fetchStreamingData = async (instance, query, action = null) => {
  // Check if we should use fake streaming
  if (USE_FAKE_STREAM) {
    console.log("Using fake stream simulation");
    return simulateFakeStream(instance, query);
  }
  console.log("🚀 Starting new fetchStreamingData with query:", query.substring(0, 50));

  // Create abort controller for this stream
  const abortController = new AbortController();
  _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setAbortController(abortController);
  let fullResponse = "";
  let workflowInitialized = false;
  let workflowId = "workflow_" + generateTimestampId();

  // Set streaming state
  _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setStreaming(true);
  console.log("🎯 Set streaming to true, abort controller set");

  // Add abort listener for debugging
  abortController.signal.addEventListener("abort", () => {
    console.log("🛑 ABORT SIGNAL RECEIVED IN FETCH STREAM!");
  });
  try {
    // Check if already aborted before starting
    if (abortController.signal.aborted) {
      console.log("🛑 Stream aborted before starting");
      return fullResponse;
    }

    // Do not reset the existing UI; we want to preserve prior cards/history

    // Check after reset delay
    if (abortController.signal.aborted) {
      console.log("🛑 Stream aborted after UI reset");
      return fullResponse;
    }

    // First create the workflow component
    console.log("💬 Initializing workflow without adding placeholder chat message");
    workflowInitialized = true;

    // Give a moment for the new CardManager message to mount
    await abortableDelayV2(300, abortController.signal);

    // Check after initialization delay
    if (abortController.signal.aborted) {
      console.log("🛑 Stream aborted after initialization");
      return fullResponse;
    }
    console.log("🌊 Beginning stream connection");

    // Start streaming with abort signal
    await (0,_microsoft_fetch_event_source__WEBPACK_IMPORTED_MODULE_0__.fetchEventSource)("http://localhost:8005/stream", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: query ? JSON.stringify({
        query
      }) : JSON.stringify(action),
      signal: abortController.signal,
      // 🔑 KEY: Pass abort signal to fetchEventSource

      async onopen(response) {
        console.log("🌊 Stream connection opened:", response.status);

        // Check if aborted during connection
        if (abortController.signal.aborted) {
          console.log("🛑 Stream aborted during connection opening");
          return;
        }
        // Intentionally no chat message here to avoid polluting history
      },
      async onmessage(ev) {
        // Check if aborted before processing message
        if (abortController.signal.aborted) {
          console.log("🛑 Stream aborted - skipping message processing");
          return;
        }
        let currentStep = getCurrentStep(ev);
        if (currentStep) {
          let stepTitle = ev.event;
          console.log("⚡ Processing step:", stepTitle);
          await addStreamMessage(instance, workflowId, stepTitle, currentStep, "user_defined");
        }

        // Check if aborted after processing message
        if (abortController.signal.aborted) {
          console.log("🛑 Stream aborted after processing message");
          return;
        }
      },
      async onclose() {
        console.log("🌊 Stream connection closed");
        console.log("🌊 Signal aborted state:", abortController.signal.aborted);
      },
      async onerror(err) {
        console.error("🌊 Stream error:", err);
        console.log("🌊 Error name:", err.name);
        console.log("🌊 Signal aborted:", abortController.signal.aborted);

        // Don't add error message if stream was aborted by user
        if (abortController.signal.aborted) {
          console.log("🛑 Stream error was due to user abort - not adding error message");
          return;
        }

        // Add error step for real errors
        if (workflowInitialized) {
          await addStreamMessage(instance, workflowId, "error", `An error occurred during processing: ${err.message}`, "text");
        }
      }
    });

    // Check if completed successfully or was aborted
    if (abortController.signal.aborted) {
      console.log("🛑 Stream completed due to abort");
    } else {
      console.log("🎉 Stream completed successfully");
    }
    return fullResponse;
  } catch (error) {
    console.log("❌ Caught error in fetchStreamingData:", error);
    console.log("❌ Error name:", error.name);
    console.log("❌ Signal aborted:", abortController.signal.aborted);

    // Handle abort vs real errors
    if (error.name === "AbortError" || error.message === "Aborted" || abortController.signal.aborted) {
      console.log("🛑 Fetch stream was cancelled by user");

      // Add a message indicating the stream was stopped
      if (workflowInitialized) {
        await addStreamMessage(instance, workflowId, "stopped", `<div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 8px; padding: 12px 16px; color: white; text-align: center; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3); margin: 8px 0; display: flex; align-items: center; justify-content: center; gap: 8px;"><div style="font-size: 1.2rem;">⏹</div><div><div style="font-size: 0.9rem; font-weight: 600; margin: 0;">Processing Stopped</div><div style="font-size: 0.75rem; opacity: 0.9; margin: 0;">Stopped by user</div></div></div>`, "text");
      }
      return fullResponse; // Return partial response
    } else {
      console.error("💥 Real error in fetchStreamingData:", error);

      // Add error step if workflow is initialized
      if (workflowInitialized) {
        await addStreamMessage(instance, workflowId, "error", `❌ An error occurred: ${error.message}`, "text");

        // Signal completion to the system on error
        if (window.aiSystemInterface && window.aiSystemInterface.setProcessingComplete) {
          window.aiSystemInterface.setProcessingComplete(true);
        }
      }
      throw error;
    }
  } finally {
    // Always reset streaming state when done
    console.log("🧹 Cleaning up fetch stream state");
    _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setStreaming(false);
    _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.setAbortController(null);
    console.log("🧹 Fetch stream cleanup complete");
  }
};

// Enhanced abortable delay function (same as before but with logging)
function abortableDelayV2(ms, signal) {
  console.log(`⏰ Creating abortable delay for ${ms}ms, signal.aborted:`, signal.aborted);
  return new Promise((resolve, reject) => {
    // If already aborted, reject immediately
    if (signal.aborted) {
      console.log("⏰ Delay rejected immediately - already aborted");
      reject(new Error("Aborted"));
      return;
    }
    const timeoutId = setTimeout(() => {
      console.log("⏰ Delay timeout completed normally");
      resolve();
    }, ms);

    // Listen for abort signal
    const abortHandler = () => {
      console.log("⏰ Delay abort handler called - clearing timeout");
      clearTimeout(timeoutId);
      reject(new Error("Aborted"));
    };
    signal.addEventListener("abort", abortHandler, {
      once: true
    });
    console.log("⏰ Abort listener added to delay");
  });
}
const waitForInterfaceReady = async (timeoutMs = 3000, intervalMs = 100) => {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (window.aiSystemInterface && typeof window.aiSystemInterface.addStep === "function") {
      return;
    }
    await new Promise(r => setTimeout(r, intervalMs));
  }
  console.warn("aiSystemInterface not available after", timeoutMs, "ms");
};
const streamViaBackground = async (instance, query) => {
  // Guard against empty query
  if (!query?.trim()) {
    return;
  }

  // -------------------------------------------------------------
  // Replicate the original workflow UI behaviour (same as in
  // fetchStreamingData) so that incoming agent responses are
  // rendered through the side-panel component.
  // -------------------------------------------------------------

  // Preserve previous cards/history; do not force-reset the UI here

  // 2. Insert an initial user_defined message that hosts our Workflow UI
  const workflowId = "workflow_" + generateTimestampId();

  // For the new card system, we don't need to add the initial message here
  // as it's already handled in customSendMessage
  // await instance.messaging.addMessage({
  //   output: {
  //     generic: [
  //       {
  //         id: workflowId,
  //         response_type: "user_defined",
  //         user_defined: {
  //           user_defined_type: "my_unique_identifier",
  //           text: "Processing your request...",
  //         },
  //       } as any,
  //     },
  //   },
  // });

  // Wait until the workflow component has mounted
  await waitForInterfaceReady();

  // Track whether processing has been stopped
  let isStopped = false;
  const responseID = crypto.randomUUID();
  let accumulatedText = "";

  // We no longer push plain chat chunks for each stream segment because
  // the workflow component renders them in its own UI. Keeping chat
  // payloads suppressed avoids duplicate, unformatted messages.
  const pushPartial = _text => {};
  const pushComplete = _text => {};

  // -------------------------------------------------------------
  // Helper : parse the `content` received from the background into
  // an object compatible with the old fetchEventSource `ev` shape.
  // -------------------------------------------------------------
  const parseSSEContent = raw => {
    let eventName = "Message";
    const dataLines = [];
    raw.split(/\r?\n/).forEach(line => {
      if (line.startsWith("event:")) {
        eventName = line.slice(6).trim();
      } else if (line.startsWith("data:")) {
        dataLines.push(line.slice(5).trim());
      } else if (line.trim().length) {
        // If the line isn't prefixed, treat it as data as well
        dataLines.push(line.trim());
      }
    });
    return {
      event: eventName,
      data: dataLines.join("\n")
    };
  };

  // Add initial step indicating that the connection has been established
  if (window.aiSystemInterface) {
    window.aiSystemInterface.addStep("Connection Established", "Processing request and preparing response...");
  }

  // -------------------------------------------------------------
  // Listener for streaming responses coming back from the background
  // -------------------------------------------------------------
  const listener = message => {
    if (!message || message.source !== "background") return;
    switch (message.type) {
      case "agent_response":
        {
          const rawContent = message.content ?? "";

          // Convert the raw content into an SSE-like event structure so we can
          // reuse the original render logic.
          const ev = parseSSEContent(rawContent);

          // Handle workflow-step visualisation
          if (!isStopped && window.aiSystemInterface && !window.aiSystemInterface.isProcessingStopped()) {
            const currentStep = getCurrentStep(ev);
            if (currentStep) {
              const stepTitle = ev.event;
              if (ev.event === "Stopped") {
                // Graceful stop handling
                window.aiSystemInterface.stopProcessing();
                isStopped = true;
              } else if (!window.aiSystemInterface.hasStepWithTitle(stepTitle)) {
                window.aiSystemInterface.addStep(stepTitle, currentStep);
              }
            }
          }

          // No longer sending plain chat messages – only updating workflow UI
          accumulatedText += ev.data;
          break;
        }
      case "agent_complete":
        {
          // Finalise UI state (no plain chat message)

          if (window.aiSystemInterface && !isStopped) {
            window.aiSystemInterface.setProcessingComplete?.(true);
          }
          window.chrome.runtime.onMessage.removeListener(listener);
          break;
        }
      case "agent_error":
        {
          // Report error in workflow UI
          window.aiSystemInterface?.addStep("Error Occurred", `An error occurred during processing: ${message.message}`);
          if (window.aiSystemInterface && !isStopped) {
            window.aiSystemInterface.setProcessingComplete?.(true);
          }
          window.chrome.runtime.onMessage.removeListener(listener);
          break;
        }
      default:
        break;
    }
  };

  // Register the listener *before* dispatching the query so that no
  // early backend messages are missed.
  window.chrome.runtime.onMessage.addListener(listener);

  // -------------------------------------------------------------
  // Now dispatch the query to the background service-worker. We do
  // NOT await the response here because the background script keeps
  // the promise pending until the stream completes, which would block
  // our execution and cause UI updates to stall.
  // -------------------------------------------------------------

  window.chrome.runtime.sendMessage({
    source: "popup",
    type: "send_agent_query",
    query
  }).then(bgResp => {
    if (bgResp?.type === "error") {
      console.error("Background returned error during dispatch", bgResp);
      window.aiSystemInterface?.addStep("Error Occurred", bgResp.message || "Background error");
      window.aiSystemInterface?.setProcessingComplete?.(true);
    }
  }).catch(err => {
    console.error("Failed to dispatch agent_query", err);
    if (window.aiSystemInterface) {
      window.aiSystemInterface.addStep("Error Occurred", `An error occurred: ${err.message || "Failed to dispatch query"}`);
      window.aiSystemInterface.setProcessingComplete?.(true);
    }
  });
};


/***/ }),

/***/ "../agentic_chat/src/SubAgentsConfig.tsx":
/*!***********************************************!*\
  !*** ../agentic_chat/src/SubAgentsConfig.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubAgentsConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");



function SubAgentsConfig({
  onClose
}) {
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    mode: "supervisor",
    subAgents: [],
    supervisorStrategy: "adaptive",
    availableTools: []
  });
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  const [expandedAgent, setExpandedAgent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [availableApps, setAvailableApps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [appToolsCache, setAppToolsCache] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [loadingApps, setLoadingApps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showAddAgentModal, setShowAddAgentModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [newAgentSource, setNewAgentSource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("direct");
  const [newAgentUrl, setNewAgentUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newAgentName, setNewAgentName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newAgentEnvVars, setNewAgentEnvVars] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [newAgentStreamType, setNewAgentStreamType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("http");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
    loadApps();
  }, []);
  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config/subagents');
      if (response.ok) {
        const data = await response.json();
        const updatedData = {
          ...data,
          subAgents: data.subAgents.map(agent => ({
            ...agent,
            assignedApps: agent.assignedApps || [],
            source: agent.source || {
              type: "direct"
            }
          }))
        };
        setConfig(updatedData);
      }
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };
  const loadApps = async () => {
    setLoadingApps(true);
    try {
      const response = await fetch('/api/apps');
      if (response.ok) {
        const data = await response.json();
        setAvailableApps(data.apps || []);
      }
    } catch (error) {
      console.error("Error loading apps:", error);
    } finally {
      setLoadingApps(false);
    }
  };
  const loadAppTools = async appName => {
    if (appToolsCache[appName]) {
      return appToolsCache[appName];
    }
    try {
      const response = await fetch(`/api/apps/${encodeURIComponent(appName)}/tools`);
      if (response.ok) {
        const data = await response.json();
        const tools = data.tools || [];
        setAppToolsCache(prev => ({
          ...prev,
          [appName]: tools
        }));
        return tools;
      }
    } catch (error) {
      console.error(`Error loading tools for app ${appName}:`, error);
    }
    return [];
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/subagents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  const openAddAgentModal = () => {
    setNewAgentSource("direct");
    setNewAgentUrl("");
    setNewAgentName("");
    setNewAgentEnvVars([]);
    setNewAgentStreamType("http");
    setShowAddAgentModal(true);
  };
  const closeAddAgentModal = () => {
    setShowAddAgentModal(false);
  };
  const addEnvVar = () => {
    setNewAgentEnvVars([...newAgentEnvVars, {
      key: "",
      value: ""
    }]);
  };
  const updateEnvVar = (index, key, value) => {
    const newEnvVars = [...newAgentEnvVars];
    newEnvVars[index] = {
      key,
      value
    };
    setNewAgentEnvVars(newEnvVars);
  };
  const removeEnvVar = index => {
    setNewAgentEnvVars(newAgentEnvVars.filter((_, i) => i !== index));
  };
  const createAgent = () => {
    const sourceConfig = {
      type: newAgentSource
    };
    if (newAgentSource === "a2a" || newAgentSource === "mcp") {
      if (newAgentSource === "a2a") {
        sourceConfig.url = newAgentUrl;
        sourceConfig.name = newAgentName;
      } else {
        sourceConfig.url = newAgentUrl;
        sourceConfig.streamType = newAgentStreamType;
      }
      const envVarsObj = {};
      newAgentEnvVars.forEach(env => {
        if (env.key.trim()) {
          envVarsObj[env.key.trim()] = env.value;
        }
      });
      if (Object.keys(envVarsObj).length > 0) {
        sourceConfig.envVars = envVarsObj;
      }
    }
    const newAgent = {
      id: Date.now().toString(),
      name: newAgentSource === "a2a" && newAgentName ? newAgentName : "New Agent",
      role: "Assistant",
      description: "",
      enabled: true,
      capabilities: [],
      tools: config.availableTools.map(tool => ({
        name: tool,
        enabled: false
      })),
      assignedApps: [],
      policies: [],
      source: sourceConfig
    };
    setConfig({
      ...config,
      subAgents: [...config.subAgents, newAgent]
    });
    closeAddAgentModal();
  };
  const assignApp = async (agentId, appName) => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (!agent) return;
    if (agent.assignedApps.some(a => a.appName === appName)) {
      return;
    }
    const tools = await loadAppTools(appName);
    const newAssignedApp = {
      appName,
      tools: tools.map(t => ({
        name: t.name,
        enabled: true
      }))
    };
    updateAgent(agentId, {
      assignedApps: [...agent.assignedApps, newAssignedApp]
    });
  };
  const unassignApp = (agentId, appName) => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (agent) {
      updateAgent(agentId, {
        assignedApps: agent.assignedApps.filter(a => a.appName !== appName)
      });
    }
  };
  const toggleAppTool = (agentId, appName, toolName) => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (agent) {
      const newAssignedApps = agent.assignedApps.map(app => app.appName === appName ? {
        ...app,
        tools: app.tools.map(t => t.name === toolName ? {
          ...t,
          enabled: !t.enabled
        } : t)
      } : app);
      updateAgent(agentId, {
        assignedApps: newAssignedApps
      });
    }
  };
  const addPolicy = agentId => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (agent) {
      updateAgent(agentId, {
        policies: [...agent.policies, ""]
      });
    }
  };
  const updatePolicy = (agentId, index, value) => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (agent) {
      const newPolicies = [...agent.policies];
      newPolicies[index] = value;
      updateAgent(agentId, {
        policies: newPolicies
      });
    }
  };
  const removePolicy = (agentId, index) => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (agent) {
      const newPolicies = agent.policies.filter((_, i) => i !== index);
      updateAgent(agentId, {
        policies: newPolicies
      });
    }
  };
  const toggleTool = (agentId, toolName) => {
    const agent = config.subAgents.find(a => a.id === agentId);
    if (agent) {
      const newTools = agent.tools.map(t => t.name === toolName ? {
        ...t,
        enabled: !t.enabled
      } : t);
      updateAgent(agentId, {
        tools: newTools
      });
    }
  };
  const updateAgent = (id, updates) => {
    setConfig({
      ...config,
      subAgents: config.subAgents.map(agent => agent.id === id ? {
        ...agent,
        ...updates
      } : agent)
    });
  };
  const removeAgent = id => {
    setConfig({
      ...config,
      subAgents: config.subAgents.filter(agent => agent.id !== id)
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Sub-Agents Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Agent Mode Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Execution Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: config.mode,
    onChange: e => setConfig({
      ...config,
      mode: e.target.value
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "supervisor"
  }, "Supervisor (Multi-Agent)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "single"
  }, "Single Agent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Supervisor mode delegates tasks to specialized sub-agents")), config.mode === "supervisor" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Supervisor Strategy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: config.supervisorStrategy,
    onChange: e => setConfig({
      ...config,
      supervisorStrategy: e.target.value
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "sequential"
  }, "Sequential"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "parallel"
  }, "Parallel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "adaptive"
  }, "Adaptive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "How the supervisor coordinates sub-agents")))), config.mode === "supervisor" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Sub-Agents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-btn",
    onClick: openAddAgentModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }), "Add Agent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sources-list"
  }, config.subAgents.map(agent => {
    const isExpanded = expandedAgent === agent.id;
    const enabledTools = agent.tools.filter(t => t.enabled).length;
    const totalAppTools = agent.assignedApps.reduce((sum, app) => sum + app.tools.filter(t => t.enabled).length, 0);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: agent.id,
      className: "agent-config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "agent-config-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "agent-config-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: agent.enabled,
      onChange: e => updateAgent(agent.id, {
        enabled: e.target.checked
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      value: agent.name,
      onChange: e => updateAgent(agent.id, {
        name: e.target.value
      }),
      className: "agent-config-name",
      placeholder: "Agent Name"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      value: agent.role,
      onChange: e => updateAgent(agent.id, {
        role: e.target.value
      }),
      placeholder: "Role",
      style: {
        width: "120px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "expand-btn",
      onClick: () => setExpandedAgent(isExpanded ? null : agent.id)
    }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 16
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: 16
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "delete-btn",
      onClick: () => removeAgent(agent.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 16
    }))), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "agent-summary"
    }, agent.source && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "agent-summary-item",
      title: `Source: ${agent.source.type.toUpperCase()}${agent.source.url ? ` - ${agent.source.url}` : ''}`
    }, agent.source.type === "direct" ? "Direct" : agent.source.type === "a2a" ? "A2A" : "MCP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "agent-summary-item"
    }, agent.assignedApps.length, " app", agent.assignedApps.length !== 1 ? 's' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "agent-summary-item"
    }, totalAppTools + enabledTools, " tool", totalAppTools + enabledTools !== 1 ? 's' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "agent-summary-item"
    }, agent.policies.length, " polic", agent.policies.length !== 1 ? 'ies' : 'y'))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "agent-config-details"
    }, agent.source && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Source Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "source-info-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "source-info-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Type:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, agent.source.type === "direct" ? "Direct" : agent.source.type === "a2a" ? "A2A Protocol" : "MCP Server")), agent.source.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "source-info-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "URL:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, agent.source.url)), agent.source.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "source-info-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, agent.source.name)), agent.source.streamType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "source-info-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Stream Type:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, agent.source.streamType.toUpperCase())), agent.source.envVars && Object.keys(agent.source.envVars).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "source-info-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Environment Variables:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "env-vars-display"
    }, Object.entries(agent.source.envVars).map(([key, value]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      className: "env-var-display-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, value))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
      value: agent.description,
      onChange: e => updateAgent(agent.id, {
        description: e.target.value
      }),
      placeholder: "What this agent does...",
      rows: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Capabilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      value: agent.capabilities.join(", "),
      onChange: e => updateAgent(agent.id, {
        capabilities: e.target.value.split(",").map(c => c.trim()).filter(c => c)
      }),
      placeholder: "research, code, planning, analysis"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Comma-separated list of capabilities")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Assigned Apps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
      value: "",
      onChange: e => {
        if (e.target.value) {
          assignApp(agent.id, e.target.value);
          e.target.value = "";
        }
      },
      style: {
        width: "200px",
        marginLeft: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: ""
    }, "Select an app to assign..."), availableApps.filter(app => !agent.assignedApps.some(a => a.appName === app.name)).map(app => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: app.name,
      value: app.name
    }, app.name)))), agent.assignedApps.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "policies-empty"
    }, "No apps assigned. Select an app from the dropdown above.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "apps-list"
    }, agent.assignedApps.map(assignedApp => {
      const app = availableApps.find(a => a.name === assignedApp.appName);
      const enabledCount = assignedApp.tools.filter(t => t.enabled).length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: assignedApp.appName,
        className: "app-config-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "app-config-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, assignedApp.appName), app?.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
        style: {
          display: "block",
          color: "#666",
          marginTop: "4px"
        }
      }, app.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "remove-btn",
        onClick: () => unassignApp(agent.id, assignedApp.appName),
        title: "Remove app"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 14
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "app-tools-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group-header",
        style: {
          marginTop: "8px",
          marginBottom: "8px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        style: {
          fontSize: "0.9em",
          margin: 0
        }
      }, "Tools (", enabledCount, "/", assignedApp.tools.length, " enabled)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "tools-grid"
      }, assignedApp.tools.map(tool => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        key: tool.name,
        className: "tool-checkbox-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: tool.enabled,
        onChange: () => toggleAppTool(agent.id, assignedApp.appName, tool.name)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, tool.name))))));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Assign apps and configure which tools from each app this agent can use")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Legacy Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "tools-count-small"
    }, enabledTools, "/", agent.tools.length, " enabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "tools-grid"
    }, agent.tools.map(tool => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      key: tool.name,
      className: "tool-checkbox-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: tool.enabled,
      onChange: () => toggleTool(agent.id, tool.name)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, tool.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Legacy tool configuration (deprecated - use apps above)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Policies (Natural Language)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "add-small-btn",
      onClick: () => addPolicy(agent.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 12
    }), "Add Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "policies-list"
    }, agent.policies.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "policies-empty"
    }, "No policies defined. Add policies to control agent behavior.") : agent.policies.map((policy, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "policy-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
      value: policy,
      onChange: e => updatePolicy(agent.id, index, e.target.value),
      placeholder: "e.g., Always verify information from multiple sources before making decisions",
      rows: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "remove-btn",
      onClick: () => removePolicy(agent.id, index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 14
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Define behavior rules in plain English"))));
  })), config.subAgents.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No sub-agents configured. Click \"Add Agent\" to create one.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))), showAddAgentModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: closeAddAgentModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal add-agent-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Add New Sub-Agent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: closeAddAgentModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Agent Source"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "How to create this agent?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: newAgentSource,
    onChange: e => setNewAgentSource(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "direct"
  }, "Direct (Local Agent)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "a2a"
  }, "A2A Protocol"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "mcp"
  }, "MCP Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, newAgentSource === "direct" && "Create a local agent directly", newAgentSource === "a2a" && "Connect via A2A protocol", newAgentSource === "mcp" && "Connect to an MCP server via HTTP or SSE")), newAgentSource === "a2a" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Agent Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: newAgentName,
    onChange: e => setNewAgentName(e.target.value),
    placeholder: "e.g., research-agent"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Name identifier for the A2A agent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: newAgentUrl,
    onChange: e => setNewAgentUrl(e.target.value),
    placeholder: "e.g., http://localhost:8080"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "A2A protocol endpoint URL"))), newAgentSource === "mcp" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "MCP Server URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: newAgentUrl,
    onChange: e => setNewAgentUrl(e.target.value),
    placeholder: "e.g., http://localhost:8001"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "MCP server endpoint URL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Stream Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: newAgentStreamType,
    onChange: e => setNewAgentStreamType(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "http"
  }, "HTTP (Streamable)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "sse"
  }, "SSE (Server-Sent Events)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Communication protocol for MCP server"))), (newAgentSource === "a2a" || newAgentSource === "mcp") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Environment Variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-small-btn",
    onClick: addEnvVar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 12
  }), "Add Variable")), newAgentEnvVars.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "policies-empty"
  }, "No environment variables. Click \"Add Variable\" to add one.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "env-list"
  }, newAgentEnvVars.map((env, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "env-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: env.key,
    onChange: e => updateEnvVar(index, e.target.value, env.value),
    placeholder: "Variable name",
    style: {
      width: "200px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: env.value,
    onChange: e => updateEnvVar(index, env.key, e.target.value),
    placeholder: "Variable value",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-btn",
    onClick: () => removeEnvVar(index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 14
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Environment variables to pass to the agent"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: closeAddAgentModal
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "save-btn",
    onClick: createAgent,
    disabled: newAgentSource === "a2a" && (!newAgentUrl || !newAgentName) || newAgentSource === "mcp" && !newAgentUrl
  }, "Create Agent")))));
}

/***/ }),

/***/ "../agentic_chat/src/ToolReview.tsx":
/*!******************************************!*\
  !*** ../agentic_chat/src/ToolReview.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToolCallFlowDisplay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/database.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/external-link.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/hash.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/type.js");


function ToolCallFlowDisplay({
  toolData
}) {
  const toolCallData = toolData;
  const getArgIcon = (key, value) => {
    if (typeof value === "number") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "w-3 h-3 text-blue-500"
    });
    if (typeof value === "string") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "w-3 h-3 text-green-500"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "w-3 h-3 text-gray-500"
    });
  };
  const formatArgValue = value => {
    if (typeof value === "string") return `"${value}"`;
    return String(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg shadow-md border p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, toolCallData.name != "run_new_flow" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "w-5 h-5 text-emerald-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-4 h-4 text-emerald-500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-semibold text-gray-800"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "w-4 h-4 text-blue-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium text-blue-800"
  }, "Flow Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-mono text-lg font-semibold text-blue-900 bg-white px-3 py-2 rounded border"
  }, toolCallData.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-4 h-4 text-green-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium text-green-800"
  }, "Inputs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2"
  }, Object.entries(toolCallData.args).map(([key, value]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: key,
    className: "bg-white rounded border p-3 flex items-center gap-3"
  }, getArgIcon(key, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono text-sm font-semibold text-gray-700"
  }, key, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono text-sm text-gray-900 bg-gray-50 px-2 py-1 rounded"
  }, formatArgValue(value)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
  }, typeof value))))), toolCallData.name != "run_new_flow" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between pt-2 border-t border-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-4 h-4 text-emerald-500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm text-gray-600"
  }, "Verified and trusted flow")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-200 border border-blue-200 hover:border-blue-300",
    onClick: () => {
      try {
        window.open("http://localhost:8005/flows/flow.html", "_blank");
      } catch (error) {
        alert("Local server not running. Please start your development server on port 8005.");
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Flow explained"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-3 h-3"
  })))))));
}

/***/ }),

/***/ "../agentic_chat/src/ToolsConfig.tsx":
/*!*******************************************!*\
  !*** ../agentic_chat/src/ToolsConfig.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToolsConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/download.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/upload.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-yaml */ "../node_modules/.pnpm/js-yaml@4.1.1/node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var _ConfigModal_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfigModal.css */ "../agentic_chat/src/ConfigModal.css");




function ToolsConfig({
  onClose
}) {
  const [configData, setConfigData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    services: [],
    mcpServers: {},
    apps: [],
    appTools: {}
  });
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("apps");
  const [saveStatus, setSaveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadConfig();
  }, []);
  const loadConfig = async () => {
    setLoading(true);
    try {
      // Load tools config (includes services and mcpServers)
      const configResponse = await fetch('/api/config/tools');
      let configData = {
        services: [],
        mcpServers: {},
        apps: [],
        appTools: {}
      };
      if (configResponse.ok) {
        const toolsConfig = await configResponse.json();
        configData = {
          ...configData,
          services: toolsConfig.services || [],
          mcpServers: toolsConfig.mcpServers || {}
        };
        console.log('Loaded tools config:', toolsConfig);
      }

      // Load available apps
      const appsResponse = await fetch('/api/apps');
      if (appsResponse.ok) {
        const appsData = await appsResponse.json();
        const apps = appsData.apps || [];
        configData.apps = apps;

        // Load tools for each app
        const appTools = {};
        for (const app of apps) {
          try {
            const toolsResponse = await fetch(`/api/apps/${app.name}/tools`);
            if (toolsResponse.ok) {
              const toolsData = await toolsResponse.json();
              appTools[app.name] = toolsData.tools || [];
            }
          } catch (error) {
            console.warn(`Failed to load tools for app ${app.name}:`, error);
            appTools[app.name] = [];
          }
        }
        configData.appTools = appTools;
      }
      console.log('Final config data:', configData);
      setConfigData(configData);
    } catch (error) {
      console.error("Error loading config:", error);
    } finally {
      setLoading(false);
    }
  };
  const saveConfig = async () => {
    setSaveStatus("saving");
    try {
      const response = await fetch('/api/config/tools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(configData)
      });
      if (response.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch (error) {
      console.error("Error saving config:", error);
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };
  const addMcpServer = () => {
    const serverName = prompt("Enter MCP server name:");
    if (serverName && !configData.mcpServers?.[serverName]) {
      setConfigData({
        ...configData,
        mcpServers: {
          ...configData.mcpServers,
          [serverName]: {
            command: "uv",
            args: [],
            transport: "stdio",
            description: "",
            env: {}
          }
        }
      });
    }
  };
  const removeMcpServer = serverName => {
    const {
      [serverName]: removed,
      ...rest
    } = configData.mcpServers || {};
    setConfigData({
      ...configData,
      mcpServers: rest
    });
  };
  const updateMcpServer = (serverName, field, value) => {
    setConfigData({
      ...configData,
      mcpServers: {
        ...configData.mcpServers,
        [serverName]: {
          ...configData.mcpServers?.[serverName],
          [field]: value
        }
      }
    });
  };
  const addArg = serverName => {
    const currentServer = configData.mcpServers?.[serverName];
    const newArgs = [...(currentServer?.args || []), ""];
    updateMcpServer(serverName, "args", newArgs);
  };
  const updateArg = (serverName, index, value) => {
    const currentServer = configData.mcpServers?.[serverName];
    const newArgs = [...(currentServer?.args || [])];
    newArgs[index] = value;
    updateMcpServer(serverName, "args", newArgs);
  };
  const removeArg = (serverName, index) => {
    const currentServer = configData.mcpServers?.[serverName];
    const newArgs = (currentServer?.args || []).filter((_, i) => i !== index);
    updateMcpServer(serverName, "args", newArgs);
  };
  const addEnvVar = serverName => {
    const key = prompt("Enter environment variable name:");
    if (key) {
      const currentServer = configData.mcpServers?.[serverName];
      updateMcpServer(serverName, "env", {
        ...(currentServer?.env || {}),
        [key]: ""
      });
    }
  };
  const updateEnvVar = (serverName, key, value) => {
    const currentServer = configData.mcpServers?.[serverName];
    updateMcpServer(serverName, "env", {
      ...(currentServer?.env || {}),
      [key]: value
    });
  };
  const removeEnvVar = (serverName, key) => {
    const currentServer = configData.mcpServers?.[serverName];
    const {
      [key]: removed,
      ...rest
    } = currentServer?.env || {};
    updateMcpServer(serverName, "env", rest);
  };
  const exportConfig = () => {
    const yamlStr = js_yaml__WEBPACK_IMPORTED_MODULE_7__["default"].dump(configData);
    const blob = new Blob([yamlStr], {
      type: 'text/yaml'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mcp_servers_config.yaml';
    a.click();
    URL.revokeObjectURL(url);
  };
  const importConfig = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.yaml,.yml';
    input.onchange = async e => {
      const file = e.target.files?.[0];
      if (file) {
        const text = await file.text();
        try {
          const data = js_yaml__WEBPACK_IMPORTED_MODULE_7__["default"].load(text);
          setConfigData(data);
        } catch (error) {
          alert('Failed to parse YAML file');
        }
      }
    };
    input.click();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Tools Configuration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "config-modal-close",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 20
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "apps" ? "active" : ""}`,
    onClick: () => setActiveTab("apps")
  }, "Apps & Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "mcpServers" ? "active" : ""}`,
    onClick: () => setActiveTab("mcpServers")
  }, "MCP Servers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `config-tab ${activeTab === "services" ? "active" : ""}`,
    onClick: () => setActiveTab("services")
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-toolbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "toolbar-btn",
    onClick: importConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  }), "Import YAML"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "toolbar-btn",
    onClick: exportConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 14
  }), "Export YAML")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-content"
  }, activeTab === "apps" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "apps-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Available Apps & Tools"), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "loading-text"
  }, "Loading...")), (configData.apps || []).length === 0 && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No apps available. Make sure the registry service is running.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "apps-grid"
  }, (configData.apps || []).map(app => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: app.name,
    className: "app-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, app.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `app-type ${app.type}`
  }, app.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "app-description"
  }, app.description || "No description available"), app.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "app-url"
  }, app.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-tools"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Available Tools (", (configData.appTools?.[app.name] || []).length, ")"), (configData.appTools?.[app.name] || []).length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "no-tools"
  }, "No tools available") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools-list"
  }, (configData.appTools?.[app.name] || []).map((tool, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "tool-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-name"
  }, tool.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tool-description"
  }, tool.description || "No description"))))))))), activeTab === "mcpServers" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mcp-servers-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "MCP Servers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-btn",
    onClick: addMcpServer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  }), "Add Server")), Object.entries(configData.mcpServers || {}).map(([serverName, server]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: serverName,
    className: "config-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, serverName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "delete-btn",
    onClick: () => removeMcpServer(serverName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 16
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: server.description || "",
    onChange: e => updateMcpServer(serverName, "description", e.target.value),
    rows: 2,
    placeholder: "Server description..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Command"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: server.command || "",
    onChange: e => updateMcpServer(serverName, "command", e.target.value),
    placeholder: "e.g., uv, python, node"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: server.transport || "stdio",
    onChange: e => updateMcpServer(serverName, "transport", e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "stdio"
  }, "stdio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "sse"
  }, "sse")))), server.transport !== "sse" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Arguments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-small-btn",
    onClick: () => addArg(serverName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 12
  }), "Add Arg")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "args-list"
  }, (server.args || []).map((arg, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "arg-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: arg,
    onChange: e => updateArg(serverName, index, e.target.value),
    placeholder: "Argument"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-btn",
    onClick: () => removeArg(serverName, index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 14
  })))))), server.transport === "sse" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: server.url || "",
    onChange: e => updateMcpServer(serverName, "url", e.target.value),
    placeholder: "http://localhost:8000/sse"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Environment Variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-small-btn",
    onClick: () => addEnvVar(serverName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 12
  }), "Add Env")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "env-list"
  }, Object.entries(server.env || {}).map(([key, value]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: key,
    className: "env-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "env-key"
  }, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: value,
    onChange: e => updateEnvVar(serverName, key, e.target.value),
    placeholder: "Value"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-btn",
    onClick: () => removeEnvVar(serverName, key)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 14
  }))))))))), Object.keys(configData.mcpServers || {}).length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No MCP servers configured. Click \"Add Server\" to get started."))), activeTab === "services" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "OpenAPI Services"), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "loading-text"
  }, "Loading...")), (configData.services || []).length === 0 && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No services configured. Services are defined in the YAML configuration file.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services-list"
  }, (configData.services || []).map((serviceObj, index) => {
    // Each service is an object with one key (the service name)
    const serviceName = Object.keys(serviceObj)[0];
    const service = serviceObj[serviceName];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "config-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-card-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, serviceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "service-badge"
    }, "OpenAPI")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "config-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "service-description"
    }, service.description || "No description available")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "OpenAPI URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "service-url"
    }, service.url))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `save-btn ${saveStatus}`,
    onClick: saveConfig,
    disabled: saveStatus === "saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }), saveStatus === "idle" && "Save Changes", saveStatus === "saving" && "Saving...", saveStatus === "success" && "Saved!", saveStatus === "error" && "Error!"))));
}

/***/ }),

/***/ "../agentic_chat/src/VariablePopup.css":
/*!*********************************************!*\
  !*** ../agentic_chat/src/VariablePopup.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablePopup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./VariablePopup.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/VariablePopup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablePopup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablePopup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablePopup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablePopup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/VariablePopup.tsx":
/*!*********************************************!*\
  !*** ../agentic_chat/src/VariablePopup.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "../node_modules/.pnpm/marked@16.3.0/node_modules/marked/lib/marked.esm.js");
/* harmony import */ var _VariablePopup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariablePopup.css */ "../agentic_chat/src/VariablePopup.css");



const VariablePopup = ({
  variable,
  onClose
}) => {
  const handleDownload = () => {
    // Check if variable is a dict type and try to download as JSON
    if (variable.type === 'dict') {
      try {
        // Attempt to parse the value_preview as JSON
        const jsonData = JSON.parse(variable.value_preview);
        const content = JSON.stringify(jsonData, null, 2);
        // Use octet-stream to force the browser to respect the .json extension
        const blob = new Blob([content], {
          type: "application/octet-stream"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${variable.name}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return;
      } catch (error) {
        // If JSON parsing fails, fall back to markdown
        console.warn('Failed to parse dict as JSON, falling back to markdown download:', error);
      }
    }

    // Default to markdown download
    const content = `# Variable: ${variable.name}\n\n**Type:** ${variable.type}\n\n${variable.description ? `**Description:** ${variable.description}\n\n` : ""}**Value:**\n\`\`\`\n${variable.value_preview}\n\`\`\``;
    const blob = new Blob([content], {
      type: "text/markdown"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${variable.name}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const formattedContent = `## ${variable.name}\n\n**Type:** \`${variable.type}\`${variable.count_items ? ` (${variable.count_items} items)` : ""}\n\n${variable.description ? `**Description:** ${variable.description}\n\n` : ""}**Value:**\n\`\`\`\n${variable.value_preview}\n\`\`\``;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variable-popup-overlay",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variable-popup-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variable-popup-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Variable Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variable-popup-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "variable-popup-download-btn",
    onClick: handleDownload,
    title: variable.type === 'dict' ? "Download as JSON" : "Download as Markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8.5 1a.5.5 0 0 0-1 0v8.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M3 13h10a1 1 0 0 0 1-1v-1.5a.5.5 0 0 0-1 0V12H3v-.5a.5.5 0 0 0-1 0V12a1 1 0 0 0 1 1z"
  })), "Download ", variable.type === 'dict' ? 'JSON' : 'MD'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "variable-popup-close-btn",
    onClick: onClose
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variable-popup-body",
    dangerouslySetInnerHTML: {
      __html: (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(formattedContent)
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (VariablePopup);

/***/ }),

/***/ "../agentic_chat/src/VariablesSidebar.css":
/*!************************************************!*\
  !*** ../agentic_chat/src/VariablesSidebar.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablesSidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./VariablesSidebar.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/VariablesSidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablesSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablesSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablesSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_VariablesSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/VariablesSidebar.tsx":
/*!************************************************!*\
  !*** ../agentic_chat/src/VariablesSidebar.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VariablePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VariablePopup */ "../agentic_chat/src/VariablePopup.tsx");
/* harmony import */ var _VariablesSidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariablesSidebar.css */ "../agentic_chat/src/VariablesSidebar.css");



const VariablesSidebar = ({
  variables,
  history = [],
  selectedAnswerId,
  onSelectAnswer
}) => {
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [selectedVariable, setSelectedVariable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const variableKeys = Object.keys(variables);
  console.log('VariablesSidebar render - variableKeys:', variableKeys.length, 'history:', history.length, 'selectedAnswerId:', selectedAnswerId);
  if (variableKeys.length === 0 && history.length === 0) {
    console.log('VariablesSidebar: No variables or history, not rendering');
    return null;
  }

  // Always show sidebar if there's history, even if no current variables
  const shouldShowSidebar = variableKeys.length > 0 || history.length > 0;
  const formatTimestamp = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `variables-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variables-sidebar-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "variables-sidebar-toggle",
    onClick: () => setIsExpanded(!isExpanded),
    title: isExpanded ? "Collapse variables panel" : "Expand variables panel"
  }, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "15 18 9 12 15 6"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "9 18 15 12 9 6"
  }))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variables-sidebar-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "variables-count"
  }, variableKeys.length)), history.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "variables-history-select",
    value: selectedAnswerId || '',
    onChange: e => onSelectAnswer && onSelectAnswer(e.target.value),
    onClick: e => e.stopPropagation(),
    title: "Select which conversation turn to view variables from"
  }, history.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: item.id,
    value: item.id
  }, item.title, " - ", Object.keys(item.variables).length, " variable", Object.keys(item.variables).length !== 1 ? 's' : '', " (", formatTimestamp(item.timestamp), ")"))))), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variables-sidebar-content"
  }, history.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variables-history-info"
  }, "Viewing: ", history.find(h => h.id === selectedAnswerId)?.title || 'Latest turn', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "history-count"
  }, history.length, " turns total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "variables-list"
  }, variableKeys.length === 0 && history.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "no-variables-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No variables in current turn."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Select a previous turn from the dropdown above to view its variables.")) : variableKeys.map(varName => {
    const variable = variables[varName];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: varName,
      className: "variable-item",
      onClick: () => setSelectedVariable({
        name: varName,
        ...variable
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "variable-item-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
      className: "variable-name"
    }, varName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "variable-type"
    }, variable.type)), variable.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "variable-description"
    }, variable.description), variable.count_items !== undefined && variable.count_items > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "variable-meta"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "variable-count"
    }, variable.count_items, " items")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "variable-preview"
    }, variable.value_preview ? variable.value_preview.substring(0, 80) + (variable.value_preview.length > 80 ? "..." : "") : ""));
  })))), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "variables-sidebar-floating-toggle",
    onClick: () => setIsExpanded(true),
    title: "Show variables panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "9 18 15 12 9 6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "variables-floating-count"
  }, variableKeys.length)), selectedVariable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariablePopup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variable: selectedVariable,
    onClose: () => setSelectedVariable(null)
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (VariablesSidebar);

/***/ }),

/***/ "../agentic_chat/src/WorkspacePanel.css":
/*!**********************************************!*\
  !*** ../agentic_chat/src/WorkspacePanel.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WorkspacePanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./WorkspacePanel.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/WorkspacePanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WorkspacePanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WorkspacePanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WorkspacePanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WorkspacePanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/WorkspacePanel.tsx":
/*!**********************************************!*\
  !*** ../agentic_chat/src/WorkspacePanel.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspacePanel: function() { return /* binding */ WorkspacePanel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/download.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/file-text.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/file.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/folder.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "../node_modules/.pnpm/lucide-react@0.525.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _WorkspacePanel_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WorkspacePanel.css */ "../agentic_chat/src/WorkspacePanel.css");



function WorkspacePanel({
  isOpen,
  onToggle,
  highlightedFile
}) {
  const [fileTree, setFileTree] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [expandedFolders, setExpandedFolders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
  const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [deleteConfirmation, setDeleteConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isDragOver, setIsDragOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const loadWorkspaceTree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      setError(null);
      const {
        workspaceService
      } = await __webpack_require__.e(/*! import() */ "agentic_chat_src_workspaceService_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workspaceService */ "../agentic_chat/src/workspaceService.ts"));
      const data = await workspaceService.getWorkspaceTree();
      setFileTree(data.tree || []);
    } catch (err) {
      console.error("Error loading workspace:", err);
      setError("Error loading workspace");
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen) {
      loadWorkspaceTree();
      // Set up polling for live updates
      const interval = setInterval(loadWorkspaceTree, 15000);
      return () => clearInterval(interval);
    }
  }, [isOpen, loadWorkspaceTree]);
  const toggleFolder = path => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };
  const handleFileClick = async file => {
    if (file.type === "directory") {
      toggleFolder(file.path);
      return;
    }

    // Check if it's a text or markdown file
    const textExtensions = ['.txt', '.md', '.json', '.yaml', '.yml', '.log', '.csv', '.html', '.css', '.js', '.ts', '.py'];
    const isTextFile = textExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
    if (!isTextFile) {
      alert("Only text and markdown files can be previewed");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`/api/workspace/file?path=${encodeURIComponent(file.path)}`);
      if (response.ok) {
        const data = await response.json();
        setSelectedFile({
          path: file.path,
          content: data.content,
          name: file.name
        });
      } else {
        alert("Failed to load file");
      }
    } catch (err) {
      console.error("Error loading file:", err);
      alert("Error loading file");
    } finally {
      setLoading(false);
    }
  };
  const handleDownload = async (filePath, fileName) => {
    try {
      const response = await fetch(`/api/workspace/download?path=${encodeURIComponent(filePath)}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert("Failed to download file");
      }
    } catch (err) {
      console.error("Error downloading file:", err);
      alert("Error downloading file");
    }
  };
  const handleDeleteClick = file => {
    setDeleteConfirmation({
      file,
      isOpen: true
    });
  };
  const handleDeleteConfirm = async () => {
    if (!deleteConfirmation) return;
    const {
      file
    } = deleteConfirmation;
    setLoading(true);
    try {
      const response = await fetch(`/api/workspace/file?path=${encodeURIComponent(file.path)}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Refresh the workspace tree after successful deletion
        await loadWorkspaceTree();
        // Close any open file viewer if the deleted file was being viewed
        if (selectedFile && selectedFile.path === file.path) {
          setSelectedFile(null);
        }
      } else {
        alert("Failed to delete file");
      }
    } catch (err) {
      console.error("Error deleting file:", err);
      alert("Error deleting file");
    } finally {
      setLoading(false);
      setDeleteConfirmation(null);
    }
  };
  const handleDeleteCancel = () => {
    setDeleteConfirmation(null);
  };

  // Drag and drop handlers
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer?.types.includes('Files')) {
      setIsDragOver(true);
    }
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    // Only hide if we're actually leaving the component (not entering a child)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDragOver(false);
    }
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = async e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await handleFileUpload(files);
    }
  };
  const handleFileUpload = async files => {
    setLoading(true);
    setError(null);
    try {
      const uploadPromises = files.map(async file => {
        const formData = new FormData();
        formData.append('file', file);

        // Upload to cuga_workspace directory
        const response = await fetch('/api/workspace/upload', {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}: ${response.statusText}`);
        }
        return await response.json();
      });
      await Promise.all(uploadPromises);

      // Refresh the workspace tree after successful uploads
      await loadWorkspaceTree();
    } catch (err) {
      console.error('Error uploading files:', err);
      setError(`Upload failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };
  const renderFileTree = (nodes, level = 0) => {
    return nodes.map(node => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: node.path,
      style: {
        marginLeft: `${level * 16}px`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `file-tree-item ${node.type === "directory" ? "directory" : "file"} ${highlightedFile === node.path ? "highlighted" : ""}`,
      onClick: () => handleFileClick(node)
    }, node.type === "directory" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, expandedFolders.has(node.path) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: 16,
      className: "folder-icon"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 16,
      className: "folder-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 16,
      className: "item-icon"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "folder-icon-spacer"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 16,
      className: "item-icon"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "item-name"
    }, node.name), node.type === "file" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "file-actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "download-icon-btn",
      onClick: e => {
        e.stopPropagation();
        handleDownload(node.path, node.name);
      },
      title: "Download file"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 14
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "delete-icon-btn",
      onClick: e => {
        e.stopPropagation();
        handleDeleteClick(node);
      },
      title: "Delete file"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
      size: 14
    })))), node.type === "directory" && expandedFolders.has(node.path) && node.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "folder-children"
    }, renderFileTree(node.children, level + 1))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `workspace-panel ${isOpen ? "open" : "closed"} ${isDragOver ? "drag-over" : ""}`,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-panel-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-panel-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Workspace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-panel-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "workspace-refresh-btn",
    onClick: loadWorkspaceTree,
    title: "Refresh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "workspace-close-btn",
    onClick: onToggle,
    title: "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-panel-content"
  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: loadWorkspaceTree
  }, "Retry")) : fileTree.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 48,
    className: "empty-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Workspace is empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Files created by agents will appear here")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-tree"
  }, renderFileTree(fileTree)))), !isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "workspace-toggle-btn",
    onClick: onToggle,
    title: "Open Workspace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 18
  })), selectedFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-viewer-overlay",
    onClick: () => setSelectedFile(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-viewer-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-viewer-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-viewer-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, selectedFile.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-viewer-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "file-viewer-btn",
    onClick: () => handleDownload(selectedFile.path, selectedFile.name)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 16
  }), "Download"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "file-viewer-close",
    onClick: () => setSelectedFile(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 18
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "file-viewer-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, selectedFile.content)))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-loading-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-spinner"
  })), isDragOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-drag-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-drag-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-drag-icon"
  }, "\uD83D\uDCC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "workspace-drag-text"
  }, "Drop files here to upload"))), deleteConfirmation?.isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "delete-confirmation-overlay",
    onClick: handleDeleteCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "delete-confirmation-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "delete-confirmation-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 24,
    className: "delete-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Delete File")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "delete-confirmation-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, deleteConfirmation.file.name), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "delete-warning"
  }, "This action cannot be undone.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "delete-confirmation-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "delete-cancel-btn",
    onClick: handleDeleteCancel,
    disabled: loading
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "delete-confirm-btn",
    onClick: handleDeleteConfirm,
    disabled: loading
  }, loading ? "Deleting..." : "Delete")))));
}

/***/ }),

/***/ "../agentic_chat/src/WriteableElementExample.css":
/*!*******************************************************!*\
  !*** ../agentic_chat/src/WriteableElementExample.css ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WriteableElementExample_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./WriteableElementExample.css */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/WriteableElementExample.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WriteableElementExample_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WriteableElementExample_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WriteableElementExample_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_WriteableElementExample_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../agentic_chat/src/action_agent.tsx":
/*!********************************************!*\
  !*** ../agentic_chat/src/action_agent.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AgentThoughtsComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AgentThoughtsComponent({
  agentData
}) {
  const [showFullThoughts, setShowFullThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data for demonstration

  // Use props if provided, otherwise use sample data
  const {
    thoughts,
    next_agent,
    instruction
  } = agentData;
  function getAgentColor(agentName) {
    const colors = {
      ActionAgent: "bg-blue-100 text-blue-800 border-blue-300",
      ValidationAgent: "bg-green-100 text-green-800 border-green-300",
      NavigationAgent: "bg-purple-100 text-purple-800 border-purple-300",
      AnalysisAgent: "bg-yellow-100 text-yellow-800 border-yellow-300",
      TestAgent: "bg-orange-100 text-orange-800 border-orange-300"
    };
    return colors[agentName] || "bg-gray-100 text-gray-800 border-gray-300";
  }
  function getAgentIcon(agentName) {
    const icons = {
      ActionAgent: "🎯",
      QaAgent: "🔍"
    };
    return icons[agentName] || "🤖";
  }
  function truncateThoughts(thoughtsArray, maxLength = 120) {
    const firstThought = thoughtsArray[0] || "";
    if (firstThought.length <= maxLength) return firstThought;
    return firstThought.substring(0, maxLength) + "...";
  }
  function truncateInstruction(instruction, maxLength = 80) {
    if (instruction.length <= maxLength) return instruction;
    return instruction.substring(0, maxLength) + "...";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-base"
  }, "\uD83E\uDD16"), "Agent Workflow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-1 rounded text-xs bg-indigo-100 text-indigo-700"
  }, "Processing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3 p-2 bg-gray-50 rounded border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, getAgentIcon(next_agent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-600"
  }, "Next:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-2 py-1 rounded text-xs font-medium ${getAgentColor(next_agent)}`
  }, next_agent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3 p-2 bg-blue-50 rounded border border-blue-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDCCB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-600 mb-1"
  }, "Current Instruction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-700 leading-relaxed"
  }, truncateInstruction(instruction, 100))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-100 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "Analysis (", thoughts.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullThoughts(!showFullThoughts),
    className: "text-xs text-gray-400 hover:text-gray-600"
  }, showFullThoughts ? "▲" : "▼"))), !showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-400 italic mt-1"
  }, truncateThoughts(thoughts, 80)), showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 space-y-1"
  }, thoughts.map((thought, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-300 mt-0.5 font-mono"
  }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, thought))))))));
}

/***/ }),

/***/ "../agentic_chat/src/action_status_component.tsx":
/*!*******************************************************!*\
  !*** ../agentic_chat/src/action_status_component.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ActionStatusDashboard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ActionStatusDashboard({
  actionData
}) {
  const [showFullThoughts, setShowFullThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data - you can replace this with props

  const {
    thoughts,
    action,
    action_input_shortlisting_agent,
    action_input_coder_agent,
    action_input_conclude_task
  } = actionData;
  function truncateText(text, maxLength = 80) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }
  function getThoughtsSummary() {
    if (thoughts.length === 0) return "No thoughts recorded";
    const firstThought = truncateText(thoughts[0], 100);
    return firstThought;
  }
  function getActionIcon(actionType) {
    switch (actionType) {
      case "CoderAgent":
        return "👨‍💻";
      case "ShortlistingAgent":
        return "📋";
      case "conclude_task":
        return "🎯";
      default:
        return "⚡";
    }
  }
  function getActionColor(actionType) {
    switch (actionType) {
      case "CoderAgent":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "ShortlistingAgent":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "conclude_task":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }

  // Determine which action is active
  const activeAction = action;
  const activeActionInput = action_input_coder_agent || action_input_shortlisting_agent || action_input_conclude_task;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700"
  }, "Active Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-2 py-1 rounded text-xs font-medium ${getActionColor(activeAction)}`
  }, getActionIcon(activeAction), " ", activeAction)), activeActionInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `mb-3 p-2 rounded border ${getActionColor(activeAction)}`
  }, action_input_coder_agent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDC68\u200D\uD83D\uDCBB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium text-purple-700"
  }, "Coder Agent Task")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-purple-600 leading-relaxed mb-2"
  }, action_input_coder_agent.task_description), action_input_coder_agent.context_variables_from_history && action_input_coder_agent.context_variables_from_history.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-purple-600"
  }, "Context:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap gap-1 mt-1"
  }, action_input_coder_agent.context_variables_from_history.slice(0, 3).map((variable, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: index,
    className: "px-1.5 py-0.5 bg-purple-50 text-purple-600 rounded text-xs"
  }, variable)), action_input_coder_agent.context_variables_from_history.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-purple-500"
  }, "+", action_input_coder_agent.context_variables_from_history.length - 3, " more"))), action_input_coder_agent.relevant_apis && action_input_coder_agent.relevant_apis.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-purple-600"
  }, "APIs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap gap-1 mt-1"
  }, action_input_coder_agent.relevant_apis.slice(0, 2).map((api, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: index,
    className: "px-1.5 py-0.5 bg-purple-50 text-purple-600 rounded text-xs"
  }, api.api_name)), action_input_coder_agent.relevant_apis.length > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-purple-500"
  }, "+", action_input_coder_agent.relevant_apis.length - 2, " more")))), action_input_shortlisting_agent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDCCB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium text-blue-700"
  }, "Shortlisting Agent Task")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-blue-600 leading-relaxed"
  }, action_input_shortlisting_agent.task_description)), action_input_conclude_task && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83C\uDFAF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium text-green-700"
  }, "Task Conclusion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-green-600 leading-relaxed"
  }, action_input_conclude_task.final_response))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-3 gap-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `p-2 rounded text-center text-xs ${action_input_coder_agent ? "bg-purple-100 text-purple-700" : "bg-gray-50 text-gray-400"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm mb-1"
  }, "\uD83D\uDC68\u200D\uD83D\uDCBB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-medium"
  }, "Coder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs"
  }, action_input_coder_agent ? "Active" : "Inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `p-2 rounded text-center text-xs ${action_input_shortlisting_agent ? "bg-blue-100 text-blue-700" : "bg-gray-50 text-gray-400"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm mb-1"
  }, "\uD83D\uDCCB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-medium"
  }, "Shortlister"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs"
  }, action_input_shortlisting_agent ? "Active" : "Inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `p-2 rounded text-center text-xs ${action_input_conclude_task ? "bg-green-100 text-green-700" : "bg-gray-50 text-gray-400"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm mb-1"
  }, "\uD83C\uDFAF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-medium"
  }, "Conclude"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs"
  }, action_input_conclude_task ? "Active" : "Inactive"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-100 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "Analysis (", thoughts.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullThoughts(!showFullThoughts),
    className: "text-xs text-gray-400 hover:text-gray-600"
  }, showFullThoughts ? "▲" : "▼"))), !showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-400 italic mt-1"
  }, getThoughtsSummary()), showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 space-y-1"
  }, thoughts.map((thought, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-300 mt-0.5 font-mono"
  }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, thought))))))));
}

/***/ }),

/***/ "../agentic_chat/src/app_analyzer_component.tsx":
/*!******************************************************!*\
  !*** ../agentic_chat/src/app_analyzer_component.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AppAnalyzerComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AppAnalyzerComponent({
  appData
}) {
  const [showAllApps, setShowAllApps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data - you can replace this with props

  function getAppIcon(appName) {
    switch (appName.toLowerCase()) {
      case "gmail":
        return "📧";
      case "phone":
        return "📱";
      case "venmo":
        return "💰";
      case "calendar":
        return "📅";
      case "drive":
        return "📁";
      case "sheets":
        return "📊";
      case "slack":
        return "💬";
      case "spotify":
        return "🎵";
      case "uber":
        return "🚗";
      case "weather":
        return "🌤️";
      default:
        return "🔧";
    }
  }
  function getAppColor(appName) {
    switch (appName.toLowerCase()) {
      case "gmail":
        return "bg-red-100 text-red-700";
      case "phone":
        return "bg-blue-100 text-blue-700";
      case "venmo":
        return "bg-green-100 text-green-700";
      case "calendar":
        return "bg-purple-100 text-purple-700";
      case "drive":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }
  const displayedApps = showAllApps ? appData : appData.slice(0, 4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDD0D"), "App Analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-1 rounded text-xs bg-blue-100 text-blue-700"
  }, appData.length, " apps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap gap-1.5 mb-3"
  }, displayedApps.map((app, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: `flex items-center gap-1.5 px-2 py-1 rounded ${getAppColor(app.name)}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, getAppIcon(app.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium capitalize"
  }, app.name)))), appData.length > 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowAllApps(!showAllApps),
    className: "text-xs text-blue-600 hover:text-blue-800"
  }, showAllApps ? "▲ Less" : `▼ +${appData.length - 4} more`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-gray-500"
  }, "\u2705 Ready to use ", appData.length, " integrated services"))));
}

/***/ }),

/***/ "../agentic_chat/src/coder_agent_output.tsx":
/*!**************************************************!*\
  !*** ../agentic_chat/src/coder_agent_output.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CoderAgentOutput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "../node_modules/.pnpm/react-markdown@10.1.0_@types+react@18.3.24_react@18.3.1/node_modules/react-markdown/lib/index.js");


function CoderAgentOutput({
  coderData
}) {
  const [showFullCode, setShowFullCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showFullOutput, setShowFullOutput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data - you can replace this with props

  const {
    code,
    summary
  } = coderData;
  function getCodeSnippet(fullCode, maxLines = 4) {
    const lines = fullCode.split("\n");
    if (lines.length <= maxLines) return fullCode;
    return lines.slice(0, maxLines).join("\n") + "\n...";
  }
  function truncateOutput(text, maxLength = 400) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }
  const codeLines = code.split("\n").length;
  const outputLength = summary.length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDCBB"), "Coder Agent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-1 rounded text-xs bg-purple-100 text-purple-700"
  }, "Complete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-600"
  }, "Code (", codeLines, " lines)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullCode(!showFullCode),
    className: "text-xs text-purple-600 hover:text-purple-800"
  }, showFullCode ? "▲ Less" : "▼ More")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gray-900 rounded p-2",
    style: {
      overflowX: "scroll"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
    className: "text-green-400 text-xs font-mono"
  }, showFullCode ? code : getCodeSnippet(code)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-600"
  }, "Output (", outputLength, " chars)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullOutput(!showFullOutput),
    className: "text-xs text-green-600 hover:text-green-800"
  }, showFullOutput ? "▲ Less" : "▼ More")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-green-50 rounded p-2 border border-green-200",
    style: {
      overflowY: "scroll"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-green-700 leading-relaxed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1__.Markdown, null, showFullOutput ? summary : truncateOutput(summary))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-3 text-xs text-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uD83D\uDCCA ", codeLines, " lines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uD83D\uDCDD ", outputLength, " chars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uD83C\uDFAF Complete")))));
}

/***/ }),

/***/ "../agentic_chat/src/constants.ts":
/*!****************************************!*\
  !*** ../agentic_chat/src/constants.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESPONSE_USER_PROFILE: function() { return /* binding */ RESPONSE_USER_PROFILE; }
/* harmony export */ });
/* harmony import */ var _carbon_ai_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/ai-chat */ "../node_modules/.pnpm/@carbon+ai-chat@0.5.1_@carbon+icon-helpers@10.65.0_@carbon+icons@11.66.0_@carbon+react@_b713c759c00ec96d0998973803a1d794/node_modules/@carbon/ai-chat/dist/es/chat.AppContainer.js");

const RESPONSE_USER_PROFILE = {
  id: "cuga",
  user_type: _carbon_ai_chat__WEBPACK_IMPORTED_MODULE_0__.U.BOT,
  nickname: "cuga",
  profile_picture_url: "https://avatars.githubusercontent.com/u/230847519?s=48&v=4"
};

/***/ }),

/***/ "../agentic_chat/src/floating/stop_button.tsx":
/*!****************************************************!*\
  !*** ../agentic_chat/src/floating/stop_button.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StopButton: function() { return /* binding */ StopButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StreamManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StreamManager */ "../agentic_chat/src/StreamManager.tsx");
/* harmony import */ var _WriteableElementExample_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WriteableElementExample.css */ "../agentic_chat/src/WriteableElementExample.css");
// StopButton.tsx



const StopButton = ({
  location = "sidebar"
}) => {
  const [isStreaming, setIsStreaming] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const unsubscribe = _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.subscribe(setIsStreaming);
    return unsubscribe;
  }, []);
  const handleStop = async () => {
    await _StreamManager__WEBPACK_IMPORTED_MODULE_1__.streamStateManager.stopStream();
    if (typeof window !== "undefined" && window.aiSystemInterface) {
      try {
        window.aiSystemInterface.stopProcessing?.();
        window.aiSystemInterface.setProcessingComplete?.(true);
      } catch (e) {
        // noop
      }
    }
  };
  if (!isStreaming) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "floating-controls-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
    // className="floating-toggle"
    ,
    style: {
      color: "black",
      border: "#c6c6c6 solid 1px",
      backgroundColor: "white",
      marginLeft: "auto",
      marginRight: "auto",
      opacity: "0.6",
      fontWeight: "400",
      borderRadius: "4px",
      marginBottom: "6px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    },
    onMouseOver: e => {
      e.currentTarget.style.backgroundColor = "black";
      e.currentTarget.style.color = "white";
      e.currentTarget.style.opacity = "1";
    },
    onMouseOut: e => {
      e.currentTarget.style.backgroundColor = "";
      e.currentTarget.style.color = "black";
      e.currentTarget.style.opacity = "0.6";
    }
  }, "Stop Processing"));
};

/***/ }),

/***/ "../agentic_chat/src/generic_component.tsx":
/*!*************************************************!*\
  !*** ../agentic_chat/src/generic_component.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SingleExpandableContent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "../node_modules/.pnpm/react-markdown@10.1.0_@types+react@18.3.24_react@18.3.1/node_modules/react-markdown/lib/index.js");


function SingleExpandableContent({
  title,
  content,
  maxLength = 600
}) {
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data for demonstration
  const sampleTitle = title;
  const sampleContent = content;
  const shouldTruncate = sampleContent.length > maxLength;
  const displayContent = isExpanded || !shouldTruncate ? sampleContent : sampleContent.substring(0, maxLength) + "...";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg shadow-md border p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-bold text-gray-800 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-2xl"
  }, "\uD83D\uDCC4"), sampleTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4",
    style: {
      overflowY: "scroll"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-700 leading-relaxed text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1__.Markdown, null, displayContent))), shouldTruncate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setIsExpanded(!isExpanded),
    className: "px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isExpanded ? "Show less" : "Read more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs"
  }, isExpanded ? "▲" : "▼"))))));
}

/***/ }),

/***/ "../agentic_chat/src/mockApi.ts":
/*!**************************************!*\
  !*** ../agentic_chat/src/mockApi.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USE_FAKE_STREAM: function() { return /* binding */ USE_FAKE_STREAM; },
/* harmony export */   setupMockApi: function() { return /* binding */ setupMockApi; }
/* harmony export */ });
const USE_FAKE_STREAM =  true ? !!false : 0;
const mockWorkspaceTree = {
  tree: [{
    name: "src",
    path: "/workspace/src",
    type: "directory",
    children: [{
      name: "main.py",
      path: "/workspace/src/main.py",
      type: "file"
    }, {
      name: "utils.py",
      path: "/workspace/src/utils.py",
      type: "file"
    }, {
      name: "config.json",
      path: "/workspace/src/config.json",
      type: "file"
    }]
  }, {
    name: "data",
    path: "/workspace/data",
    type: "directory",
    children: [{
      name: "accounts.csv",
      path: "/workspace/data/accounts.csv",
      type: "file"
    }, {
      name: "contacts.txt",
      path: "/workspace/data/contacts.txt",
      type: "file"
    }]
  }, {
    name: "README.md",
    path: "/workspace/README.md",
    type: "file"
  }, {
    name: "requirements.txt",
    path: "/workspace/requirements.txt",
    type: "file"
  }]
};
const mockFileContents = {
  "/workspace/src/main.py": `# Main Application Entry Point
import asyncio
from utils import get_accounts, process_data

async def main():
    """Main application function"""
    print("Starting application...")
    accounts = await get_accounts()
    results = process_data(accounts)
    print(f"Processed {len(results)} accounts")
    return results

if __name__ == "__main__":
    asyncio.run(main())
`,
  "/workspace/src/utils.py": `# Utility Functions
from typing import List, Dict, Any

async def get_accounts() -> List[Dict[str, Any]]:
    """Fetch accounts from the API"""
    # Mock implementation
    return [
        {"name": "Acme Corp", "revenue": 1000000},
        {"name": "Tech Innovations", "revenue": 750000},
        {"name": "Global Solutions", "revenue": 500000},
    ]

def process_data(accounts: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Process account data"""
    return sorted(accounts, key=lambda x: x["revenue"], reverse=True)
`,
  "/workspace/src/config.json": `{
  "api": {
    "endpoint": "https://api.example.com",
    "timeout": 30,
    "retry_count": 3
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "crm_db"
  },
  "features": {
    "enable_caching": true,
    "enable_analytics": true,
    "max_concurrent_requests": 10
  }
}`,
  "/workspace/data/accounts.csv": `name,state,revenue,industry
Acme Corporation,New York,1000000,Technology
Tech Innovations Ltd.,California,750000,Software
Global Solutions Inc.,Texas,500000,Consulting
Pioneer Investments,Massachusetts,450000,Finance
Sunrise Industries,Florida,300000,Manufacturing`,
  "/workspace/data/contacts.txt": `John Doe - john.doe@acme.com - CEO
Jane Smith - jane.smith@techinnovations.com - CTO
Bob Johnson - bob.johnson@globalsolutions.com - VP Sales
Alice Williams - alice.williams@pioneer.com - Director
Charlie Brown - charlie.brown@sunrise.com - Manager`,
  "/workspace/README.md": `# Workspace Project

This is a sample workspace containing various files created by the agent.

## Structure

- \`src/\` - Source code files
  - \`main.py\` - Main application entry point
  - \`utils.py\` - Utility functions
  - \`config.json\` - Configuration settings

- \`data/\` - Data files
  - \`accounts.csv\` - Account information
  - \`contacts.txt\` - Contact details

## Usage

Run the main application:

\`\`\`bash
python src/main.py
\`\`\`

## Requirements

See \`requirements.txt\` for Python dependencies.
`,
  "/workspace/requirements.txt": `aiohttp==3.9.1
requests==2.31.0
pandas==2.1.4
pydantic==2.5.3
python-dotenv==1.0.0
fastapi==0.109.0
uvicorn==0.27.0
`
};
const originalFetch = window.fetch;
function setupMockApi() {
  if (!USE_FAKE_STREAM) {
    return;
  }
  console.log("🎭 Mock API initialized - intercepting workspace API calls");
  window.fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;

    // Intercept workspace tree API
    if (url.includes("/api/workspace/tree")) {
      //   console.log("🎭 Mock: Returning workspace tree");
      await delay(300);
      return new Response(JSON.stringify(mockWorkspaceTree), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    // Intercept workspace file content API
    if (url.includes("/api/workspace/file")) {
      const urlObj = new URL(url, window.location.origin);
      const path = urlObj.searchParams.get("path");
      console.log("🎭 Mock: Returning file content for", path);
      await delay(200);
      if (path && mockFileContents[path]) {
        return new Response(JSON.stringify({
          content: mockFileContents[path]
        }), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else {
        return new Response(JSON.stringify({
          error: "File not found"
        }), {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    }

    // Intercept workspace file download API
    if (url.includes("/api/workspace/download")) {
      const urlObj = new URL(url, window.location.origin);
      const path = urlObj.searchParams.get("path");
      console.log("🎭 Mock: Returning file download for", path);
      await delay(200);
      if (path && mockFileContents[path]) {
        const blob = new Blob([mockFileContents[path]], {
          type: "text/plain"
        });
        return new Response(blob, {
          status: 200,
          headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename="${path.split("/").pop()}"`
          }
        });
      } else {
        return new Response(JSON.stringify({
          error: "File not found"
        }), {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    }

    // Intercept config API endpoints
    if (url.includes("/api/config/")) {
      console.log("🎭 Mock: Returning config response for", url);
      await delay(200);

      // Return empty config for all config endpoints
      const configType = url.split("/api/config/")[1];
      const mockConfigs = {
        memory: {
          enableMemory: true,
          memoryType: "both",
          contextWindow: 4096,
          maxMemoryItems: 100,
          semanticSearch: true,
          autoSummarization: true
        },
        knowledge: {
          sources: [],
          embeddingModel: "text-embedding-3-small",
          chunkSize: 1000,
          chunkOverlap: 200
        },
        tools: {
          mcpServers: {},
          services: []
        },
        subagents: {
          mode: "supervisor",
          subAgents: [],
          supervisorStrategy: "adaptive",
          availableTools: []
        },
        model: {
          provider: "anthropic",
          model: "claude-3-5-sonnet-20241022",
          temperature: 0.7,
          maxTokens: 4096,
          topP: 1.0
        },
        policies: {
          enablePolicies: true,
          intentPolicies: [],
          sopPolicies: [],
          subAgentPolicies: [],
          appPolicies: [],
          strictMode: false,
          logViolations: true
        }
      };
      if (init?.method === "POST") {
        // Save config (just return success)
        return new Response(JSON.stringify({
          success: true
        }), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else {
        // Get config
        const config = mockConfigs[configType] || {};
        return new Response(JSON.stringify(config), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    }

    // For all other requests, use the original fetch
    return originalFetch(input, init);
  };
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize mock API if FAKE_STREAM is enabled
if (USE_FAKE_STREAM) {
  setupMockApi();
}


/***/ }),

/***/ "../agentic_chat/src/qa_agent.tsx":
/*!****************************************!*\
  !*** ../agentic_chat/src/qa_agent.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QaAgentComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function QaAgentComponent({
  qaData
}) {
  const [showFullThoughts, setShowFullThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showFullAnswer, setShowFullAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data for demonstration

  // Use props if provided, otherwise use sample data
  const {
    thoughts,
    name,
    answer
  } = qaData;
  function truncateThoughts(thoughtsArray, maxLength = 120) {
    const firstThought = thoughtsArray[0] || "";
    if (firstThought.length <= maxLength) return firstThought;
    return firstThought.substring(0, maxLength) + "...";
  }
  function truncateAnswer(answer, maxLength = 500) {
    if (answer.length <= maxLength) return answer;
    return answer.substring(0, maxLength) + "...";
  }
  function getAnswerPreview(answer) {
    const truncated = truncateAnswer(answer, 500);
    return truncated;
  }
  function getAnswerIcon(answer) {
    if (answer.length < 50) return "💡";
    if (answer.length < 200) return "📝";
    return "📄";
  }
  function getAnswerColor(answer) {
    if (answer.length < 50) return "bg-green-100 text-green-800 border-green-300";
    if (answer.length < 200) return "bg-blue-100 text-blue-800 border-blue-300";
    return "bg-purple-100 text-purple-800 border-purple-300";
  }
  const isAnswerTruncated = answer.length > 500;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDD0D"), "QA Agent Response"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-1 rounded text-xs bg-emerald-100 text-emerald-700"
  }, "Analysis Complete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "Question:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "font-medium text-gray-800 text-xs bg-gray-50 rounded p-2 border"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3 border rounded p-2 hover:shadow-sm transition-shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, getAnswerIcon(answer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium text-gray-700"
  }, "Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-1.5 py-0.5 rounded text-xs font-medium ${getAnswerColor(answer)}`
  }, answer.length, " chars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, answer.split(" ").length, " words"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-blue-50 border border-blue-200 rounded p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-700 leading-relaxed font-mono whitespace-pre-wrap"
  }, showFullAnswer ? answer : getAnswerPreview(answer)), isAnswerTruncated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullAnswer(!showFullAnswer),
    className: "px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-xs font-medium transition-colors flex items-center gap-1 mx-auto"
  }, showFullAnswer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Show less"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs"
  }, "\u25B2")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Show full answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs"
  }, "\u25BC"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-3 gap-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center p-2 bg-blue-50 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm font-bold text-blue-700"
  }, thoughts.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-blue-600"
  }, "Analysis Steps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center p-2 bg-green-50 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm font-bold text-green-700"
  }, answer.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-green-600"
  }, "Answer Length")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center p-2 bg-purple-50 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm font-bold text-purple-700"
  }, answer.split(" ").length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-purple-600"
  }, "Words"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-100 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "QA Analysis (", thoughts.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullThoughts(!showFullThoughts),
    className: "text-xs text-gray-400 hover:text-gray-600"
  }, showFullThoughts ? "▲" : "▼"))), !showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-400 italic mt-1"
  }, truncateThoughts(thoughts, 80)), showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 space-y-1"
  }, thoughts.map((thought, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-300 mt-0.5 font-mono"
  }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, thought))))))));
}

/***/ }),

/***/ "../agentic_chat/src/shortlister.tsx":
/*!*******************************************!*\
  !*** ../agentic_chat/src/shortlister.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShortlisterComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ShortlisterComponent({
  shortlisterData
}) {
  const [showFullThoughts, setShowFullThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showAllApis, setShowAllApis] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data for demonstration

  // Use props if provided, otherwise use sample data
  const {
    thoughts,
    result
  } = shortlisterData;
  const displayedApis = showAllApis ? result : result.slice(0, 2);
  const remainingCount = result.length - 2;
  function getScoreColor(score) {
    if (score >= 0.95) return "bg-green-100 text-green-800 border-green-300";
    if (score >= 0.9) return "bg-blue-100 text-blue-800 border-blue-300";
    if (score >= 0.8) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  }
  function getScoreIcon(score) {
    if (score >= 0.95) return "🎯";
    if (score >= 0.9) return "✅";
    if (score >= 0.8) return "👍";
    return "📝";
  }
  function truncateApiName(name, maxLength = 30) {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + "...";
  }
  function truncateThoughts(thoughtsArray, maxLength = 120) {
    const firstThought = thoughtsArray[0] || "";
    if (firstThought.length <= maxLength) return firstThought;
    return firstThought.substring(0, maxLength) + "...";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDD0D"), "API Shortlist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-1 rounded text-xs bg-purple-100 text-purple-700"
  }, result.length, " APIs selected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2 mb-3"
  }, displayedApis.map((api, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "border rounded p-2 hover:shadow-sm transition-shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, getScoreIcon(api.relevance_score)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "font-medium text-gray-800 text-xs"
  }, truncateApiName(api.name, 25)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-1.5 py-0.5 rounded text-xs font-medium ${getScoreColor(api.relevance_score)}`
  }, (api.relevance_score * 100).toFixed(0), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "#", index + 1))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed pl-5"
  }, api.reasoning)))), result.length > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowAllApis(!showAllApis),
    className: "px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs font-medium transition-colors flex items-center gap-1 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, showAllApis ? "Show less" : `Show ${remainingCount} more`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs"
  }, showAllApis ? "▲" : "▼"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-3 gap-2 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center p-2 bg-green-50 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm font-bold text-green-700"
  }, result.filter(api => api.relevance_score >= 0.95).length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-green-600"
  }, "High Priority")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center p-2 bg-blue-50 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm font-bold text-blue-700"
  }, (result.reduce((sum, api) => sum + api.relevance_score, 0) / result.length * 100).toFixed(0), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-blue-600"
  }, "Avg Score")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center p-2 bg-purple-50 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm font-bold text-purple-700"
  }, result.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs text-purple-600"
  }, "APIs Found"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-100 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "Analysis (", thoughts.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullThoughts(!showFullThoughts),
    className: "text-xs text-gray-400 hover:text-gray-600"
  }, showFullThoughts ? "▲" : "▼"))), !showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-400 italic mt-1"
  }, truncateThoughts(thoughts, 80)), showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 space-y-1"
  }, thoughts.map((thought, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-300 mt-0.5 font-mono"
  }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, thought))))))));
}

/***/ }),

/***/ "../agentic_chat/src/task_decomposition.tsx":
/*!**************************************************!*\
  !*** ../agentic_chat/src/task_decomposition.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TaskDecompositionComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TaskDecompositionComponent({
  decompositionData
}) {
  const [showFullThoughts, setShowFullThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Extract data from props
  const {
    thoughts,
    task_decomposition
  } = decompositionData;
  function getAppIcon(appName) {
    switch (appName?.toLowerCase()) {
      case "gmail":
        return "📧";
      case "phone":
        return "📱";
      case "venmo":
        return "💰";
      case "calendar":
        return "📅";
      case "drive":
        return "📁";
      case "sheets":
        return "📊";
      case "slack":
        return "💬";
      default:
        return "🔧";
    }
  }
  function getAppColor(appName) {
    switch (appName?.toLowerCase()) {
      case "gmail":
        return "bg-red-100 text-red-800 border-red-200";
      case "phone":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "venmo":
        return "bg-green-100 text-green-800 border-green-200";
      case "calendar":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "drive":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }
  function getStepNumber(index) {
    return String(index + 1).padStart(2, "0");
  }
  function truncateThoughts(text, maxLength = 120) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83D\uDCCB"), "Task Breakdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-1 rounded text-xs bg-blue-100 text-blue-700"
  }, task_decomposition.length, " steps planned")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2 mb-3"
  }, task_decomposition.map((task, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs"
  }, getStepNumber(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 bg-gray-50 rounded p-2 border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-2 py-0.5 rounded text-xs font-medium ${getAppColor(task.app)}`
  }, getAppIcon(task.app), " ", task.app), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-1.5 py-0.5 bg-white rounded text-xs text-gray-600 border"
  }, task.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-700 leading-relaxed"
  }, task.task)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-100 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "Analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullThoughts(!showFullThoughts),
    className: "text-xs text-gray-400 hover:text-gray-600"
  }, showFullThoughts ? "▲" : "▼"))), !showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-400 italic mt-1"
  }, truncateThoughts(thoughts, 80)), showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 space-y-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, thoughts))))));
}

/***/ }),

/***/ "../agentic_chat/src/task_status_component.tsx":
/*!*****************************************************!*\
  !*** ../agentic_chat/src/task_status_component.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TaskStatusDashboard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TaskStatusDashboard({
  taskData
}) {
  const [showFullThoughts, setShowFullThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Sample data - you can replace this with props

  const {
    thoughts,
    subtasks_progress,
    next_subtask,
    next_subtask_type,
    next_subtask_app,
    conclude_task,
    conclude_final_answer
  } = taskData;
  const total = subtasks_progress.length;
  const completed = subtasks_progress.filter(status => status === "completed").length;
  const progressPercentage = completed / total * 100;
  function getStatusIcon(status) {
    if (status === "completed") return "✅";
    if (status === "in-progress") return "🔄";
    if (status === "not-started") return "⏳";
    return "❓";
  }
  function getAppIcon(app) {
    if (!app) return "🔧";
    const appLower = app.toLowerCase();
    if (appLower === "gmail") return "📧";
    if (appLower === "calendar") return "📅";
    if (appLower === "drive") return "📁";
    if (appLower === "sheets") return "📊";
    return "🔧";
  }
  function getTypeColor(type) {
    if (type === "api") return "bg-blue-100 text-blue-800";
    if (type === "analysis") return "bg-purple-100 text-purple-800";
    if (type === "calculation") return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  }
  function truncateText(text, maxLength = 80) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  // Create a summary of thoughts
  function getThoughtsSummary() {
    if (thoughts.length === 0) return "No thoughts recorded";
    const firstThought = truncateText(thoughts[0], 100);
    return firstThought;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-lg border border-gray-200 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-medium text-gray-700"
  }, "Task Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-2 py-1 rounded text-xs font-medium ${conclude_task ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`
  }, conclude_task ? "Complete" : "Active")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3 p-2 bg-gray-50 rounded border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-600"
  }, "Subtasks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, completed, "/", total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 bg-gray-200 rounded-full h-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-green-500 h-1.5 rounded-full transition-all duration-300",
    style: {
      width: `${progressPercentage}%`
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-1"
  }, subtasks_progress.map((status, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: index,
    className: "text-sm hover:scale-110 transition-transform cursor-pointer",
    title: `Task ${index + 1}: ${status.replace("-", " ")}`
  }, getStatusIcon(status)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3 p-2 bg-blue-50 rounded border border-blue-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83C\uDFAF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-600"
  }, "Next:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `px-1.5 py-0.5 rounded text-xs ${getTypeColor(next_subtask_type)}`
  }, next_subtask_type), next_subtask_app && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center gap-1 px-1.5 py-0.5 bg-white rounded text-xs text-gray-600 border"
  }, getAppIcon(next_subtask_app), " ", next_subtask_app)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-700 leading-relaxed pl-5"
  }, next_subtask)), conclude_final_answer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3 p-2 bg-green-50 rounded border border-green-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "\uD83C\uDF89"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-green-700 font-medium"
  }, "Result")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-green-600"
  }, conclude_final_answer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-100 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-500"
  }, "Analysis (", thoughts.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowFullThoughts(!showFullThoughts),
    className: "text-xs text-gray-400 hover:text-gray-600"
  }, showFullThoughts ? "▲" : "▼"))), !showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-400 italic mt-1"
  }, getThoughtsSummary()), showFullThoughts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 space-y-1"
  }, thoughts.map((thought, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-300 mt-0.5 font-mono"
  }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, thought))))))));
}

/***/ }),

/***/ "../agentic_chat/src/workspaceThrottle.ts":
/*!************************************************!*\
  !*** ../agentic_chat/src/workspaceThrottle.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Global fetch interceptor to enforce throttling on workspace API calls
// This is a safety net to catch any direct fetch calls that bypass the service

let lastWorkspaceApiCall = 0;
const MIN_INTERVAL = 3000; // 3 seconds

// Store the original fetch
const originalFetch = window.fetch;

// Override fetch globally
window.fetch = function (...args) {
  const [resource] = args;
  const url = typeof resource === 'string' ? resource : resource.url;

  // Check if this is a workspace tree API call
  if (url.includes('/api/workspace/tree')) {
    const now = Date.now();
    const timeSinceLastCall = now - lastWorkspaceApiCall;

    // If called too soon, reject the request
    if (timeSinceLastCall < MIN_INTERVAL) {
      const remainingTime = MIN_INTERVAL - timeSinceLastCall;
      console.warn(`⚠️ Workspace API throttled! Request blocked. ` + `Last call was ${timeSinceLastCall}ms ago. ` + `Minimum interval is ${MIN_INTERVAL}ms. ` + `Wait ${remainingTime}ms before next call.`);

      // Return a rejected promise with a clear error
      return Promise.reject(new Error(`Workspace API call throttled. Wait ${remainingTime}ms before retrying.`));
    }

    // Update last call time
    lastWorkspaceApiCall = now;
    console.log(`✅ Workspace API call allowed (${timeSinceLastCall}ms since last call)`);
  }

  // Call original fetch
  return originalFetch.apply(this, args);
};
 // Make this a module

/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/AppLayout.css":
/*!************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/AppLayout.css ***!
  \************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-layout {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  background: linear-gradient(359deg, #e7f2ff, #ffffff);\n}\n\n.main-layout {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 42px;\n  padding-left: 20%;\n  padding-right: 20%;\n}\n\n@media (max-width: 1200px) {\n  .main-layout {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n\n@media (max-width: 768px) {\n  .main-layout {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n\n@media (max-width: 640px) {\n  .main-layout {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\n.chat-container {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  border-radius: 8px;\n}\n\n\n.chat-container .fullScreen {\n  height: 100%;\n  width: 100%;\n}\n\n/* Ensure chat content doesn't overflow */\n.chat-container > * {\n  max-width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/AppLayout.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,qDAAqD;AACvD;;AAEA;EACE,aAAa;EACb,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;AACF;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;;AAGA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,yCAAyC;AACzC;EACE,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb","sourcesContent":[".app-layout {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  background: linear-gradient(359deg, #e7f2ff, #ffffff);\n}\n\n.main-layout {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 42px;\n  padding-left: 20%;\n  padding-right: 20%;\n}\n\n@media (max-width: 1200px) {\n  .main-layout {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n\n@media (max-width: 768px) {\n  .main-layout {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n\n@media (max-width: 640px) {\n  .main-layout {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\n.chat-container {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  border-radius: 8px;\n}\n\n\n.chat-container .fullScreen {\n  height: 100%;\n  width: 100%;\n}\n\n/* Ensure chat content doesn't overflow */\n.chat-container > * {\n  max-width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CardManager.css":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CardManager.css ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Card Manager Styles */\n.card-manager {\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  border-radius: 12px;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  margin: 16px 0;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.card-manager.animating {\n  transform: scale(1.02);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n.card-header {\n  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);\n  color: white;\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.card-header::before {\n  content: '';\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n  transform: rotate(45deg);\n  animation: shimmer 3s infinite;\n}\n\n@keyframes shimmer {\n  0% { transform: translateX(-100%) rotate(45deg); }\n  100% { transform: translateX(100%) rotate(45deg); }\n}\n\n.card-title h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.card-title h3::before {\n  content: '🤖';\n  font-size: 20px;\n}\n\n.step-counter {\n  font-size: 12px;\n  opacity: 0.9;\n  margin-top: 2px;\n  font-weight: 400;\n}\n\n.card-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.history-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n}\n\n.history-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n.card-content {\n  padding: 20px;\n  background: white;\n  min-height: 100px;\n}\n\n.step-item {\n  margin-bottom: 16px;\n  opacity: 0;\n  transform: translateY(20px);\n  animation: slideInUp 0.5s ease forwards;\n}\n\n.step-item.new-step {\n  animation: slideInUp 0.5s ease forwards, highlightPulse 2s ease 0.5s;\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes highlightPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1);\n  }\n}\n\n.card-footer {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  color: white;\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #d1fae5;\n}\n\n.completion-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.new-query-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n}\n\n.new-query-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n/* History Modal Styles */\n.history-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.history-modal {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  max-width: 600px;\n  width: 90%;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: slideInModal 0.3s ease;\n}\n\n@keyframes slideInModal {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n.history-header {\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  color: white;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.history-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.history-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.clear-history-button,\n.close-history-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n}\n\n.clear-history-button:hover,\n.close-history-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.close-history-button {\n  padding: 6px;\n  font-size: 16px;\n  line-height: 1;\n}\n\n.history-content {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.no-history {\n  text-align: center;\n  color: #6b7280;\n  font-style: italic;\n  padding: 40px 20px;\n}\n\n.history-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 12px;\n  background: #f9fafb;\n  transition: all 0.2s ease;\n}\n\n.history-card:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n\n.history-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.history-card-title {\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n}\n\n.history-card-meta {\n  font-size: 12px;\n  color: #6b7280;\n}\n\n.history-card-preview {\n  margin-bottom: 12px;\n}\n\n.history-step-preview {\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 4px;\n  padding-left: 8px;\n  border-left: 2px solid #e5e7eb;\n}\n\n.history-step-more {\n  font-size: 11px;\n  color: #9ca3af;\n  font-style: italic;\n  padding-left: 8px;\n  border-left: 2px solid #e5e7eb;\n}\n\n.restore-card-button {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.restore-card-button:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n}\n\n/* In-Place Card Transitions */\n.current-step-container {\n  position: relative;\n  overflow: hidden;\n  min-height: 200px;\n  transition: min-height 0.3s ease-in-out;\n}\n\n/* No container animation – instant switch */\n\n.component-container.current-step {\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n  border-color: #3b82f6;\n  position: relative;\n  overflow: hidden;\n}\n\n/* Loading step with sliding border animation */\n/* Shared loading border lives on the persistent container so it continues across swaps */\n.current-step-container.loading-border::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #3b82f6, #06b6d4, transparent);\n  animation: borderSlide 2.5s ease-in-out infinite;\n  z-index: 1;\n}\n\n@keyframes borderSlide {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n\n@keyframes borderSlideReverse {\n  0% {\n    right: -100%;\n  }\n  100% {\n    right: 100%;\n  }\n}\n\n/* No appear animation */\n\n/* Non-current steps rendered only in reasoning list; no fade */\n.component-container:not(.current-step) {}\n\n/* Reasoning Process Collapse Animation */\n.reasoning-section {\n  transition: all 0.5s ease-in-out;\n}\n\n.reasoning-content {\n  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n.reasoning-content.collapsed {\n  max-height: 0;\n  opacity: 0;\n}\n\n.reasoning-content.expanded {\n  max-height: 2000px;\n  opacity: 1;\n}\n\n/* Step Fade Transitions */\n.step-fade-enter {\n  opacity: 0;\n  transform: translateY(20px);\n}\n\n.step-fade-enter-active {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n}\n\n.step-fade-exit {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.step-fade-exit-active {\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n}\n\n/* Enhanced Card Hover Effects */\n.component-container:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease;\n}\n\n.component-container.current-step:hover {\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);\n}\n\n/* Smooth Loading Animation */\n.loading-shimmer {\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n\n/* Responsive Design */\n@media (max-width: 640px) {\n  .card-header {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n  \n  .card-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  \n  .history-modal {\n    width: 95%;\n    margin: 20px;\n  }\n  \n  .card-footer {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  \n  .new-query-button {\n    width: 100%;\n  }\n  \n  .current-step-container.loading-border::before,\n  .current-step-container.loading-border::after {\n    display: none;\n  }\n  \n  .current-step-container {\n    min-height: 150px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/CardManager.css"],"names":[],"mappings":"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","sourcesContent":["/* Card Manager Styles */\n.card-manager {\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  border-radius: 12px;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  margin: 16px 0;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.card-manager.animating {\n  transform: scale(1.02);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n.card-header {\n  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);\n  color: white;\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.card-header::before {\n  content: '';\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n  transform: rotate(45deg);\n  animation: shimmer 3s infinite;\n}\n\n@keyframes shimmer {\n  0% { transform: translateX(-100%) rotate(45deg); }\n  100% { transform: translateX(100%) rotate(45deg); }\n}\n\n.card-title h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.card-title h3::before {\n  content: '🤖';\n  font-size: 20px;\n}\n\n.step-counter {\n  font-size: 12px;\n  opacity: 0.9;\n  margin-top: 2px;\n  font-weight: 400;\n}\n\n.card-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.history-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n}\n\n.history-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n.card-content {\n  padding: 20px;\n  background: white;\n  min-height: 100px;\n}\n\n.step-item {\n  margin-bottom: 16px;\n  opacity: 0;\n  transform: translateY(20px);\n  animation: slideInUp 0.5s ease forwards;\n}\n\n.step-item.new-step {\n  animation: slideInUp 0.5s ease forwards, highlightPulse 2s ease 0.5s;\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes highlightPulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1);\n  }\n}\n\n.card-footer {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  color: white;\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #d1fae5;\n}\n\n.completion-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.new-query-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n}\n\n.new-query-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n/* History Modal Styles */\n.history-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.history-modal {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  max-width: 600px;\n  width: 90%;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: slideInModal 0.3s ease;\n}\n\n@keyframes slideInModal {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n.history-header {\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  color: white;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.history-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.history-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.clear-history-button,\n.close-history-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n}\n\n.clear-history-button:hover,\n.close-history-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.close-history-button {\n  padding: 6px;\n  font-size: 16px;\n  line-height: 1;\n}\n\n.history-content {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.no-history {\n  text-align: center;\n  color: #6b7280;\n  font-style: italic;\n  padding: 40px 20px;\n}\n\n.history-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 12px;\n  background: #f9fafb;\n  transition: all 0.2s ease;\n}\n\n.history-card:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n\n.history-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.history-card-title {\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n}\n\n.history-card-meta {\n  font-size: 12px;\n  color: #6b7280;\n}\n\n.history-card-preview {\n  margin-bottom: 12px;\n}\n\n.history-step-preview {\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 4px;\n  padding-left: 8px;\n  border-left: 2px solid #e5e7eb;\n}\n\n.history-step-more {\n  font-size: 11px;\n  color: #9ca3af;\n  font-style: italic;\n  padding-left: 8px;\n  border-left: 2px solid #e5e7eb;\n}\n\n.restore-card-button {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.restore-card-button:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n}\n\n/* In-Place Card Transitions */\n.current-step-container {\n  position: relative;\n  overflow: hidden;\n  min-height: 200px;\n  transition: min-height 0.3s ease-in-out;\n}\n\n/* No container animation – instant switch */\n\n.component-container.current-step {\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n  border-color: #3b82f6;\n  position: relative;\n  overflow: hidden;\n}\n\n/* Loading step with sliding border animation */\n/* Shared loading border lives on the persistent container so it continues across swaps */\n.current-step-container.loading-border::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #3b82f6, #06b6d4, transparent);\n  animation: borderSlide 2.5s ease-in-out infinite;\n  z-index: 1;\n}\n\n@keyframes borderSlide {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n\n@keyframes borderSlideReverse {\n  0% {\n    right: -100%;\n  }\n  100% {\n    right: 100%;\n  }\n}\n\n/* No appear animation */\n\n/* Non-current steps rendered only in reasoning list; no fade */\n.component-container:not(.current-step) {}\n\n/* Reasoning Process Collapse Animation */\n.reasoning-section {\n  transition: all 0.5s ease-in-out;\n}\n\n.reasoning-content {\n  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n.reasoning-content.collapsed {\n  max-height: 0;\n  opacity: 0;\n}\n\n.reasoning-content.expanded {\n  max-height: 2000px;\n  opacity: 1;\n}\n\n/* Step Fade Transitions */\n.step-fade-enter {\n  opacity: 0;\n  transform: translateY(20px);\n}\n\n.step-fade-enter-active {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n}\n\n.step-fade-exit {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.step-fade-exit-active {\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n}\n\n/* Enhanced Card Hover Effects */\n.component-container:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease;\n}\n\n.component-container.current-step:hover {\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);\n}\n\n/* Smooth Loading Animation */\n.loading-shimmer {\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n\n/* Responsive Design */\n@media (max-width: 640px) {\n  .card-header {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n  \n  .card-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  \n  .history-modal {\n    width: 95%;\n    margin: 20px;\n  }\n  \n  .card-footer {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  \n  .new-query-button {\n    width: 100%;\n  }\n  \n  .current-step-container.loading-border::before,\n  .current-step-container.loading-border::after {\n    display: none;\n  }\n  \n  .current-step-container {\n    min-height: 150px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/ConfigHeader.css":
/*!***************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/ConfigHeader.css ***!
  \***************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".config-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  height: 48px;\n  flex-shrink: 0;\n}\n\n.config-header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: white;\n}\n\n.config-header-icon {\n  opacity: 0.9;\n  width: 18px;\n  height: 18px;\n}\n\n.config-header-title {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n\n.config-header-buttons {\n  display: flex;\n  gap: 8px;\n}\n\n.config-header-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 6px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n  white-space: nowrap;\n}\n\n.config-header-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.config-header-btn:active {\n  transform: translateY(0);\n}\n\n.config-header-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: rgba(255, 255, 255, 0.08);\n}\n\n.config-header-btn:disabled:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n/* Mobile responsiveness */\n@media (max-width: 1024px) {\n  .config-header {\n    padding: 8px 12px;\n    height: 44px;\n  }\n\n  .config-header-buttons {\n    gap: 6px;\n  }\n\n  .config-header-btn {\n    padding: 6px 10px;\n    font-size: 12px;\n  }\n\n  .config-header-title {\n    font-size: 13px;\n  }\n}\n\n@media (max-width: 768px) {\n  .config-header {\n    padding: 8px 10px;\n    height: 44px;\n  }\n\n  .config-header-buttons {\n    gap: 4px;\n  }\n\n  .config-header-btn {\n    padding: 6px 8px;\n    font-size: 11px;\n    min-width: 32px;\n  }\n\n  /* Hide text labels on very small screens, keep icons only */\n  .config-header-btn span {\n    display: none;\n  }\n\n  .config-header-btn {\n    padding: 8px;\n    justify-content: center;\n    min-width: 36px;\n    min-height: 36px;\n  }\n\n  .config-header-title {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 480px) {\n  .config-header {\n    padding: 6px 8px;\n    height: 40px;\n  }\n\n  .config-header-left {\n    gap: 6px;\n  }\n\n  .config-header-icon {\n    width: 16px;\n    height: 16px;\n  }\n\n  .config-header-title {\n    font-size: 11px;\n  }\n\n  .config-header-btn {\n    padding: 6px;\n    min-width: 32px;\n    min-height: 32px;\n  }\n}\n\n/* Touch-friendly improvements */\n@media (hover: none) and (pointer: coarse) {\n  .config-header-btn {\n    min-height: 44px;\n    min-width: 44px;\n    padding: 10px;\n  }\n\n  .config-header-btn:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n}\n\n/* Prevent text selection on mobile */\n@media (max-width: 768px) {\n  .config-header-btn {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n}\n\n/* Mobile Menu Styles */\n.mobile-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding-top: 40px;\n  padding-right: 10px;\n}\n\n.mobile-menu {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  width: 280px;\n  max-height: calc(100vh - 60px);\n  overflow-y: auto;\n  animation: slideInFromRight 0.3s ease-out;\n}\n\n@keyframes slideInFromRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.mobile-menu-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n\n.mobile-menu-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.mobile-menu-close {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n\n.mobile-menu-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.mobile-menu-content {\n  padding: 8px 0;\n}\n\n.mobile-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 20px;\n  background: none;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  color: #374151;\n  font-size: 16px;\n  font-weight: 500;\n  transition: background 0.2s;\n  border-bottom: 1px solid #f3f4f6;\n}\n\n.mobile-menu-item:hover {\n  background: #f8fafc;\n}\n\n.mobile-menu-item:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  color: #9ca3af;\n}\n\n.mobile-menu-item:disabled:hover {\n  background: transparent;\n}\n\n.mobile-menu-item:last-child {\n  border-bottom: none;\n}\n\n.mobile-menu-item span {\n  flex: 1;\n}\n\n/* Mobile menu button specific styles */\n.mobile-menu-btn {\n  min-width: 44px !important;\n  min-height: 44px !important;\n  padding: 10px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/ConfigHeader.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,6DAA6D;EAC7D,iDAAiD;EACjD,wCAAwC;EACxC,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,qCAAqC;EACrC,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;EACrC,sCAAsC;EACtC,wCAAwC;AAC1C;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,sCAAsC;AACxC;;AAEA,0BAA0B;AAC1B;EACE;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,gBAAgB;IAChB,eAAe;IACf,eAAe;EACjB;;EAEA,4DAA4D;EAC5D;IACE,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;EAClB;AACF;;AAEA,gCAAgC;AAChC;EACE;IACE,gBAAgB;IAChB,eAAe;IACf,aAAa;EACf;;EAEA;IACE,oCAAoC;EACtC;AACF;;AAEA,qCAAqC;AACrC;EACE;IACE,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;EACnB;AACF;;AAEA,uBAAuB;AACvB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,8BAA8B;EAC9B,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,yCAAyC;EACzC,YAAY;EACZ,8BAA8B;EAC9B,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,gCAAgC;EAChC,6DAA6D;EAC7D,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA,uCAAuC;AACvC;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,wBAAwB;EACxB,wBAAwB;EACxB,8BAA8B;EAC9B,kCAAkC;AACpC","sourcesContent":[".config-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  height: 48px;\n  flex-shrink: 0;\n}\n\n.config-header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: white;\n}\n\n.config-header-icon {\n  opacity: 0.9;\n  width: 18px;\n  height: 18px;\n}\n\n.config-header-title {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n\n.config-header-buttons {\n  display: flex;\n  gap: 8px;\n}\n\n.config-header-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 6px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  backdrop-filter: blur(10px);\n  white-space: nowrap;\n}\n\n.config-header-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.config-header-btn:active {\n  transform: translateY(0);\n}\n\n.config-header-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: rgba(255, 255, 255, 0.08);\n}\n\n.config-header-btn:disabled:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n/* Mobile responsiveness */\n@media (max-width: 1024px) {\n  .config-header {\n    padding: 8px 12px;\n    height: 44px;\n  }\n\n  .config-header-buttons {\n    gap: 6px;\n  }\n\n  .config-header-btn {\n    padding: 6px 10px;\n    font-size: 12px;\n  }\n\n  .config-header-title {\n    font-size: 13px;\n  }\n}\n\n@media (max-width: 768px) {\n  .config-header {\n    padding: 8px 10px;\n    height: 44px;\n  }\n\n  .config-header-buttons {\n    gap: 4px;\n  }\n\n  .config-header-btn {\n    padding: 6px 8px;\n    font-size: 11px;\n    min-width: 32px;\n  }\n\n  /* Hide text labels on very small screens, keep icons only */\n  .config-header-btn span {\n    display: none;\n  }\n\n  .config-header-btn {\n    padding: 8px;\n    justify-content: center;\n    min-width: 36px;\n    min-height: 36px;\n  }\n\n  .config-header-title {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 480px) {\n  .config-header {\n    padding: 6px 8px;\n    height: 40px;\n  }\n\n  .config-header-left {\n    gap: 6px;\n  }\n\n  .config-header-icon {\n    width: 16px;\n    height: 16px;\n  }\n\n  .config-header-title {\n    font-size: 11px;\n  }\n\n  .config-header-btn {\n    padding: 6px;\n    min-width: 32px;\n    min-height: 32px;\n  }\n}\n\n/* Touch-friendly improvements */\n@media (hover: none) and (pointer: coarse) {\n  .config-header-btn {\n    min-height: 44px;\n    min-width: 44px;\n    padding: 10px;\n  }\n\n  .config-header-btn:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n}\n\n/* Prevent text selection on mobile */\n@media (max-width: 768px) {\n  .config-header-btn {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n}\n\n/* Mobile Menu Styles */\n.mobile-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding-top: 40px;\n  padding-right: 10px;\n}\n\n.mobile-menu {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  width: 280px;\n  max-height: calc(100vh - 60px);\n  overflow-y: auto;\n  animation: slideInFromRight 0.3s ease-out;\n}\n\n@keyframes slideInFromRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.mobile-menu-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n\n.mobile-menu-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.mobile-menu-close {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n\n.mobile-menu-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.mobile-menu-content {\n  padding: 8px 0;\n}\n\n.mobile-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 20px;\n  background: none;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  color: #374151;\n  font-size: 16px;\n  font-weight: 500;\n  transition: background 0.2s;\n  border-bottom: 1px solid #f3f4f6;\n}\n\n.mobile-menu-item:hover {\n  background: #f8fafc;\n}\n\n.mobile-menu-item:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  color: #9ca3af;\n}\n\n.mobile-menu-item:disabled:hover {\n  background: transparent;\n}\n\n.mobile-menu-item:last-child {\n  border-bottom: none;\n}\n\n.mobile-menu-item span {\n  flex: 1;\n}\n\n/* Mobile menu button specific styles */\n.mobile-menu-btn {\n  min-width: 44px !important;\n  min-height: 44px !important;\n  padding: 10px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/ConfigModal.css":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/ConfigModal.css ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".config-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n  animation: fadeIn 0.2s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.config-modal {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 900px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  animation: slideUp 0.3s ease;\n}\n\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.config-modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.config-modal-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.config-modal-close {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.config-modal-close:hover {\n  background: #f3f4f6;\n  color: #1f2937;\n}\n\n.config-modal-tabs {\n  display: flex;\n  gap: 4px;\n  padding: 12px 24px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.config-tab {\n  padding: 8px 16px;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.config-tab:hover {\n  color: #1f2937;\n}\n\n.config-tab.active {\n  color: #667eea;\n  border-bottom-color: #667eea;\n}\n\n.config-modal-toolbar {\n  display: flex;\n  gap: 8px;\n  padding: 12px 24px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.toolbar-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.toolbar-btn:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n\n.config-modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.section-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #667eea;\n  border: none;\n  border-radius: 6px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.add-btn:hover {\n  background: #5568d3;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n\n.config-card {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n\n.config-card h3 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.config-card h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #374151;\n}\n\n.config-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.config-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n\n.form-group small {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: -2px;\n}\n\n.form-group input[type=\"text\"],\n.form-group input[type=\"number\"],\n.form-group input[type=\"password\"],\n.form-group select,\n.form-group textarea {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #1f2937;\n  background: white;\n  transition: all 0.2s ease;\n}\n\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n\n.form-group input[type=\"range\"] {\n  width: 100%;\n}\n\n.form-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.add-small-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  color: #374151;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.add-small-btn:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n\n.args-list,\n.env-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.arg-item,\n.env-item {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.arg-item input {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 13px;\n}\n\n.env-item {\n  background: white;\n  padding: 8px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.env-key {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4b5563;\n  min-width: 120px;\n  font-family: monospace;\n}\n\n.env-item input {\n  flex: 1;\n  padding: 4px 8px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 13px;\n}\n\n.remove-btn,\n.delete-btn {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.remove-btn:hover,\n.delete-btn:hover {\n  background: #fee2e2;\n}\n\n.sources-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.source-item {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n}\n\n.source-header {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.source-name {\n  flex: 1;\n  font-weight: 500;\n}\n\n.source-details {\n  padding-left: 28px;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6b7280;\n}\n\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.config-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.cancel-btn {\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.cancel-btn:hover {\n  background: #f3f4f6;\n}\n\n.save-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #667eea;\n  border: none;\n  border-radius: 6px;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.save-btn:hover {\n  background: #5568d3;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n\n.save-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.save-btn.success {\n  background: #10b981;\n}\n\n.save-btn.error {\n  background: #ef4444;\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.checkbox-label input[type=\"checkbox\"] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.checkbox-label span {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1f2937;\n}\n\n/* Agent Config Card Styles */\n.agent-config-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n\n.agent-config-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.agent-config-header {\n  background: #f9fafb;\n  padding: 12px;\n}\n\n.agent-config-top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.agent-config-name {\n  flex: 1;\n  font-weight: 600;\n}\n\n.expand-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n\n.expand-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n\n.agent-summary {\n  display: flex;\n  gap: 12px;\n  margin-top: 8px;\n  padding-left: 28px;\n}\n\n.agent-summary-item {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 3px 8px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.agent-config-details {\n  padding: 16px;\n  border-top: 1px solid #e5e7eb;\n  background: white;\n}\n\n.tools-count-small {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.tools-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 8px;\n  padding: 12px;\n  background: #f9fafb;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.tool-checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid #e5e7eb;\n}\n\n.tool-checkbox-label:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n\n.tool-checkbox-label input[type=\"checkbox\"] {\n  cursor: pointer;\n}\n\n.tool-checkbox-label span {\n  font-size: 12px;\n  color: #374151;\n  user-select: none;\n}\n\n.policies-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.policies-empty {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12px;\n  background: #f9fafb;\n  border-radius: 6px;\n  border: 1px dashed #e5e7eb;\n}\n\n.policy-item {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  background: #f9fafb;\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s;\n}\n\n.policy-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n\n.policy-item textarea {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #1f2937;\n  background: white;\n  resize: vertical;\n  min-height: 60px;\n  font-family: inherit;\n  line-height: 1.5;\n}\n\n.policy-item textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n\n.policy-item .remove-btn {\n  flex-shrink: 0;\n  margin-top: 8px;\n}\n\n.add-small-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.add-small-btn:hover {\n  background: #5568d3;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n}\n\n.add-small-btn:active {\n  transform: translateY(1px);\n}\n\n.form-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.apps-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 12px;\n}\n\n.app-config-section {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  transition: all 0.2s;\n}\n\n.app-config-section:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n\n.app-config-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n\n.app-config-header strong {\n  font-size: 14px;\n  color: #1f2937;\n  display: block;\n}\n\n.app-tools-section {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #e5e7eb;\n}\n\n.add-agent-modal {\n  max-width: 600px;\n}\n\n.source-info-card {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 8px;\n}\n\n.source-info-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  align-items: flex-start;\n}\n\n.source-info-row:last-child {\n  margin-bottom: 0;\n}\n\n.source-info-row strong {\n  min-width: 140px;\n  font-size: 12px;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.source-info-row span {\n  font-size: 12px;\n  color: #1f2937;\n  flex: 1;\n}\n\n.env-vars-display {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n\n.env-var-display-item {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  font-size: 11px;\n  font-family: monospace;\n  background: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.env-var-display-item code {\n  color: #1f2937;\n  background: #f3f4f6;\n  padding: 2px 4px;\n  border-radius: 3px;\n}\n\n.env-var-display-item span {\n  color: #6b7280;\n}\n\n.autonomy-slider-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n\n.autonomy-icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: -8px;\n}\n\n.autonomy-label-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n\n.autonomy-value {\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.autonomy-description {\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n.autonomy-slider {\n  width: 100%;\n  height: 8px;\n  border-radius: 4px;\n  outline: none;\n  appearance: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.autonomy-slider::-webkit-slider-thumb {\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid currentColor;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.autonomy-slider::-webkit-slider-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\n.autonomy-slider::-moz-range-thumb {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid currentColor;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.autonomy-slider::-moz-range-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\n.autonomy-markers {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  margin-top: -4px;\n}\n\n.confirmation-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n.confirmation-grid .checkbox-label {\n  padding: 12px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.confirmation-grid .checkbox-label:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n\n.confirmation-grid .checkbox-label input {\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n.confirmation-grid .checkbox-label div {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.confirmation-grid .checkbox-label span {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.confirmation-grid .checkbox-label small {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: normal;\n}\n\n.intervention-rules-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.intervention-rule-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n\n.intervention-rule-item:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n\n.intervention-rule-item input[type=\"checkbox\"] {\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.intervention-rule-item .rule-text {\n  flex: 1;\n  font-size: 13px;\n  color: #1f2937;\n  line-height: 1.5;\n}\n\n.intervention-rule-item .rule-text.disabled {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n\n.intervention-rule-item .remove-btn {\n  flex-shrink: 0;\n}\n\n.adaptive-learning-info {\n  padding: 12px 16px;\n  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);\n  border-left: 4px solid #3b82f6;\n  border-radius: 6px;\n  margin: 12px 0;\n}\n\n.adaptive-learning-info .info-text {\n  margin: 0;\n  font-size: 13px;\n  color: #1e40af;\n  line-height: 1.6;\n}\n\n.range-labels {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.range-labels small {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.learning-examples {\n  margin-top: 16px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.learning-examples h4 {\n  margin: 0 0 12px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.learning-bullets {\n  margin: 0;\n  padding-left: 20px;\n  list-style: none;\n}\n\n.learning-bullets li {\n  position: relative;\n  font-size: 12px;\n  line-height: 1.6;\n  color: #4b5563;\n  margin-bottom: 8px;\n  padding-left: 8px;\n}\n\n.learning-bullets li:before {\n  content: \"→\";\n  position: absolute;\n  left: -12px;\n  color: #667eea;\n  font-weight: bold;\n}\n\n.learning-bullets li:last-child {\n  margin-bottom: 0;\n}\n\n.learning-bullets li strong {\n  color: #1f2937;\n  font-weight: 600;\n}\n\n/* Apps & Tools Section */\n.apps-section {\n  padding: 20px 0;\n}\n\n.apps-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 20px;\n}\n\n.app-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  background: #fafbfc;\n  transition: border-color 0.2s;\n}\n\n.app-card:hover {\n  border-color: #cbd5e1;\n}\n\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.app-header h4 {\n  margin: 0;\n  color: #1e293b;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.app-type {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.app-type.api {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n\n.app-description {\n  color: #64748b;\n  font-size: 14px;\n  margin: 8px 0;\n  line-height: 1.4;\n}\n\n.app-url {\n  color: #6366f1;\n  font-size: 13px;\n  margin: 4px 0;\n  font-family: monospace;\n}\n\n.app-tools h5 {\n  margin: 16px 0 8px 0;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.no-tools {\n  color: #9ca3af;\n  font-style: italic;\n  font-size: 13px;\n}\n\n.tools-list {\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n.tool-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 8px 12px;\n  margin: 4px 0;\n  background: white;\n  border: 1px solid #f1f5f9;\n  border-radius: 6px;\n  gap: 12px;\n}\n\n.tool-name {\n  font-weight: 500;\n  color: #1e293b;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.tool-description {\n  color: #64748b;\n  font-size: 12px;\n  line-height: 1.4;\n  flex: 1;\n}\n\n.loading-text {\n  color: #64748b;\n  font-style: italic;\n  font-size: 14px;\n}\n\n/* Services Section */\n.services-section {\n  padding: 20px 0;\n}\n\n.services-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.service-badge {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  text-transform: uppercase;\n  background: #dcfce7;\n  color: #166534;\n}\n\n.service-description {\n  color: #374151;\n  font-size: 14px;\n  margin: 0;\n  line-height: 1.5;\n  background: white;\n  padding: 12px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.service-url {\n  color: #6366f1;\n  font-size: 13px;\n  margin: 0;\n  font-family: monospace;\n  background: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  word-break: break-all;\n}\n\n/* Mobile styles */\n@media (max-width: 768px) {\n  .config-modal {\n    width: 95%;\n    max-height: 90vh;\n  }\n\n  .config-modal-content {\n    padding: 16px;\n  }\n\n  .config-form {\n    gap: 12px;\n  }\n\n  .form-group {\n    margin-bottom: 12px;\n  }\n\n  .apps-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .app-card {\n    padding: 12px;\n  }\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/ConfigModal.css"],"names":[],"mappings":"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","sourcesContent":[".config-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n  animation: fadeIn 0.2s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.config-modal {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 900px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  animation: slideUp 0.3s ease;\n}\n\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.config-modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.config-modal-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.config-modal-close {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.config-modal-close:hover {\n  background: #f3f4f6;\n  color: #1f2937;\n}\n\n.config-modal-tabs {\n  display: flex;\n  gap: 4px;\n  padding: 12px 24px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.config-tab {\n  padding: 8px 16px;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.config-tab:hover {\n  color: #1f2937;\n}\n\n.config-tab.active {\n  color: #667eea;\n  border-bottom-color: #667eea;\n}\n\n.config-modal-toolbar {\n  display: flex;\n  gap: 8px;\n  padding: 12px 24px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.toolbar-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.toolbar-btn:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n\n.config-modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.section-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #667eea;\n  border: none;\n  border-radius: 6px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.add-btn:hover {\n  background: #5568d3;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n\n.config-card {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n\n.config-card h3 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.config-card h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #374151;\n}\n\n.config-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.config-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n\n.form-group small {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: -2px;\n}\n\n.form-group input[type=\"text\"],\n.form-group input[type=\"number\"],\n.form-group input[type=\"password\"],\n.form-group select,\n.form-group textarea {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #1f2937;\n  background: white;\n  transition: all 0.2s ease;\n}\n\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n\n.form-group input[type=\"range\"] {\n  width: 100%;\n}\n\n.form-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.add-small-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  color: #374151;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.add-small-btn:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n\n.args-list,\n.env-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.arg-item,\n.env-item {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.arg-item input {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 13px;\n}\n\n.env-item {\n  background: white;\n  padding: 8px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.env-key {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4b5563;\n  min-width: 120px;\n  font-family: monospace;\n}\n\n.env-item input {\n  flex: 1;\n  padding: 4px 8px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 13px;\n}\n\n.remove-btn,\n.delete-btn {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.remove-btn:hover,\n.delete-btn:hover {\n  background: #fee2e2;\n}\n\n.sources-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.source-item {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n}\n\n.source-header {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.source-name {\n  flex: 1;\n  font-weight: 500;\n}\n\n.source-details {\n  padding-left: 28px;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6b7280;\n}\n\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.config-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.cancel-btn {\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.cancel-btn:hover {\n  background: #f3f4f6;\n}\n\n.save-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #667eea;\n  border: none;\n  border-radius: 6px;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.save-btn:hover {\n  background: #5568d3;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n\n.save-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.save-btn.success {\n  background: #10b981;\n}\n\n.save-btn.error {\n  background: #ef4444;\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.checkbox-label input[type=\"checkbox\"] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.checkbox-label span {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1f2937;\n}\n\n/* Agent Config Card Styles */\n.agent-config-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n\n.agent-config-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.agent-config-header {\n  background: #f9fafb;\n  padding: 12px;\n}\n\n.agent-config-top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.agent-config-name {\n  flex: 1;\n  font-weight: 600;\n}\n\n.expand-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n\n.expand-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n\n.agent-summary {\n  display: flex;\n  gap: 12px;\n  margin-top: 8px;\n  padding-left: 28px;\n}\n\n.agent-summary-item {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 3px 8px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.agent-config-details {\n  padding: 16px;\n  border-top: 1px solid #e5e7eb;\n  background: white;\n}\n\n.tools-count-small {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.tools-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 8px;\n  padding: 12px;\n  background: #f9fafb;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.tool-checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid #e5e7eb;\n}\n\n.tool-checkbox-label:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n\n.tool-checkbox-label input[type=\"checkbox\"] {\n  cursor: pointer;\n}\n\n.tool-checkbox-label span {\n  font-size: 12px;\n  color: #374151;\n  user-select: none;\n}\n\n.policies-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.policies-empty {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12px;\n  background: #f9fafb;\n  border-radius: 6px;\n  border: 1px dashed #e5e7eb;\n}\n\n.policy-item {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  background: #f9fafb;\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s;\n}\n\n.policy-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n\n.policy-item textarea {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #1f2937;\n  background: white;\n  resize: vertical;\n  min-height: 60px;\n  font-family: inherit;\n  line-height: 1.5;\n}\n\n.policy-item textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n\n.policy-item .remove-btn {\n  flex-shrink: 0;\n  margin-top: 8px;\n}\n\n.add-small-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.add-small-btn:hover {\n  background: #5568d3;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n}\n\n.add-small-btn:active {\n  transform: translateY(1px);\n}\n\n.form-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.apps-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 12px;\n}\n\n.app-config-section {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  transition: all 0.2s;\n}\n\n.app-config-section:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n\n.app-config-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n\n.app-config-header strong {\n  font-size: 14px;\n  color: #1f2937;\n  display: block;\n}\n\n.app-tools-section {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #e5e7eb;\n}\n\n.add-agent-modal {\n  max-width: 600px;\n}\n\n.source-info-card {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 8px;\n}\n\n.source-info-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  align-items: flex-start;\n}\n\n.source-info-row:last-child {\n  margin-bottom: 0;\n}\n\n.source-info-row strong {\n  min-width: 140px;\n  font-size: 12px;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.source-info-row span {\n  font-size: 12px;\n  color: #1f2937;\n  flex: 1;\n}\n\n.env-vars-display {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n\n.env-var-display-item {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  font-size: 11px;\n  font-family: monospace;\n  background: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.env-var-display-item code {\n  color: #1f2937;\n  background: #f3f4f6;\n  padding: 2px 4px;\n  border-radius: 3px;\n}\n\n.env-var-display-item span {\n  color: #6b7280;\n}\n\n.autonomy-slider-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n\n.autonomy-icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: -8px;\n}\n\n.autonomy-label-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n\n.autonomy-value {\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.autonomy-description {\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n.autonomy-slider {\n  width: 100%;\n  height: 8px;\n  border-radius: 4px;\n  outline: none;\n  appearance: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.autonomy-slider::-webkit-slider-thumb {\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid currentColor;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.autonomy-slider::-webkit-slider-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\n.autonomy-slider::-moz-range-thumb {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid currentColor;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.autonomy-slider::-moz-range-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\n.autonomy-markers {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  margin-top: -4px;\n}\n\n.confirmation-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n.confirmation-grid .checkbox-label {\n  padding: 12px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.confirmation-grid .checkbox-label:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n\n.confirmation-grid .checkbox-label input {\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n.confirmation-grid .checkbox-label div {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.confirmation-grid .checkbox-label span {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.confirmation-grid .checkbox-label small {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: normal;\n}\n\n.intervention-rules-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.intervention-rule-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n\n.intervention-rule-item:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n\n.intervention-rule-item input[type=\"checkbox\"] {\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.intervention-rule-item .rule-text {\n  flex: 1;\n  font-size: 13px;\n  color: #1f2937;\n  line-height: 1.5;\n}\n\n.intervention-rule-item .rule-text.disabled {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n\n.intervention-rule-item .remove-btn {\n  flex-shrink: 0;\n}\n\n.adaptive-learning-info {\n  padding: 12px 16px;\n  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);\n  border-left: 4px solid #3b82f6;\n  border-radius: 6px;\n  margin: 12px 0;\n}\n\n.adaptive-learning-info .info-text {\n  margin: 0;\n  font-size: 13px;\n  color: #1e40af;\n  line-height: 1.6;\n}\n\n.range-labels {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.range-labels small {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.learning-examples {\n  margin-top: 16px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.learning-examples h4 {\n  margin: 0 0 12px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.learning-bullets {\n  margin: 0;\n  padding-left: 20px;\n  list-style: none;\n}\n\n.learning-bullets li {\n  position: relative;\n  font-size: 12px;\n  line-height: 1.6;\n  color: #4b5563;\n  margin-bottom: 8px;\n  padding-left: 8px;\n}\n\n.learning-bullets li:before {\n  content: \"→\";\n  position: absolute;\n  left: -12px;\n  color: #667eea;\n  font-weight: bold;\n}\n\n.learning-bullets li:last-child {\n  margin-bottom: 0;\n}\n\n.learning-bullets li strong {\n  color: #1f2937;\n  font-weight: 600;\n}\n\n/* Apps & Tools Section */\n.apps-section {\n  padding: 20px 0;\n}\n\n.apps-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 20px;\n}\n\n.app-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  background: #fafbfc;\n  transition: border-color 0.2s;\n}\n\n.app-card:hover {\n  border-color: #cbd5e1;\n}\n\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.app-header h4 {\n  margin: 0;\n  color: #1e293b;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.app-type {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.app-type.api {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n\n.app-description {\n  color: #64748b;\n  font-size: 14px;\n  margin: 8px 0;\n  line-height: 1.4;\n}\n\n.app-url {\n  color: #6366f1;\n  font-size: 13px;\n  margin: 4px 0;\n  font-family: monospace;\n}\n\n.app-tools h5 {\n  margin: 16px 0 8px 0;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.no-tools {\n  color: #9ca3af;\n  font-style: italic;\n  font-size: 13px;\n}\n\n.tools-list {\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n.tool-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 8px 12px;\n  margin: 4px 0;\n  background: white;\n  border: 1px solid #f1f5f9;\n  border-radius: 6px;\n  gap: 12px;\n}\n\n.tool-name {\n  font-weight: 500;\n  color: #1e293b;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.tool-description {\n  color: #64748b;\n  font-size: 12px;\n  line-height: 1.4;\n  flex: 1;\n}\n\n.loading-text {\n  color: #64748b;\n  font-style: italic;\n  font-size: 14px;\n}\n\n/* Services Section */\n.services-section {\n  padding: 20px 0;\n}\n\n.services-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.service-badge {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  text-transform: uppercase;\n  background: #dcfce7;\n  color: #166534;\n}\n\n.service-description {\n  color: #374151;\n  font-size: 14px;\n  margin: 0;\n  line-height: 1.5;\n  background: white;\n  padding: 12px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.service-url {\n  color: #6366f1;\n  font-size: 13px;\n  margin: 0;\n  font-family: monospace;\n  background: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  word-break: break-all;\n}\n\n/* Mobile styles */\n@media (max-width: 768px) {\n  .config-modal {\n    width: 95%;\n    max-height: 90vh;\n  }\n\n  .config-modal-content {\n    padding: 16px;\n  }\n\n  .config-form {\n    gap: 12px;\n  }\n\n  .form-group {\n    margin-bottom: 12px;\n  }\n\n  .apps-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .app-card {\n    padding: 12px;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CustomChat.css":
/*!*************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CustomChat.css ***!
  \*************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".custom-chat-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  background: transparent;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.custom-chat-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #ffffff;\n  z-index: 10;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.chat-header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.chat-header-title {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.chat-restart-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  color: #64748b;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.chat-restart-btn:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #475569;\n}\n\n.custom-chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 100%;\n}\n\n@media (max-width: 640px) {\n  .custom-chat-messages {\n    padding: 12px 8px;\n    gap: 12px;\n  }\n}\n\n.message {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  animation: fadeIn 0.3s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.message-user {\n  flex-direction: row-reverse;\n}\n\n.message-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #f1f5f9;\n  color: #64748b;\n  overflow: hidden;\n}\n\n.bot-avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.message-user .message-avatar {\n  background: #3b82f6;\n  color: white;\n}\n\n.message-content {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 12px;\n  /* background: #f8fafc; */\n  color: #1e293b;\n  font-size: 14px;\n  line-height: 1.6;\n  max-width: min(70%, 800px);\n  word-wrap: break-word;\n  box-sizing: border-box;\n}\n\n@media (max-width: 640px) {\n  .message-content {\n    padding: 10px 12px;\n    font-size: 13px;\n    max-width: 85%;\n  }\n}\n\n.message-user .message-content {\n  flex: 0 1 auto;\n  background: #e5e7eb;\n  color: #1e293b;\n  max-width: min(60%, 650px);\n  width: fit-content;\n  border: 1px solid #d1d5db;\n}\n\n@media (max-width: 640px) {\n  .message-user .message-content {\n    max-width: 80%;\n  }\n}\n\n.message-content p {\n  margin: 0;\n}\n\n.message-content h1,\n.message-content h2,\n.message-content h3 {\n  margin: 0 0 8px 0;\n}\n\n.message-content code {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: 'Courier New', monospace;\n  font-size: 0.9em;\n}\n\n.message-user .message-content code {\n  background: rgba(0, 0, 0, 0.08);\n  color: #1e293b;\n}\n\n.message-content pre {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 12px;\n  border-radius: 6px;\n  overflow-x: auto;\n  margin: 8px 0;\n}\n\n.message-user .message-content pre {\n  background: rgba(0, 0, 0, 0.06);\n  border: 1px solid #d1d5db;\n}\n\n.card-manager-wrapper {\n  margin-top: 8px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.message-card-content {\n  background: transparent;\n  padding: 0;\n  max-width: min(85%, 1000px);\n}\n\n.custom-chat-input-area {\n  padding: 12px 16px;\n  border-top: 1px solid #e2e8f0;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n@media (max-width: 640px) {\n  .custom-chat-input-area {\n    padding: 8px 12px;\n  }\n}\n\n.chat-input-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 8px 12px;\n}\n\n@media (max-width: 640px) {\n  .chat-input-container {\n    padding: 6px 8px;\n    gap: 6px;\n  }\n}\n\n.textarea-wrapper {\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.chat-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #1e293b;\n  font-family: inherit;\n  padding: 8px 0;\n}\n\n.chat-input::placeholder {\n  color: #94a3b8;\n}\n\n.chat-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.chat-send-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.chat-send-btn:hover:not(:disabled) {\n  background: #2563eb;\n  transform: scale(1.05);\n}\n\n.chat-send-btn:disabled {\n  background: #cbd5e1;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.chat-send-btn:active:not(:disabled) {\n  transform: scale(0.95);\n}\n\n.simple-file-autocomplete {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  right: 0;\n  margin-bottom: 8px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 400px;\n  overflow: hidden;\n  animation: slideUpFade 0.2s ease;\n}\n\n@keyframes slideUpFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.simple-file-autocomplete-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 8px 8px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.simple-file-autocomplete-header .file-count {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n}\n\n.simple-file-autocomplete-list {\n  max-height: 350px;\n  overflow-y: auto;\n  padding: 4px;\n}\n\n.simple-file-autocomplete-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  margin-bottom: 2px;\n}\n\n.simple-file-autocomplete-item:hover,\n.simple-file-autocomplete-item.selected {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n}\n\n.simple-file-autocomplete-item.selected {\n  border-left: 3px solid #667eea;\n  padding-left: 7px;\n}\n\n.simple-file-autocomplete-item .file-icon {\n  flex-shrink: 0;\n  color: #667eea;\n}\n\n.simple-file-autocomplete-item .file-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.simple-file-autocomplete-item .file-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.simple-file-autocomplete-item .file-path {\n  font-size: 11px;\n  color: #6b7280;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.simple-file-autocomplete-footer {\n  padding: 6px 12px;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  border-radius: 0 0 8px 8px;\n}\n\n.simple-file-autocomplete-footer .hint {\n  font-size: 10px;\n  color: #9ca3af;\n  font-style: italic;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.custom-chat-input-area {\n  position: relative;\n}\n\n.file-badges-overlay {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 0;\n  min-height: 0;\n}\n\n.file-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: default;\n  transition: all 0.2s;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n  position: relative;\n}\n\n.file-badge:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);\n}\n\n.file-badge::after {\n  content: attr(title);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-8px);\n  padding: 6px 10px;\n  background: #1e293b;\n  color: white;\n  font-size: 11px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s, transform 0.2s;\n  z-index: 1000;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n}\n\n.file-badge:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-4px);\n}\n\n.file-badge svg {\n  flex-shrink: 0;\n}\n\n.file-badge-name {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (max-width: 640px) {\n  .file-badge-name {\n    max-width: 80px;\n  }\n  \n  .file-badge {\n    padding: 3px 6px;\n    font-size: 11px;\n    gap: 3px;\n  }\n  \n  .file-badge svg {\n    width: 10px;\n    height: 10px;\n  }\n}\n\n.file-badge-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1;\n  padding: 0;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.file-badge-remove:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n\n/* Inline file references in contentEditable */\n.inline-file-reference {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);\n  color: #ffffff !important;\n  border-radius: 18px;\n  font-size: 13px;\n  font-weight: 500;\n  margin: 2px 3px;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.2s ease;\n  cursor: default;\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  pointer-events: auto;\n}\n\n.inline-file-reference::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s ease;\n}\n\n.inline-file-reference:hover::before {\n  left: 100%;\n}\n\n.inline-file-reference:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.5);\n  border-color: rgba(255, 255, 255, 0.4);\n  background: linear-gradient(135deg, #5855eb 0%, #7c3aed 50%, #9333ea 100%);\n}\n\n.inline-file-reference .file-icon {\n  flex-shrink: 0;\n  opacity: 0.95;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n\n.inline-file-reference .file-name {\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  color: #ffffff !important;\n}\n\n.inline-file-reference .file-chip-remove {\n  display: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer !important;\n  margin-left: 6px;\n  padding: 0;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 2;\n}\n\n.inline-file-reference:hover .file-chip-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.inline-file-reference .file-chip-remove:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n  cursor: pointer !important;\n}\n\n/* ContentEditable input styling */\n.chat-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #1e293b;\n  font-family: inherit;\n  padding: 8px 0;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  cursor: text;\n}\n\n.chat-input:empty::before {\n  content: attr(data-placeholder);\n  color: #94a3b8;\n  pointer-events: none;\n}\n\n.chat-input:focus {\n  outline: none;\n  cursor: text !important;\n}\n\n/* ContentEditable specific styles */\n.chat-input br {\n  display: none;\n}\n\n.chat-input * {\n  display: inline;\n  vertical-align: baseline;\n}\n\n.chat-input .inline-file-reference {\n  display: inline-flex !important;\n  vertical-align: baseline !important;\n  margin: 0 2px;\n}\n\n.chat-input p {\n  margin: 0;\n  display: inline;\n}\n\n/* Ensure file chips display properly in chat messages */\n.message-content .inline-file-reference {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);\n  color: #ffffff !important;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0 2px;\n  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  vertical-align: baseline;\n  cursor: default;\n  user-select: none;\n}\n\n.message-content .inline-file-reference .file-icon {\n  flex-shrink: 0;\n  opacity: 0.9;\n}\n\n.message-content .inline-file-reference .file-name {\n  font-weight: 500;\n  color: #ffffff !important;\n}\n\n.message-content .inline-file-reference .file-chip-remove {\n  display: none; /* Hide remove button in message display */\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/CustomChat.css"],"names":[],"mappings":"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","sourcesContent":[".custom-chat-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  background: transparent;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.custom-chat-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #ffffff;\n  z-index: 10;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.chat-header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.chat-header-title {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.chat-restart-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  color: #64748b;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.chat-restart-btn:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #475569;\n}\n\n.custom-chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 100%;\n}\n\n@media (max-width: 640px) {\n  .custom-chat-messages {\n    padding: 12px 8px;\n    gap: 12px;\n  }\n}\n\n.message {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  animation: fadeIn 0.3s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.message-user {\n  flex-direction: row-reverse;\n}\n\n.message-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #f1f5f9;\n  color: #64748b;\n  overflow: hidden;\n}\n\n.bot-avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.message-user .message-avatar {\n  background: #3b82f6;\n  color: white;\n}\n\n.message-content {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 12px;\n  /* background: #f8fafc; */\n  color: #1e293b;\n  font-size: 14px;\n  line-height: 1.6;\n  max-width: min(70%, 800px);\n  word-wrap: break-word;\n  box-sizing: border-box;\n}\n\n@media (max-width: 640px) {\n  .message-content {\n    padding: 10px 12px;\n    font-size: 13px;\n    max-width: 85%;\n  }\n}\n\n.message-user .message-content {\n  flex: 0 1 auto;\n  background: #e5e7eb;\n  color: #1e293b;\n  max-width: min(60%, 650px);\n  width: fit-content;\n  border: 1px solid #d1d5db;\n}\n\n@media (max-width: 640px) {\n  .message-user .message-content {\n    max-width: 80%;\n  }\n}\n\n.message-content p {\n  margin: 0;\n}\n\n.message-content h1,\n.message-content h2,\n.message-content h3 {\n  margin: 0 0 8px 0;\n}\n\n.message-content code {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: 'Courier New', monospace;\n  font-size: 0.9em;\n}\n\n.message-user .message-content code {\n  background: rgba(0, 0, 0, 0.08);\n  color: #1e293b;\n}\n\n.message-content pre {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 12px;\n  border-radius: 6px;\n  overflow-x: auto;\n  margin: 8px 0;\n}\n\n.message-user .message-content pre {\n  background: rgba(0, 0, 0, 0.06);\n  border: 1px solid #d1d5db;\n}\n\n.card-manager-wrapper {\n  margin-top: 8px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.message-card-content {\n  background: transparent;\n  padding: 0;\n  max-width: min(85%, 1000px);\n}\n\n.custom-chat-input-area {\n  padding: 12px 16px;\n  border-top: 1px solid #e2e8f0;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n@media (max-width: 640px) {\n  .custom-chat-input-area {\n    padding: 8px 12px;\n  }\n}\n\n.chat-input-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 8px 12px;\n}\n\n@media (max-width: 640px) {\n  .chat-input-container {\n    padding: 6px 8px;\n    gap: 6px;\n  }\n}\n\n.textarea-wrapper {\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.chat-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #1e293b;\n  font-family: inherit;\n  padding: 8px 0;\n}\n\n.chat-input::placeholder {\n  color: #94a3b8;\n}\n\n.chat-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.chat-send-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.chat-send-btn:hover:not(:disabled) {\n  background: #2563eb;\n  transform: scale(1.05);\n}\n\n.chat-send-btn:disabled {\n  background: #cbd5e1;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.chat-send-btn:active:not(:disabled) {\n  transform: scale(0.95);\n}\n\n.simple-file-autocomplete {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  right: 0;\n  margin-bottom: 8px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 400px;\n  overflow: hidden;\n  animation: slideUpFade 0.2s ease;\n}\n\n@keyframes slideUpFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.simple-file-autocomplete-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 8px 8px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.simple-file-autocomplete-header .file-count {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n}\n\n.simple-file-autocomplete-list {\n  max-height: 350px;\n  overflow-y: auto;\n  padding: 4px;\n}\n\n.simple-file-autocomplete-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  margin-bottom: 2px;\n}\n\n.simple-file-autocomplete-item:hover,\n.simple-file-autocomplete-item.selected {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n}\n\n.simple-file-autocomplete-item.selected {\n  border-left: 3px solid #667eea;\n  padding-left: 7px;\n}\n\n.simple-file-autocomplete-item .file-icon {\n  flex-shrink: 0;\n  color: #667eea;\n}\n\n.simple-file-autocomplete-item .file-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.simple-file-autocomplete-item .file-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.simple-file-autocomplete-item .file-path {\n  font-size: 11px;\n  color: #6b7280;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.simple-file-autocomplete-footer {\n  padding: 6px 12px;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  border-radius: 0 0 8px 8px;\n}\n\n.simple-file-autocomplete-footer .hint {\n  font-size: 10px;\n  color: #9ca3af;\n  font-style: italic;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.simple-file-autocomplete-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.custom-chat-input-area {\n  position: relative;\n}\n\n.file-badges-overlay {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 0;\n  min-height: 0;\n}\n\n.file-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: default;\n  transition: all 0.2s;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n  position: relative;\n}\n\n.file-badge:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);\n}\n\n.file-badge::after {\n  content: attr(title);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-8px);\n  padding: 6px 10px;\n  background: #1e293b;\n  color: white;\n  font-size: 11px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s, transform 0.2s;\n  z-index: 1000;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n}\n\n.file-badge:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-4px);\n}\n\n.file-badge svg {\n  flex-shrink: 0;\n}\n\n.file-badge-name {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (max-width: 640px) {\n  .file-badge-name {\n    max-width: 80px;\n  }\n  \n  .file-badge {\n    padding: 3px 6px;\n    font-size: 11px;\n    gap: 3px;\n  }\n  \n  .file-badge svg {\n    width: 10px;\n    height: 10px;\n  }\n}\n\n.file-badge-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1;\n  padding: 0;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.file-badge-remove:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n\n/* Inline file references in contentEditable */\n.inline-file-reference {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);\n  color: #ffffff !important;\n  border-radius: 18px;\n  font-size: 13px;\n  font-weight: 500;\n  margin: 2px 3px;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.2s ease;\n  cursor: default;\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  pointer-events: auto;\n}\n\n.inline-file-reference::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s ease;\n}\n\n.inline-file-reference:hover::before {\n  left: 100%;\n}\n\n.inline-file-reference:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.5);\n  border-color: rgba(255, 255, 255, 0.4);\n  background: linear-gradient(135deg, #5855eb 0%, #7c3aed 50%, #9333ea 100%);\n}\n\n.inline-file-reference .file-icon {\n  flex-shrink: 0;\n  opacity: 0.95;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n\n.inline-file-reference .file-name {\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  color: #ffffff !important;\n}\n\n.inline-file-reference .file-chip-remove {\n  display: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer !important;\n  margin-left: 6px;\n  padding: 0;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 2;\n}\n\n.inline-file-reference:hover .file-chip-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.inline-file-reference .file-chip-remove:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n  cursor: pointer !important;\n}\n\n/* ContentEditable input styling */\n.chat-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #1e293b;\n  font-family: inherit;\n  padding: 8px 0;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  cursor: text;\n}\n\n.chat-input:empty::before {\n  content: attr(data-placeholder);\n  color: #94a3b8;\n  pointer-events: none;\n}\n\n.chat-input:focus {\n  outline: none;\n  cursor: text !important;\n}\n\n/* ContentEditable specific styles */\n.chat-input br {\n  display: none;\n}\n\n.chat-input * {\n  display: inline;\n  vertical-align: baseline;\n}\n\n.chat-input .inline-file-reference {\n  display: inline-flex !important;\n  vertical-align: baseline !important;\n  margin: 0 2px;\n}\n\n.chat-input p {\n  margin: 0;\n  display: inline;\n}\n\n/* Ensure file chips display properly in chat messages */\n.message-content .inline-file-reference {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);\n  color: #ffffff !important;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0 2px;\n  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  vertical-align: baseline;\n  cursor: default;\n  user-select: none;\n}\n\n.message-content .inline-file-reference .file-icon {\n  flex-shrink: 0;\n  opacity: 0.9;\n}\n\n.message-content .inline-file-reference .file-name {\n  font-weight: 500;\n  color: #ffffff !important;\n}\n\n.message-content .inline-file-reference .file-chip-remove {\n  display: none; /* Hide remove button in message display */\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CustomResponseStyles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/CustomResponseStyles.css ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".external {\n  background: green;\n  color: #fff;\n  padding: 1rem;\n}\n\n/* Main container styles */\n.ai-system-steps {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\",\n    \"Helvetica Neue\", sans-serif;\n  max-width: 800px;\n  margin: 0 auto;\n  padding-left: 0px !important;\n  padding-right: 10px;\n}\n\n/* .new-step {\n  animation: fadeIn 0.8s ease-out;\n  opacity: 1;\n} */\n\n/* @keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n} */\n\n/* Main title */\n.system-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n  color: #333;\n}\n\n/* Steps container */\n.steps-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* Individual step */\n.step {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n\n.step.expanded {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* Step header */\n.step-header {\n  padding: 12px 16px;\n  background-color: #f5f7f9;\n  display: flex;\n  justify-content: space-between;\n  /* align-items: center; */\n  transition: background-color 0.2s ease;\n}\n\n.step-header:hover {\n  background-color: #edf0f3;\n}\n\n/* Title container to group title and expand button */\n.title-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Step title styling */\n.step-title {\n  font-style: italic;\n  font-weight: 500;\n  color: #333;\n  flex-grow: 1;\n}\n\n/* Expand button styling */\n.expand-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #555;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n\n.expand-button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #222;\n}\n\n/* Step content */\n.step-content {\n  padding: 16px;\n  overflow-x: scroll;\n  background-color: white;\n  line-height: 1.5;\n}\n\n/* Styles for the stop button container to ensure it's always visible */\n.stop-button-container {\n  position: sticky;\n  bottom: 0;\n  opacity: 1;\n  background-color: rgba(255, 255, 255, 0);\n  padding: 8px 0;\n  border-top: 0px solid #e0e0e0;\n  z-index: 100;\n  width: 100%;\n  text-align: center;\n}\n\n.stop-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  background-color: #ff4d4d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  margin: 0 auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.stop-button:hover {\n  background-color: #ff3333;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\n}\n\n.stop-button:disabled {\n  background-color: #cccccc;\n  cursor: default;\n  box-shadow: none;\n}\n\n.stop-button svg {\n  margin-right: 8px;\n}\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/CustomResponseStyles.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA,0BAA0B;AAC1B;EACE;gCAC8B;EAC9B,gBAAgB;EAChB,cAAc;EACd,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;;;GAGG;;AAEH;;;;;;;;;GASG;;AAEH,eAAe;AACf;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;AACb;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA,oBAAoB;AACpB;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,yCAAyC;EACzC,yBAAyB;AAC3B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,qDAAqD;AACrD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA,uBAAuB;AACvB;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uDAAuD;AACzD;;AAEA;EACE,qCAAqC;EACrC,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,uEAAuE;AACvE;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,wCAAwC;EACxC,cAAc;EACd,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,wCAAwC;EACxC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".external {\n  background: green;\n  color: #fff;\n  padding: 1rem;\n}\n\n/* Main container styles */\n.ai-system-steps {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\",\n    \"Helvetica Neue\", sans-serif;\n  max-width: 800px;\n  margin: 0 auto;\n  padding-left: 0px !important;\n  padding-right: 10px;\n}\n\n/* .new-step {\n  animation: fadeIn 0.8s ease-out;\n  opacity: 1;\n} */\n\n/* @keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n} */\n\n/* Main title */\n.system-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n  color: #333;\n}\n\n/* Steps container */\n.steps-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* Individual step */\n.step {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n\n.step.expanded {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* Step header */\n.step-header {\n  padding: 12px 16px;\n  background-color: #f5f7f9;\n  display: flex;\n  justify-content: space-between;\n  /* align-items: center; */\n  transition: background-color 0.2s ease;\n}\n\n.step-header:hover {\n  background-color: #edf0f3;\n}\n\n/* Title container to group title and expand button */\n.title-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Step title styling */\n.step-title {\n  font-style: italic;\n  font-weight: 500;\n  color: #333;\n  flex-grow: 1;\n}\n\n/* Expand button styling */\n.expand-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #555;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n\n.expand-button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #222;\n}\n\n/* Step content */\n.step-content {\n  padding: 16px;\n  overflow-x: scroll;\n  background-color: white;\n  line-height: 1.5;\n}\n\n/* Styles for the stop button container to ensure it's always visible */\n.stop-button-container {\n  position: sticky;\n  bottom: 0;\n  opacity: 1;\n  background-color: rgba(255, 255, 255, 0);\n  padding: 8px 0;\n  border-top: 0px solid #e0e0e0;\n  z-index: 100;\n  width: 100%;\n  text-align: center;\n}\n\n.stop-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  background-color: #ff4d4d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  margin: 0 auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n}\n\n.stop-button:hover {\n  background-color: #ff3333;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\n}\n\n.stop-button:disabled {\n  background-color: #cccccc;\n  cursor: default;\n  box-shadow: none;\n}\n\n.stop-button svg {\n  margin-right: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/FileAutocomplete.css":
/*!*******************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/FileAutocomplete.css ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".file-autocomplete {\n  position: fixed;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  z-index: 99999;\n  min-width: 320px;\n  max-width: 500px;\n  animation: slideUpFade 0.2s ease;\n  pointer-events: auto;\n}\n\n@keyframes slideUpFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.file-autocomplete-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 8px 8px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.file-count {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n}\n\n.file-autocomplete-list {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 4px;\n}\n\n.file-autocomplete-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  margin-bottom: 2px;\n}\n\n.file-autocomplete-item:hover,\n.file-autocomplete-item.selected {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n}\n\n.file-autocomplete-item.selected {\n  border-left: 3px solid #667eea;\n  padding-left: 7px;\n}\n\n.file-icon {\n  flex-shrink: 0;\n  color: #667eea;\n}\n\n.file-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.file-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.file-path {\n  font-size: 11px;\n  color: #6b7280;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.file-autocomplete-footer {\n  padding: 6px 12px;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  border-radius: 0 0 8px 8px;\n}\n\n.hint {\n  font-size: 10px;\n  color: #9ca3af;\n  font-style: italic;\n}\n\n.file-autocomplete-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.file-autocomplete-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.file-autocomplete-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.file-autocomplete-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/FileAutocomplete.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,2CAA2C;EAC3C,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,6DAA6D;EAC7D,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,0BAA0B;EAC1B,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;;EAEE,8FAA8F;AAChG;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,oEAAoE;EACpE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,6BAA6B;EAC7B,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".file-autocomplete {\n  position: fixed;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  z-index: 99999;\n  min-width: 320px;\n  max-width: 500px;\n  animation: slideUpFade 0.2s ease;\n  pointer-events: auto;\n}\n\n@keyframes slideUpFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.file-autocomplete-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 8px 8px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.file-count {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n}\n\n.file-autocomplete-list {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 4px;\n}\n\n.file-autocomplete-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  margin-bottom: 2px;\n}\n\n.file-autocomplete-item:hover,\n.file-autocomplete-item.selected {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n}\n\n.file-autocomplete-item.selected {\n  border-left: 3px solid #667eea;\n  padding-left: 7px;\n}\n\n.file-icon {\n  flex-shrink: 0;\n  color: #667eea;\n}\n\n.file-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.file-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.file-path {\n  font-size: 11px;\n  color: #6b7280;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.file-autocomplete-footer {\n  padding: 6px 12px;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  border-radius: 0 0 8px 8px;\n}\n\n.hint {\n  font-size: 10px;\n  color: #9ca3af;\n  font-style: italic;\n}\n\n.file-autocomplete-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.file-autocomplete-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.file-autocomplete-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.file-autocomplete-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/LeftSidebar.css":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/LeftSidebar.css ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".left-sidebar {\n  position: fixed;\n  left: 0;\n  top: 48px;\n  bottom: 0;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n  width: 320px;\n  transform: translateX(0);\n  overflow: visible;\n}\n\n.left-sidebar.collapsed {\n  transform: translateX(-100%);\n  box-shadow: none;\n}\n\n.left-sidebar.expanded {\n  transform: translateX(0);\n  animation: slideInFromLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes slideInFromLeft {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.left-sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #e5e7eb;\n  gap: 6px;\n  background: #f9fafb;\n  min-height: 52px;\n}\n\n.left-sidebar-tabs {\n  display: flex;\n  gap: 3px;\n  flex: 1;\n  min-width: 0;\n  background: white;\n  border-radius: 8px;\n  padding: 3px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n\n.sidebar-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 6px 6px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  color: #64748b;\n  font-size: 10.5px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n  min-width: 0;\n}\n\n.sidebar-tab span {\n  white-space: nowrap;\n}\n\n.sidebar-tab:hover {\n  background: #f8fafc;\n  color: #4e00ec;\n}\n\n.sidebar-tab.active {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n}\n\n.left-sidebar-toggle {\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.left-sidebar-toggle:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #4e00ec;\n}\n\n.left-sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: visible;\n  display: flex;\n  flex-direction: column;\n}\n\n.conversations-actions {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.new-conversation-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);\n}\n\n.new-conversation-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);\n}\n\n.new-conversation-btn:active {\n  transform: translateY(0);\n}\n\n.conversations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  flex: 1;\n  overflow: visible;\n}\n\n.conversation-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  overflow: visible;\n}\n\n.conversation-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n\n.conversation-item.selected {\n  background: #eef2ff;\n  border-color: #667eea;\n  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);\n}\n\n.conversation-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  position: relative;\n  overflow: visible;\n}\n\n.conversation-header svg {\n  color: #667eea;\n  flex-shrink: 0;\n}\n\n.conversation-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.delete-conversation-btn {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.2s;\n  opacity: 0;\n}\n\n.conversation-item:hover .delete-conversation-btn {\n  opacity: 1;\n}\n\n.delete-conversation-btn:hover {\n  background: #fee2e2;\n  color: #ef4444;\n}\n\n.conversation-preview {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.conversation-date {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  color: #94a3b8;\n  gap: 8px;\n}\n\n.empty-state svg {\n  opacity: 0.5;\n}\n\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n.empty-state small {\n  font-size: 12px;\n}\n\n.variables-wrapper {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n\n.variables-wrapper .variables-sidebar {\n  position: relative !important;\n  left: 0 !important;\n  top: 0 !important;\n  height: 100%;\n  width: 100%;\n  border-right: none;\n  box-shadow: none;\n  transform: none !important;\n}\n\n.variables-wrapper .variables-sidebar-floating-toggle {\n  display: none;\n}\n\n.left-sidebar-floating-toggle {\n  position: fixed;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 64px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-left: none;\n  border-radius: 0 8px 8px 0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  z-index: 999;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: #64748b;\n  animation: slideInToggle 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.left-sidebar-floating-toggle:hover {\n  background: #f8fafc;\n  color: #4e00ec;\n  box-shadow: 2px 0 12px rgba(102, 126, 234, 0.2);\n  transform: translateY(-50%) translateX(4px);\n}\n\n@keyframes slideInToggle {\n  from {\n    transform: translateY(-50%) translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(-50%) translateX(0);\n    opacity: 1;\n  }\n}\n\n.sidebar-floating-count {\n  font-size: 11px;\n  font-weight: 600;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n\n.left-sidebar-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.left-sidebar-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.left-sidebar-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.left-sidebar-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n@media (max-width: 768px) {\n  .left-sidebar {\n    width: 280px;\n  }\n}\n\n@media (max-width: 640px) {\n  .left-sidebar {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n\n.flow-item {\n  cursor: default;\n}\n\n.flow-parameters {\n  margin: 8px 0;\n  padding: 8px;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.flow-function-signature {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  font-size: 11px;\n  color: #1e293b;\n  line-height: 1.6;\n}\n\n.flow-function-signature code {\n  background: transparent;\n  padding: 0;\n  color: inherit;\n  font-family: inherit;\n}\n\n.flow-params-list {\n  margin-left: 12px;\n  margin-top: 4px;\n}\n\n.flow-param {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n\n.param-name {\n  color: #667eea;\n  font-weight: 600;\n}\n\n.param-type {\n  color: #64748b;\n  font-style: italic;\n}\n\n.param-default {\n  color: #10b981;\n}\n\n.param-required {\n  color: #ef4444;\n  font-weight: 600;\n  margin-left: 2px;\n}\n\n.flow-info-icon-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.flow-info-icon {\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.flow-info-icon:hover {\n  color: #667eea;\n  transform: scale(1.1);\n}\n\n.flow-info-tooltip {\n  position: fixed;\n  width: 300px;\n  background: #1e293b;\n  color: white;\n  padding: 14px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  line-height: 1.5;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n  z-index: 99999;\n  animation: tooltipFadeIn 0.2s ease;\n  pointer-events: auto;\n}\n\n.flow-info-tooltip::before {\n  content: '';\n  position: absolute;\n  right: 100%;\n  top: 20px;\n  border: 8px solid transparent;\n  border-right-color: #1e293b;\n}\n\n@keyframes tooltipFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/LeftSidebar.css"],"names":[],"mappings":"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","sourcesContent":[".left-sidebar {\n  position: fixed;\n  left: 0;\n  top: 48px;\n  bottom: 0;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n  width: 320px;\n  transform: translateX(0);\n  overflow: visible;\n}\n\n.left-sidebar.collapsed {\n  transform: translateX(-100%);\n  box-shadow: none;\n}\n\n.left-sidebar.expanded {\n  transform: translateX(0);\n  animation: slideInFromLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes slideInFromLeft {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.left-sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #e5e7eb;\n  gap: 6px;\n  background: #f9fafb;\n  min-height: 52px;\n}\n\n.left-sidebar-tabs {\n  display: flex;\n  gap: 3px;\n  flex: 1;\n  min-width: 0;\n  background: white;\n  border-radius: 8px;\n  padding: 3px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n\n.sidebar-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 6px 6px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  color: #64748b;\n  font-size: 10.5px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n  min-width: 0;\n}\n\n.sidebar-tab span {\n  white-space: nowrap;\n}\n\n.sidebar-tab:hover {\n  background: #f8fafc;\n  color: #4e00ec;\n}\n\n.sidebar-tab.active {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n}\n\n.left-sidebar-toggle {\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.left-sidebar-toggle:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #4e00ec;\n}\n\n.left-sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: visible;\n  display: flex;\n  flex-direction: column;\n}\n\n.conversations-actions {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.new-conversation-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);\n}\n\n.new-conversation-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);\n}\n\n.new-conversation-btn:active {\n  transform: translateY(0);\n}\n\n.conversations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  flex: 1;\n  overflow: visible;\n}\n\n.conversation-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  overflow: visible;\n}\n\n.conversation-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n\n.conversation-item.selected {\n  background: #eef2ff;\n  border-color: #667eea;\n  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);\n}\n\n.conversation-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  position: relative;\n  overflow: visible;\n}\n\n.conversation-header svg {\n  color: #667eea;\n  flex-shrink: 0;\n}\n\n.conversation-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.delete-conversation-btn {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.2s;\n  opacity: 0;\n}\n\n.conversation-item:hover .delete-conversation-btn {\n  opacity: 1;\n}\n\n.delete-conversation-btn:hover {\n  background: #fee2e2;\n  color: #ef4444;\n}\n\n.conversation-preview {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.conversation-date {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  color: #94a3b8;\n  gap: 8px;\n}\n\n.empty-state svg {\n  opacity: 0.5;\n}\n\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n.empty-state small {\n  font-size: 12px;\n}\n\n.variables-wrapper {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n\n.variables-wrapper .variables-sidebar {\n  position: relative !important;\n  left: 0 !important;\n  top: 0 !important;\n  height: 100%;\n  width: 100%;\n  border-right: none;\n  box-shadow: none;\n  transform: none !important;\n}\n\n.variables-wrapper .variables-sidebar-floating-toggle {\n  display: none;\n}\n\n.left-sidebar-floating-toggle {\n  position: fixed;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 64px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-left: none;\n  border-radius: 0 8px 8px 0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  z-index: 999;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: #64748b;\n  animation: slideInToggle 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.left-sidebar-floating-toggle:hover {\n  background: #f8fafc;\n  color: #4e00ec;\n  box-shadow: 2px 0 12px rgba(102, 126, 234, 0.2);\n  transform: translateY(-50%) translateX(4px);\n}\n\n@keyframes slideInToggle {\n  from {\n    transform: translateY(-50%) translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(-50%) translateX(0);\n    opacity: 1;\n  }\n}\n\n.sidebar-floating-count {\n  font-size: 11px;\n  font-weight: 600;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n\n.left-sidebar-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.left-sidebar-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.left-sidebar-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.left-sidebar-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n@media (max-width: 768px) {\n  .left-sidebar {\n    width: 280px;\n  }\n}\n\n@media (max-width: 640px) {\n  .left-sidebar {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n\n.flow-item {\n  cursor: default;\n}\n\n.flow-parameters {\n  margin: 8px 0;\n  padding: 8px;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n\n.flow-function-signature {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  font-size: 11px;\n  color: #1e293b;\n  line-height: 1.6;\n}\n\n.flow-function-signature code {\n  background: transparent;\n  padding: 0;\n  color: inherit;\n  font-family: inherit;\n}\n\n.flow-params-list {\n  margin-left: 12px;\n  margin-top: 4px;\n}\n\n.flow-param {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n\n.param-name {\n  color: #667eea;\n  font-weight: 600;\n}\n\n.param-type {\n  color: #64748b;\n  font-style: italic;\n}\n\n.param-default {\n  color: #10b981;\n}\n\n.param-required {\n  color: #ef4444;\n  font-weight: 600;\n  margin-left: 2px;\n}\n\n.flow-info-icon-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.flow-info-icon {\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.flow-info-icon:hover {\n  color: #667eea;\n  transform: scale(1.1);\n}\n\n.flow-info-tooltip {\n  position: fixed;\n  width: 300px;\n  background: #1e293b;\n  color: white;\n  padding: 14px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  line-height: 1.5;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n  z-index: 99999;\n  animation: tooltipFadeIn 0.2s ease;\n  pointer-events: auto;\n}\n\n.flow-info-tooltip::before {\n  content: '';\n  position: absolute;\n  right: 100%;\n  top: 20px;\n  border: 8px solid transparent;\n  border-right-color: #1e293b;\n}\n\n@keyframes tooltipFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/StatusBar.css":
/*!************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/StatusBar.css ***!
  \************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".status-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 42px;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  z-index: 900;\n  font-size: 13px;\n  color: #64748b;\n}\n\n.status-bar-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.status-bar-center {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  justify-content: center;\n}\n\n.status-bar-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.status-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n\n.status-label {\n  font-weight: 500;\n  color: #475569;\n}\n\n.status-badge {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n\n.status-warning {\n  color: #f59e0b;\n  animation: pulse 2s ease-in-out infinite;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n.status-tools {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n\n.status-tools:hover {\n  background: #f1f5f9;\n}\n\n.tools-popup {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  animation: slideUp 0.2s ease;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.tools-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 8px 8px 0 0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #1e293b;\n}\n\n.tools-count {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.tools-list {\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 8px;\n}\n\n.tools-empty {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12px;\n}\n\n.tool-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  transition: background 0.2s;\n}\n\n.tool-item:hover {\n  background: #f8fafc;\n}\n\n.tool-item.connected {\n  border-left: 2px solid #10b981;\n}\n\n.tool-item.error {\n  border-left: 2px solid #ef4444;\n}\n\n.tool-item.disconnected {\n  border-left: 2px solid #94a3b8;\n  opacity: 0.6;\n}\n\n.tool-status-indicator {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.tool-item.connected .tool-status-indicator {\n  background: #10b981;\n  box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);\n}\n\n.tool-item.error .tool-status-indicator {\n  background: #ef4444;\n  box-shadow: 0 0 6px rgba(239, 68, 68, 0.5);\n}\n\n.tool-item.disconnected .tool-status-indicator {\n  background: #94a3b8;\n}\n\n.tool-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.tool-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1e293b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tool-type {\n  font-size: 10px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.tool-status-text {\n  font-size: 10px;\n  color: #64748b;\n  text-transform: capitalize;\n}\n\n.status-mode {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.mode-toggle {\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 2px;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n\n.mode-toggle:hover {\n  border-color: #cbd5e1;\n}\n\n.mode-option {\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748b;\n  transition: all 0.2s;\n  user-select: none;\n}\n\n.mode-option.active {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n}\n\n.mode-option.disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n\n.status-connected {\n  color: #10b981;\n}\n\n.tools-list::-webkit-scrollbar {\n  width: 4px;\n}\n\n.tools-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.tools-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 2px;\n}\n\n.tools-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n/* Agent Mode Styles */\n.status-agents {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  position: relative;\n}\n\n.status-agents:hover {\n  background: #f1f5f9;\n}\n\n.agents-popup {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  animation: slideUp 0.2s ease;\n}\n\n.agents-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 8px 8px 0 0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #1e293b;\n}\n\n.agents-count {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.agents-list {\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 8px;\n}\n\n.agents-empty {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12px;\n}\n\n.agent-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  transition: background 0.2s;\n}\n\n.agent-item:hover {\n  background: #f8fafc;\n}\n\n.agent-item.enabled {\n  border-left: 2px solid #667eea;\n}\n\n.agent-item.disabled {\n  border-left: 2px solid #94a3b8;\n  opacity: 0.6;\n}\n\n.agent-status-indicator {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.agent-item.enabled .agent-status-indicator {\n  background: #667eea;\n  box-shadow: 0 0 6px rgba(102, 126, 234, 0.5);\n}\n\n.agent-item.disabled .agent-status-indicator {\n  background: #94a3b8;\n}\n\n.agent-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.agent-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1e293b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.agent-role {\n  font-size: 10px;\n  color: #94a3b8;\n  text-transform: capitalize;\n}\n\n.agent-status-text {\n  font-size: 10px;\n  color: #64748b;\n  text-transform: capitalize;\n}\n\n.agents-list::-webkit-scrollbar {\n  width: 4px;\n}\n\n.agents-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.agents-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 2px;\n}\n\n.agents-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.agents-info-box {\n  padding: 12px 14px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n\n.agents-info-box.single-mode {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 14px;\n  text-align: center;\n}\n\n.agents-info-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.single-agent-icon {\n  color: #667eea;\n  margin-bottom: 4px;\n}\n\n.single-agent-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.single-agent-description {\n  font-size: 11px;\n  color: #64748b;\n  line-height: 1.5;\n  max-width: 240px;\n}\n\n/* More Menu Styles */\n.status-more {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  position: relative;\n}\n\n.status-more:hover {\n  background: #f1f5f9;\n}\n\n.more-popup {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  animation: slideUp 0.2s ease;\n}\n\n.more-popup-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 8px 8px 0 0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #1e293b;\n}\n\n.more-list {\n  padding: 4px 0;\n}\n\n.more-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n  font-size: 12px;\n}\n\n.more-item:hover {\n  background: #f8fafc;\n}\n\n.more-item-label {\n  color: #475569;\n  font-weight: 500;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .status-bar {\n    padding: 0 12px;\n    height: 40px;\n    font-size: 12px;\n  }\n\n  .status-bar-center {\n    gap: 8px;\n  }\n\n  .status-item {\n    gap: 4px;\n  }\n\n  .status-label {\n    display: none;\n  }\n\n  .status-badge {\n    font-size: 9px;\n    padding: 1px 4px;\n    min-width: 16px;\n  }\n\n  .mode-option {\n    padding: 2px 8px;\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 480px) {\n  .status-bar {\n    padding: 0 8px;\n  }\n\n  .status-bar-center {\n    gap: 4px;\n  }\n\n  .tools-popup,\n  .agents-popup,\n  .more-popup {\n    width: 180px;\n    max-height: 200px;\n  }\n\n  .tool-item,\n  .agent-item,\n  .more-item {\n    padding: 6px 8px;\n    font-size: 11px;\n  }\n}\n\n/* Tool grouping styles */\n.tool-group {\n  margin-bottom: 12px;\n}\n\n.tool-group:last-child {\n  margin-bottom: 0;\n}\n\n.tool-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.tool-group-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  text-transform: capitalize;\n}\n\n.tool-group-stats {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n\n.tool-group-count {\n  font-size: 10px;\n  color: #6b7280;\n  background: #e5e7eb;\n  padding: 2px 6px;\n  border-radius: 8px;\n  font-weight: 500;\n}\n\n.tool-group-internal {\n  font-size: 9px;\n  color: #9ca3af;\n  font-weight: 500;\n}\n\n.tool-group-items {\n  margin-left: 8px;\n}\n\n.tool-group-items .tool-item {\n  padding-left: 20px;\n  border-left: 2px solid #e5e7eb;\n  margin-bottom: 2px;\n}\n\n.tool-group-items .tool-item:last-child {\n  margin-bottom: 0;\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/StatusBar.css"],"names":[],"mappings":"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","sourcesContent":[".status-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 42px;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  z-index: 900;\n  font-size: 13px;\n  color: #64748b;\n}\n\n.status-bar-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.status-bar-center {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  justify-content: center;\n}\n\n.status-bar-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.status-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n\n.status-label {\n  font-weight: 500;\n  color: #475569;\n}\n\n.status-badge {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n\n.status-warning {\n  color: #f59e0b;\n  animation: pulse 2s ease-in-out infinite;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n.status-tools {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n\n.status-tools:hover {\n  background: #f1f5f9;\n}\n\n.tools-popup {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  animation: slideUp 0.2s ease;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.tools-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 8px 8px 0 0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #1e293b;\n}\n\n.tools-count {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.tools-list {\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 8px;\n}\n\n.tools-empty {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12px;\n}\n\n.tool-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  transition: background 0.2s;\n}\n\n.tool-item:hover {\n  background: #f8fafc;\n}\n\n.tool-item.connected {\n  border-left: 2px solid #10b981;\n}\n\n.tool-item.error {\n  border-left: 2px solid #ef4444;\n}\n\n.tool-item.disconnected {\n  border-left: 2px solid #94a3b8;\n  opacity: 0.6;\n}\n\n.tool-status-indicator {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.tool-item.connected .tool-status-indicator {\n  background: #10b981;\n  box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);\n}\n\n.tool-item.error .tool-status-indicator {\n  background: #ef4444;\n  box-shadow: 0 0 6px rgba(239, 68, 68, 0.5);\n}\n\n.tool-item.disconnected .tool-status-indicator {\n  background: #94a3b8;\n}\n\n.tool-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.tool-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1e293b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tool-type {\n  font-size: 10px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.tool-status-text {\n  font-size: 10px;\n  color: #64748b;\n  text-transform: capitalize;\n}\n\n.status-mode {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.mode-toggle {\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 2px;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n\n.mode-toggle:hover {\n  border-color: #cbd5e1;\n}\n\n.mode-option {\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748b;\n  transition: all 0.2s;\n  user-select: none;\n}\n\n.mode-option.active {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);\n}\n\n.mode-option.disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n\n.status-connected {\n  color: #10b981;\n}\n\n.tools-list::-webkit-scrollbar {\n  width: 4px;\n}\n\n.tools-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.tools-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 2px;\n}\n\n.tools-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n/* Agent Mode Styles */\n.status-agents {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  position: relative;\n}\n\n.status-agents:hover {\n  background: #f1f5f9;\n}\n\n.agents-popup {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  animation: slideUp 0.2s ease;\n}\n\n.agents-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 8px 8px 0 0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #1e293b;\n}\n\n.agents-count {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.agents-list {\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 8px;\n}\n\n.agents-empty {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12px;\n}\n\n.agent-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  transition: background 0.2s;\n}\n\n.agent-item:hover {\n  background: #f8fafc;\n}\n\n.agent-item.enabled {\n  border-left: 2px solid #667eea;\n}\n\n.agent-item.disabled {\n  border-left: 2px solid #94a3b8;\n  opacity: 0.6;\n}\n\n.agent-status-indicator {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.agent-item.enabled .agent-status-indicator {\n  background: #667eea;\n  box-shadow: 0 0 6px rgba(102, 126, 234, 0.5);\n}\n\n.agent-item.disabled .agent-status-indicator {\n  background: #94a3b8;\n}\n\n.agent-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.agent-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1e293b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.agent-role {\n  font-size: 10px;\n  color: #94a3b8;\n  text-transform: capitalize;\n}\n\n.agent-status-text {\n  font-size: 10px;\n  color: #64748b;\n  text-transform: capitalize;\n}\n\n.agents-list::-webkit-scrollbar {\n  width: 4px;\n}\n\n.agents-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.agents-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 2px;\n}\n\n.agents-list::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.agents-info-box {\n  padding: 12px 14px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n\n.agents-info-box.single-mode {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 14px;\n  text-align: center;\n}\n\n.agents-info-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.single-agent-icon {\n  color: #667eea;\n  margin-bottom: 4px;\n}\n\n.single-agent-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.single-agent-description {\n  font-size: 11px;\n  color: #64748b;\n  line-height: 1.5;\n  max-width: 240px;\n}\n\n/* More Menu Styles */\n.status-more {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  position: relative;\n}\n\n.status-more:hover {\n  background: #f1f5f9;\n}\n\n.more-popup {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  animation: slideUp 0.2s ease;\n}\n\n.more-popup-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 8px 8px 0 0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #1e293b;\n}\n\n.more-list {\n  padding: 4px 0;\n}\n\n.more-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n  font-size: 12px;\n}\n\n.more-item:hover {\n  background: #f8fafc;\n}\n\n.more-item-label {\n  color: #475569;\n  font-weight: 500;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .status-bar {\n    padding: 0 12px;\n    height: 40px;\n    font-size: 12px;\n  }\n\n  .status-bar-center {\n    gap: 8px;\n  }\n\n  .status-item {\n    gap: 4px;\n  }\n\n  .status-label {\n    display: none;\n  }\n\n  .status-badge {\n    font-size: 9px;\n    padding: 1px 4px;\n    min-width: 16px;\n  }\n\n  .mode-option {\n    padding: 2px 8px;\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 480px) {\n  .status-bar {\n    padding: 0 8px;\n  }\n\n  .status-bar-center {\n    gap: 4px;\n  }\n\n  .tools-popup,\n  .agents-popup,\n  .more-popup {\n    width: 180px;\n    max-height: 200px;\n  }\n\n  .tool-item,\n  .agent-item,\n  .more-item {\n    padding: 6px 8px;\n    font-size: 11px;\n  }\n}\n\n/* Tool grouping styles */\n.tool-group {\n  margin-bottom: 12px;\n}\n\n.tool-group:last-child {\n  margin-bottom: 0;\n}\n\n.tool-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.tool-group-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  text-transform: capitalize;\n}\n\n.tool-group-stats {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n\n.tool-group-count {\n  font-size: 10px;\n  color: #6b7280;\n  background: #e5e7eb;\n  padding: 2px 6px;\n  border-radius: 8px;\n  font-weight: 500;\n}\n\n.tool-group-internal {\n  font-size: 9px;\n  color: #9ca3af;\n  font-weight: 500;\n}\n\n.tool-group-items {\n  margin-left: 8px;\n}\n\n.tool-group-items .tool-item {\n  padding-left: 20px;\n  border-left: 2px solid #e5e7eb;\n  margin-bottom: 2px;\n}\n\n.tool-group-items .tool-item:last-child {\n  margin-bottom: 0;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/VariablePopup.css":
/*!****************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/VariablePopup.css ***!
  \****************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".variable-popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  animation: fadeIn 0.2s ease-in-out;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.variable-popup-content {\n  background: white;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  animation: slideUp 0.3s ease-out;\n}\n\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.variable-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.variable-popup-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.variable-popup-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.variable-popup-download-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: #4e00ec;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.variable-popup-download-btn:hover {\n  background: #3d00b8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(78, 0, 236, 0.3);\n}\n\n.variable-popup-download-btn:active {\n  transform: translateY(0);\n}\n\n.variable-popup-close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  color: #64748b;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.2s;\n  line-height: 1;\n}\n\n.variable-popup-close-btn:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n\n.variable-popup-body {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.variable-popup-body h2 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.variable-popup-body p {\n  margin: 8px 0;\n  color: #475569;\n  line-height: 1.6;\n}\n\n.variable-popup-body strong {\n  color: #1e293b;\n  font-weight: 600;\n}\n\n.variable-popup-body code {\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  color: #4e00ec;\n}\n\n.variable-popup-body pre {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  overflow-x: auto;\n  margin: 12px 0;\n}\n\n.variable-popup-body pre code {\n  background: transparent;\n  padding: 0;\n  color: #334155;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/VariablePopup.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,8BAA8B;EAC9B,cAAc;EACd,kCAAkC;AACpC;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,4CAA4C;AAC9C;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,wDAAwD;EACxD,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB","sourcesContent":[".variable-popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  animation: fadeIn 0.2s ease-in-out;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.variable-popup-content {\n  background: white;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  animation: slideUp 0.3s ease-out;\n}\n\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.variable-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.variable-popup-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.variable-popup-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.variable-popup-download-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: #4e00ec;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.variable-popup-download-btn:hover {\n  background: #3d00b8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(78, 0, 236, 0.3);\n}\n\n.variable-popup-download-btn:active {\n  transform: translateY(0);\n}\n\n.variable-popup-close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  color: #64748b;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.2s;\n  line-height: 1;\n}\n\n.variable-popup-close-btn:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n\n.variable-popup-body {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.variable-popup-body h2 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.variable-popup-body p {\n  margin: 8px 0;\n  color: #475569;\n  line-height: 1.6;\n}\n\n.variable-popup-body strong {\n  color: #1e293b;\n  font-weight: 600;\n}\n\n.variable-popup-body code {\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  color: #4e00ec;\n}\n\n.variable-popup-body pre {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  overflow-x: auto;\n  margin: 12px 0;\n}\n\n.variable-popup-body pre code {\n  background: transparent;\n  padding: 0;\n  color: #334155;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/VariablesSidebar.css":
/*!*******************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/VariablesSidebar.css ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Ensure sidebar is fixed from the very left edge */\n.variables-sidebar {\n  position: fixed !important;\n  left: 0 !important;\n  top: 0;\n  bottom: 0;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease, transform 0.3s ease;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n  margin: 0;\n  padding: 0;\n}\n\n.variables-sidebar.expanded {\n  width: 320px;\n}\n\n.variables-sidebar.collapsed {\n  /* When collapsed, slide it completely out of view */\n  transform: translateX(-100%);\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .variables-sidebar.expanded {\n    width: 280px;\n  }\n}\n\n@media (max-width: 640px) {\n  .variables-sidebar.expanded {\n    width: 100%;\n    max-width: 300px;\n  }\n  \n  .variables-sidebar.collapsed {\n    transform: translateX(-100%);\n  }\n}\n\n.variables-sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #e5e7eb;\n  gap: 12px;\n  min-height: 64px;\n  flex-wrap: wrap;\n}\n\n.variables-sidebar-toggle {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.variables-sidebar-toggle:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #4e00ec;\n}\n\n.variables-sidebar.collapsed .variables-sidebar-toggle {\n  margin: 0 auto;\n}\n\n.variables-sidebar-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  flex: 1;\n}\n\n.variables-sidebar-title svg {\n  color: #4e00ec;\n}\n\n.variables-count {\n  background: #4e00ec;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  margin-left: auto;\n}\n\n.variables-history-select {\n  width: 100%;\n  padding: 6px 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: white;\n  color: #1e293b;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n\n.variables-history-select:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n\n.variables-history-select:focus {\n  outline: none;\n  border-color: #4e00ec;\n  box-shadow: 0 0 0 3px rgba(78, 0, 236, 0.1);\n}\n\n.variables-history-info {\n  padding: 10px 12px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 12px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.history-count {\n  font-weight: 600;\n  color: #4e00ec;\n}\n\n.variables-sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.variables-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n}\n\n.variable-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.variable-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(78, 0, 236, 0.1);\n}\n\n.variable-item:active {\n  transform: translateY(0);\n}\n\n.variable-item-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.variable-name {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4e00ec;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5dbff;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.variable-type {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n\n.variable-description {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.variable-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.variable-count {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.variable-preview {\n  font-size: 12px;\n  color: #475569;\n  background: white;\n  padding: 6px 8px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.4;\n}\n\n/* Scrollbar styling */\n.variables-sidebar-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.variables-sidebar-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.variables-sidebar-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.variables-sidebar-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n/* Animation */\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.variables-sidebar {\n  animation: slideIn 0.3s ease-out;\n}\n\n/* Floating toggle button when sidebar is collapsed */\n.variables-sidebar-floating-toggle {\n  position: fixed;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 64px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-left: none;\n  border-radius: 0 8px 8px 0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  z-index: 999;\n  transition: all 0.2s;\n  color: #64748b;\n}\n\n.variables-sidebar-floating-toggle:hover {\n  background: #f8fafc;\n  color: #4e00ec;\n  box-shadow: 2px 0 12px rgba(78, 0, 236, 0.2);\n}\n\n.variables-floating-count {\n  font-size: 11px;\n  font-weight: 600;\n  background: #4e00ec;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n\n.no-variables-message {\n  padding: 24px 16px;\n  text-align: center;\n  color: #64748b;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin: 12px;\n}\n\n.no-variables-message p {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n}\n\n.no-variables-message p:last-child {\n  margin-bottom: 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/VariablesSidebar.css"],"names":[],"mappings":"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","sourcesContent":["/* Ensure sidebar is fixed from the very left edge */\n.variables-sidebar {\n  position: fixed !important;\n  left: 0 !important;\n  top: 0;\n  bottom: 0;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease, transform 0.3s ease;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n  margin: 0;\n  padding: 0;\n}\n\n.variables-sidebar.expanded {\n  width: 320px;\n}\n\n.variables-sidebar.collapsed {\n  /* When collapsed, slide it completely out of view */\n  transform: translateX(-100%);\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .variables-sidebar.expanded {\n    width: 280px;\n  }\n}\n\n@media (max-width: 640px) {\n  .variables-sidebar.expanded {\n    width: 100%;\n    max-width: 300px;\n  }\n  \n  .variables-sidebar.collapsed {\n    transform: translateX(-100%);\n  }\n}\n\n.variables-sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #e5e7eb;\n  gap: 12px;\n  min-height: 64px;\n  flex-wrap: wrap;\n}\n\n.variables-sidebar-toggle {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n\n.variables-sidebar-toggle:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #4e00ec;\n}\n\n.variables-sidebar.collapsed .variables-sidebar-toggle {\n  margin: 0 auto;\n}\n\n.variables-sidebar-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  flex: 1;\n}\n\n.variables-sidebar-title svg {\n  color: #4e00ec;\n}\n\n.variables-count {\n  background: #4e00ec;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  margin-left: auto;\n}\n\n.variables-history-select {\n  width: 100%;\n  padding: 6px 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: white;\n  color: #1e293b;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n\n.variables-history-select:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n\n.variables-history-select:focus {\n  outline: none;\n  border-color: #4e00ec;\n  box-shadow: 0 0 0 3px rgba(78, 0, 236, 0.1);\n}\n\n.variables-history-info {\n  padding: 10px 12px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 12px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.history-count {\n  font-weight: 600;\n  color: #4e00ec;\n}\n\n.variables-sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.variables-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n}\n\n.variable-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.variable-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(78, 0, 236, 0.1);\n}\n\n.variable-item:active {\n  transform: translateY(0);\n}\n\n.variable-item-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.variable-name {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4e00ec;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5dbff;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.variable-type {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n\n.variable-description {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.variable-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.variable-count {\n  font-size: 11px;\n  color: #64748b;\n  background: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n}\n\n.variable-preview {\n  font-size: 12px;\n  color: #475569;\n  background: white;\n  padding: 6px 8px;\n  border-radius: 4px;\n  border: 1px solid #e5e7eb;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.4;\n}\n\n/* Scrollbar styling */\n.variables-sidebar-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.variables-sidebar-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.variables-sidebar-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.variables-sidebar-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n/* Animation */\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.variables-sidebar {\n  animation: slideIn 0.3s ease-out;\n}\n\n/* Floating toggle button when sidebar is collapsed */\n.variables-sidebar-floating-toggle {\n  position: fixed;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 64px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-left: none;\n  border-radius: 0 8px 8px 0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  z-index: 999;\n  transition: all 0.2s;\n  color: #64748b;\n}\n\n.variables-sidebar-floating-toggle:hover {\n  background: #f8fafc;\n  color: #4e00ec;\n  box-shadow: 2px 0 12px rgba(78, 0, 236, 0.2);\n}\n\n.variables-floating-count {\n  font-size: 11px;\n  font-weight: 600;\n  background: #4e00ec;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n\n.no-variables-message {\n  padding: 24px 16px;\n  text-align: center;\n  color: #64748b;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin: 12px;\n}\n\n.no-variables-message p {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n}\n\n.no-variables-message p:last-child {\n  margin-bottom: 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/WorkspacePanel.css":
/*!*****************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/WorkspacePanel.css ***!
  \*****************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".workspace-panel {\n  position: fixed;\n  top: 48px;\n  right: 0;\n  bottom: 32px;\n  width: 300px;\n  background: white;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  z-index: 800;\n  transition: transform 0.3s ease;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.05);\n}\n\n.workspace-panel.closed {\n  transform: translateX(100%);\n}\n\n.workspace-panel.open {\n  transform: translateX(0);\n}\n\n.workspace-panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.workspace-panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.workspace-panel-actions {\n  display: flex;\n  gap: 4px;\n}\n\n.workspace-refresh-btn,\n.workspace-close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n\n.workspace-refresh-btn:hover,\n.workspace-close-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n\n.workspace-panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n\n.workspace-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center;\n  color: #ef4444;\n}\n\n.workspace-error button {\n  margin-top: 12px;\n  padding: 6px 16px;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.workspace-error button:hover {\n  background: #dc2626;\n}\n\n.workspace-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  text-align: center;\n  color: #9ca3af;\n}\n\n.workspace-empty .empty-icon {\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n\n.workspace-empty p {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n  color: #6b7280;\n}\n\n.workspace-empty small {\n  font-size: 12px;\n  color: #9ca3af;\n}\n\n.file-tree {\n  font-size: 13px;\n}\n\n.file-tree-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background 0.2s;\n  position: relative;\n  user-select: none;\n}\n\n.file-tree-item:hover {\n  background: #f3f4f6;\n}\n\n.file-tree-item.highlighted {\n  background: #dbeafe !important;\n  border: 1px solid #3b82f6;\n  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.3);\n}\n\n.file-tree-item.directory {\n  font-weight: 500;\n  color: #374151;\n}\n\n.file-tree-item.file {\n  color: #6b7280;\n}\n\n.folder-icon {\n  flex-shrink: 0;\n  color: #9ca3af;\n}\n\n.folder-icon-spacer {\n  width: 16px;\n  flex-shrink: 0;\n}\n\n.item-icon {\n  flex-shrink: 0;\n  color: #667eea;\n}\n\n.file-tree-item.file .item-icon {\n  color: #94a3b8;\n}\n\n.item-name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.download-icon-btn {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  transition: all 0.2s;\n}\n\n.file-tree-item:hover .download-icon-btn {\n  opacity: 1;\n}\n\n.download-icon-btn:hover {\n  background: #e5e7eb;\n  color: #667eea;\n}\n\n.folder-children {\n  margin-top: 2px;\n}\n\n.workspace-toggle-btn {\n  position: fixed;\n  top: 60px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 750;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  color: #667eea;\n}\n\n.workspace-toggle-btn:hover {\n  background: #f9fafb;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n\n/* File Viewer Modal */\n.file-viewer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  animation: fadeIn 0.2s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.file-viewer-modal {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slideUp 0.3s ease;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.file-viewer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 12px 12px 0 0;\n}\n\n.file-viewer-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.file-viewer-title svg {\n  color: #667eea;\n}\n\n.file-viewer-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.file-viewer-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.file-viewer-btn:hover {\n  background: #5568d3;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n\n.file-viewer-close {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n\n.file-viewer-close:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n\n.file-viewer-content {\n  flex: 1;\n  overflow: auto;\n  padding: 20px;\n  background: #fafafa;\n}\n\n.file-viewer-content pre {\n  margin: 0;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n.workspace-loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n\n.workspace-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.workspace-panel-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.workspace-panel-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.workspace-panel-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.workspace-panel-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.file-viewer-content::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.file-viewer-content::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n\n.file-viewer-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n\n.file-viewer-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n/* Delete functionality styles */\n.file-actions {\n  display: flex;\n  gap: 4px;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n.file-tree-item:hover .file-actions {\n  opacity: 1;\n}\n\n.delete-icon-btn {\n  background: none;\n  border: none;\n  padding: 2px;\n  border-radius: 3px;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.delete-icon-btn:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.delete-confirmation-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.delete-confirmation-modal {\n  background: white;\n  border-radius: 8px;\n  padding: 0;\n  max-width: 400px;\n  width: 90%;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n\n.delete-confirmation-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 20px 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.delete-confirmation-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.delete-icon {\n  color: #dc2626;\n}\n\n.delete-confirmation-content {\n  padding: 16px 20px;\n}\n\n.delete-confirmation-content p {\n  margin: 0 0 8px 0;\n  color: #374151;\n  font-size: 14px;\n}\n\n.delete-warning {\n  color: #dc2626;\n  font-weight: 500;\n}\n\n.delete-confirmation-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 16px 20px 20px 20px;\n  border-top: 1px solid #e5e7eb;\n}\n\n.delete-cancel-btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.delete-cancel-btn:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n\n.delete-confirm-btn {\n  padding: 8px 16px;\n  border: none;\n  background: #dc2626;\n  color: white;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.delete-confirm-btn:hover:not(:disabled) {\n  background: #b91c1c;\n}\n\n.delete-cancel-btn:disabled,\n.delete-confirm-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n/* Drag and drop styles */\n.workspace-panel.drag-over {\n  border-color: #667eea;\n  box-shadow: -2px 0 12px rgba(102, 126, 234, 0.3);\n}\n\n.workspace-drag-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(102, 126, 234, 0.1);\n  border: 2px dashed #667eea;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  pointer-events: none;\n}\n\n.workspace-drag-content {\n  text-align: center;\n  color: #667eea;\n}\n\n.workspace-drag-icon {\n  font-size: 48px;\n  margin-bottom: 12px;\n  animation: bounce 1s infinite;\n}\n\n.workspace-drag-text {\n  font-size: 16px;\n  font-weight: 600;\n  color: #667eea;\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n\n\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/WorkspacePanel.css"],"names":[],"mappings":"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","sourcesContent":[".workspace-panel {\n  position: fixed;\n  top: 48px;\n  right: 0;\n  bottom: 32px;\n  width: 300px;\n  background: white;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  z-index: 800;\n  transition: transform 0.3s ease;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.05);\n}\n\n.workspace-panel.closed {\n  transform: translateX(100%);\n}\n\n.workspace-panel.open {\n  transform: translateX(0);\n}\n\n.workspace-panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n\n.workspace-panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.workspace-panel-actions {\n  display: flex;\n  gap: 4px;\n}\n\n.workspace-refresh-btn,\n.workspace-close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n\n.workspace-refresh-btn:hover,\n.workspace-close-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n\n.workspace-panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n\n.workspace-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center;\n  color: #ef4444;\n}\n\n.workspace-error button {\n  margin-top: 12px;\n  padding: 6px 16px;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.workspace-error button:hover {\n  background: #dc2626;\n}\n\n.workspace-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  text-align: center;\n  color: #9ca3af;\n}\n\n.workspace-empty .empty-icon {\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n\n.workspace-empty p {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n  color: #6b7280;\n}\n\n.workspace-empty small {\n  font-size: 12px;\n  color: #9ca3af;\n}\n\n.file-tree {\n  font-size: 13px;\n}\n\n.file-tree-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background 0.2s;\n  position: relative;\n  user-select: none;\n}\n\n.file-tree-item:hover {\n  background: #f3f4f6;\n}\n\n.file-tree-item.highlighted {\n  background: #dbeafe !important;\n  border: 1px solid #3b82f6;\n  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.3);\n}\n\n.file-tree-item.directory {\n  font-weight: 500;\n  color: #374151;\n}\n\n.file-tree-item.file {\n  color: #6b7280;\n}\n\n.folder-icon {\n  flex-shrink: 0;\n  color: #9ca3af;\n}\n\n.folder-icon-spacer {\n  width: 16px;\n  flex-shrink: 0;\n}\n\n.item-icon {\n  flex-shrink: 0;\n  color: #667eea;\n}\n\n.file-tree-item.file .item-icon {\n  color: #94a3b8;\n}\n\n.item-name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.download-icon-btn {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  transition: all 0.2s;\n}\n\n.file-tree-item:hover .download-icon-btn {\n  opacity: 1;\n}\n\n.download-icon-btn:hover {\n  background: #e5e7eb;\n  color: #667eea;\n}\n\n.folder-children {\n  margin-top: 2px;\n}\n\n.workspace-toggle-btn {\n  position: fixed;\n  top: 60px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 750;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  color: #667eea;\n}\n\n.workspace-toggle-btn:hover {\n  background: #f9fafb;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n\n/* File Viewer Modal */\n.file-viewer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  animation: fadeIn 0.2s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.file-viewer-modal {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slideUp 0.3s ease;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.file-viewer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 12px 12px 0 0;\n}\n\n.file-viewer-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.file-viewer-title svg {\n  color: #667eea;\n}\n\n.file-viewer-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.file-viewer-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.file-viewer-btn:hover {\n  background: #5568d3;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n\n.file-viewer-close {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n\n.file-viewer-close:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n\n.file-viewer-content {\n  flex: 1;\n  overflow: auto;\n  padding: 20px;\n  background: #fafafa;\n}\n\n.file-viewer-content pre {\n  margin: 0;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n.workspace-loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n\n.workspace-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.workspace-panel-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.workspace-panel-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.workspace-panel-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n\n.workspace-panel-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.file-viewer-content::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.file-viewer-content::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n\n.file-viewer-content::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n\n.file-viewer-content::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n/* Delete functionality styles */\n.file-actions {\n  display: flex;\n  gap: 4px;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n.file-tree-item:hover .file-actions {\n  opacity: 1;\n}\n\n.delete-icon-btn {\n  background: none;\n  border: none;\n  padding: 2px;\n  border-radius: 3px;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.delete-icon-btn:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.delete-confirmation-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.delete-confirmation-modal {\n  background: white;\n  border-radius: 8px;\n  padding: 0;\n  max-width: 400px;\n  width: 90%;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n\n.delete-confirmation-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 20px 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.delete-confirmation-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.delete-icon {\n  color: #dc2626;\n}\n\n.delete-confirmation-content {\n  padding: 16px 20px;\n}\n\n.delete-confirmation-content p {\n  margin: 0 0 8px 0;\n  color: #374151;\n  font-size: 14px;\n}\n\n.delete-warning {\n  color: #dc2626;\n  font-weight: 500;\n}\n\n.delete-confirmation-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 16px 20px 20px 20px;\n  border-top: 1px solid #e5e7eb;\n}\n\n.delete-cancel-btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.delete-cancel-btn:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n\n.delete-confirm-btn {\n  padding: 8px 16px;\n  border: none;\n  background: #dc2626;\n  color: white;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.delete-confirm-btn:hover:not(:disabled) {\n  background: #b91c1c;\n}\n\n.delete-cancel-btn:disabled,\n.delete-confirm-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n/* Drag and drop styles */\n.workspace-panel.drag-over {\n  border-color: #667eea;\n  box-shadow: -2px 0 12px rgba(102, 126, 234, 0.3);\n}\n\n.workspace-drag-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(102, 126, 234, 0.1);\n  border: 2px dashed #667eea;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  pointer-events: none;\n}\n\n.workspace-drag-content {\n  text-align: center;\n  color: #667eea;\n}\n\n.workspace-drag-icon {\n  font-size: 48px;\n  margin-bottom: 12px;\n  animation: bounce 1s infinite;\n}\n\n.workspace-drag-text {\n  font-size: 16px;\n  font-weight: 600;\n  color: #667eea;\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/WriteableElementExample.css":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../agentic_chat/src/WriteableElementExample.css ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".floating-toggle {\n  width: fit-content;\n  margin-bottom: 6px;\n  top: 20px;\n  right: 20px;\n  background: #e0f2fe;\n  border-radius: 20px;\n  border: 1px solid #b3e5fc;\n  cursor: pointer;\n  z-index: 1000;\n  transition: all 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  height: 32px;\n  box-sizing: border-box;\n}\n\n.floating-toggle:hover {\n  background: #b3e5fc;\n  transform: translateY(-1px);\n}\n\n.toggle-icon {\n  font-size: 14px;\n  line-height: 1;\n}\n\n.toggle-text {\n  font-size: 12px;\n  font-weight: 500;\n  color: #0277bd;\n  line-height: 1;\n}\n\n/* Mobile positioning */\n@media (max-width: 768px) {\n  .floating-toggle {\n    top: 15px;\n    right: 15px;\n    height: 30px;\n    padding: 5px 10px;\n  }\n\n  .toggle-icon {\n    font-size: 13px;\n  }\n\n  .toggle-text {\n    font-size: 11px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../agentic_chat/src/WriteableElementExample.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,8EAA8E;EAC9E,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,cAAc;AAChB;;AAEA,uBAAuB;AACvB;EACE;IACE,SAAS;IACT,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":[".floating-toggle {\n  width: fit-content;\n  margin-bottom: 6px;\n  top: 20px;\n  right: 20px;\n  background: #e0f2fe;\n  border-radius: 20px;\n  border: 1px solid #b3e5fc;\n  cursor: pointer;\n  z-index: 1000;\n  transition: all 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  height: 32px;\n  box-sizing: border-box;\n}\n\n.floating-toggle:hover {\n  background: #b3e5fc;\n  transform: translateY(-1px);\n}\n\n.toggle-icon {\n  font-size: 14px;\n  line-height: 1;\n}\n\n.toggle-text {\n  font-size: 12px;\n  font-weight: 500;\n  color: #0277bd;\n  line-height: 1;\n}\n\n/* Mobile positioning */\n@media (max-width: 768px) {\n  .floating-toggle {\n    top: 15px;\n    right: 15px;\n    height: 30px;\n    padding: 5px 10px;\n  }\n\n  .toggle-icon {\n    font-size: 13px;\n  }\n\n  .toggle-text {\n    font-size: 11px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js");
/* harmony import */ var agentic_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! agentic_chat */ "../agentic_chat/src/App.tsx");



function renderApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element with id 'root' not found in index.html");
  }
  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(agentic_chat__WEBPACK_IMPORTED_MODULE_2__.App, null));
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderApp);
} else {
  renderApp();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "4f4165d487d9f9536807" + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@carbon/ai-chat-examples-web-components-basic:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] = self["webpackChunk_carbon_ai_chat_examples_web_components_basic"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/App.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.8c60ff8f191931563c8e.js.map