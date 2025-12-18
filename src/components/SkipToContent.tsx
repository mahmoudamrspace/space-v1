/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

/**
 * Skip to content link for keyboard navigation and accessibility
 */
const SkipToContent: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.querySelector("main");
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      sx={{
        position: "absolute",
        top: "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10000,
        padding: "1rem 2rem",
        backgroundColor: "rgba(138, 43, 226, 0.9)",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        transition: "top 0.3s ease",
        "&:focus": {
          top: "1rem",
          outline: "3px solid rgba(255, 255, 255, 0.8)",
          outlineOffset: "2px",
        },
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;

