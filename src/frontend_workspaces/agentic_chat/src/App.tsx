import { useState, Component, ErrorInfo, ReactNode, useCallback, useRef } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { CustomChat } from "./CustomChat";
import { ConfigHeader } from "./ConfigHeader";
import { LeftSidebar } from "./LeftSidebar";
import { StatusBar } from "./StatusBar";
import { WorkspacePanel } from "./WorkspacePanel";
import { FileAutocomplete } from "./FileAutocomplete";
import "./AppLayout.css";
import "./mockApi";
import "./workspaceThrottle"; // Enforce 3-second minimum interval between workspace API calls

// Error Boundary Component
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message || "Unknown error"}</p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function App() {
  const [globalVariables, setGlobalVariables] = useState<Record<string, any>>({});
  const [variablesHistory, setVariablesHistory] = useState<Array<{
    id: string;
    title: string;
    timestamp: number;
    variables: Record<string, any>;
  }>>([]);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [workspacePanelOpen, setWorkspacePanelOpen] = useState(false);
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [highlightedFile, setHighlightedFile] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"conversations" | "variables" | "savedflows">("conversations");
  const [previousVariablesCount, setPreviousVariablesCount] = useState(0);
  const [previousHistoryLength, setPreviousHistoryLength] = useState(0);
  const leftSidebarRef = useRef<{ addConversation: (title: string) => void } | null>(null);

  // Handle variables updates from CustomChat
  const handleVariablesUpdate = useCallback((variables: Record<string, any>, history: Array<any>) => {
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
  const handleMessageSent = useCallback((message: string) => {
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

  return (
    <ErrorBoundary>
      <div className="app-layout">
        <ConfigHeader
          onToggleLeftSidebar={() => setLeftSidebarCollapsed(!leftSidebarCollapsed)}
          onToggleWorkspace={() => setWorkspacePanelOpen(!workspacePanelOpen)}
          leftSidebarCollapsed={leftSidebarCollapsed}
          workspaceOpen={workspacePanelOpen}
        />
        <div className="main-layout">
          <LeftSidebar
            globalVariables={globalVariables}
            variablesHistory={variablesHistory}
            selectedAnswerId={selectedAnswerId}
            onSelectAnswer={setSelectedAnswerId}
            isCollapsed={leftSidebarCollapsed}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            leftSidebarRef={leftSidebarRef}
          />
          <div className="chat-container">
            <CustomChat
              onVariablesUpdate={handleVariablesUpdate}
              onFileAutocompleteOpen={() => setWorkspacePanelOpen(true)}
              onFileHover={setHighlightedFile}
              onMessageSent={handleMessageSent}
            />
          </div>
          <WorkspacePanel
            isOpen={workspacePanelOpen}
            onToggle={() => setWorkspacePanelOpen(!workspacePanelOpen)}
            highlightedFile={highlightedFile}
          />
        </div>
        <StatusBar />
        <FileAutocomplete
          onFileSelect={(path) => console.log("File selected:", path)}
          onAutocompleteOpen={() => setWorkspacePanelOpen(true)}
          onFileHover={setHighlightedFile}
          disabled={false}
        />
      </div>
    </ErrorBoundary>
  );
}

export function BootstrapAgentic(contentRoot: HTMLElement) {
  // Create a root for React to render into.
  console.log("Bootstrapping Agentic Chat in sidepanel");
  const root = createRoot(contentRoot);
  // Render the App component into the root.
  root.render(
      <App />
  );
}