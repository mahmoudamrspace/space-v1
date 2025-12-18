/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            padding: "2rem",
            textAlign: "center",
          }}
          role="alert"
          aria-live="assertive"
        >
          <h2 sx={{ color: "text", mb: 2 }}>Something went wrong</h2>
          <p sx={{ color: "textMuted", mb: 3 }}>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: undefined });
              window.location.reload();
            }}
            sx={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "primary",
              color: "background",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 0.9,
                transform: "scale(1.05)",
              },
              "&:focus-visible": {
                outline: "2px solid",
                outlineOffset: "2px",
              },
            }}
            aria-label="Reload page to fix error"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

