/** @jsx jsx */
import { jsx, css } from "@emotion/react";

/**
 * Space-themed utility functions and styles
 * Provides reusable nebula gradients and space effects
 */

// Nebula gradient presets
export const nebulaGradients = {
  purple: `radial-gradient(ellipse at 20% 50%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
           radial-gradient(ellipse at 80% 80%, rgba(75, 0, 130, 0.2) 0%, transparent 50%),
           radial-gradient(ellipse at 40% 20%, rgba(186, 85, 211, 0.15) 0%, transparent 50%)`,
  
  blue: `radial-gradient(ellipse at 30% 40%, rgba(30, 144, 255, 0.25) 0%, transparent 50%),
         radial-gradient(ellipse at 70% 60%, rgba(0, 191, 255, 0.2) 0%, transparent 50%),
         radial-gradient(ellipse at 50% 80%, rgba(135, 206, 250, 0.15) 0%, transparent 50%)`,
  
  pink: `radial-gradient(ellipse at 25% 30%, rgba(255, 20, 147, 0.25) 0%, transparent 50%),
         radial-gradient(ellipse at 75% 70%, rgba(255, 105, 180, 0.2) 0%, transparent 50%),
         radial-gradient(ellipse at 50% 50%, rgba(255, 182, 193, 0.15) 0%, transparent 50%)`,
  
  orange: `radial-gradient(ellipse at 20% 60%, rgba(255, 140, 0, 0.25) 0%, transparent 50%),
           radial-gradient(ellipse at 80% 40%, rgba(255, 165, 0, 0.2) 0%, transparent 50%),
           radial-gradient(ellipse at 50% 20%, rgba(255, 192, 203, 0.15) 0%, transparent 50%)`,
  
  cosmic: `radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
           radial-gradient(ellipse at 80% 70%, rgba(30, 144, 255, 0.2) 0%, transparent 50%),
           radial-gradient(ellipse at 50% 50%, rgba(255, 20, 147, 0.15) 0%, transparent 50%),
           radial-gradient(ellipse at 30% 80%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)`,
};

// Space-themed divider gradient
export const getNebulaDividerGradient = (variant: keyof typeof nebulaGradients = 'cosmic') => {
  return `linear-gradient(135deg, 
    rgba(18, 16, 46, 0.9) 0%,
    rgba(2, 4, 9, 0.95) 50%,
    rgba(18, 16, 46, 0.9) 100%),
    ${nebulaGradients[variant]}`;
};


