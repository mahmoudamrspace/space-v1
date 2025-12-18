/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/react";

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(200px);
  }
`;

const flip = keyframes`
  from {
    transform: translateY(0) rotate(20deg) scale(-1, -1);
  }
  to {
    transform: translateY(10px) rotate(30deg) scale(-1, -1);
  }
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.7;
    transform: scale3d(1, 1, 1);
  }
  50% {
    opacity: 1;
    transform: scale3d(1.05, 1.05, 1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(5px, -10px, 0);
  }
`;

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(15px, -20px, 0) rotate(2deg);
  }
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;


const flipAnimation = css`
  ${flip} 20s ease-in-out infinite alternate;
`;

const twinkleAnimation = css`
  ${twinkle} 4s ease-in-out infinite;
  will-change: opacity, transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const floatAnimation = css`
  ${float} 8s ease-in-out infinite;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const driftAnimation = css`
  ${drift} 25s ease-in-out infinite;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export function UpDown({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownAnimation};
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownWideAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function FlipSatellite({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${flipAnimation};
        position: relative;
        width: 50px;
        height: 80px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function Twinkle({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${twinkleAnimation};
        position: relative;
      `}
    >
      {children}
    </div>
  );
}

export function Float({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${floatAnimation};
        position: relative;
      `}
    >
      {children}
    </div>
  );
}

export function Drift({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${driftAnimation};
        position: relative;
      `}
    >
      {children}
    </div>
  );
}

export const waveAnimation = (length: string) =>
  `${wave} ${length} linear infinite alternate`;
