import * as React from "react"
import { Global } from "@emotion/react"
import SEO from "./seo"
import SkipToContent from "./SkipToContent"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
          scrollBehavior: `smooth`,
          "@media (prefers-reduced-motion: reduce)": {
            scrollBehavior: `auto`,
          },
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
        // Focus styles for keyboard navigation
        "*:focus-visible": {
          outline: `2px solid ${theme.colors.primary}`,
          outlineOffset: `2px`,
        },
        // Ensure main is focusable
        "main": {
          "&:focus": {
            outline: "none",
          },
        },
        // Screen reader only class
        ".sr-only": {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        },
        // Touch target sizes for mobile
        "button, a": {
          "@media (max-width: 768px)": {
            minHeight: "44px",
            minWidth: "44px",
          },
        },
      })}
    />
    <SEO />
    <SkipToContent />
    <main id="main-content" className={className} tabIndex={-1}>{children}</main>
  </React.Fragment>
)

export default Layout
