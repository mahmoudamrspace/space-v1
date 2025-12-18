/** @jsx jsx */
import { useRef, useState, useEffect } from "react";
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, Float, Twinkle, Drift } from "../styles/animations";
import LazyImage from "./LazyImage";
import { getNebulaDividerGradient } from "../styles/space-utils";
// Helper function to get image path from require
type ImageModule = string | { default?: string; src?: string } | undefined;
const getImagePath = (img: ImageModule): string => {
  if (typeof img === "string") return img;
  if (img?.default) return img.default;
  if (img?.src) return img.src;
  return String(img || "");
};

// Gatsby handles image imports at build time
const Html = getImagePath(require("../assets/images/html.png"));
const Css = getImagePath(require("../assets/images/css.png"));
const Js = getImagePath(require("../assets/images/js.png"));
const Docker = getImagePath(require("../assets/images/docker.png"));
const Mongo = getImagePath(require("../assets/images/mongo.png"));
const Node = getImagePath(require("../assets/images/nodejs.png"));
const Python = getImagePath(require("../assets/images/python.png"));
const React = getImagePath(require("../assets/images/react.png"));
const Redis = getImagePath(require("../assets/images/redis.png"));
const Ts = getImagePath(require("../assets/images/typescript.png"));
const Api = getImagePath(require("../assets/images/api.png"));
const Sql = getImagePath(require("../assets/images/sql.png"));
const DevOps = getImagePath(require("../assets/images/DevOps.png"));

const Stack = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dotPositions, setDotPositions] = useState<
    Array<{ x: number; y: number }>
  >([]);

  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const positions: Array<{ x: number; y: number }> = [];

      iconsRef.current.forEach((iconElement) => {
        if (iconElement) {
          // Find the actual image or svg element inside the wrapper
          const img =
            iconElement.querySelector("img") ||
            iconElement.querySelector("svg");
          const element = img || iconElement;
          const elementRect = element.getBoundingClientRect();

          // Calculate center X position
          const relativeX =
            ((elementRect.left + elementRect.width / 2 - containerRect.left) /
              containerRect.width) *
            100;
          // Calculate top Y position aligned with the top of the icon
          const relativeY =
            ((elementRect.top - containerRect.top) / containerRect.height) *
            100;
          positions.push({ x: relativeX, y: relativeY });
        }
      });

      setDotPositions(positions);
    };

    // Wait for images to load and then calculate positions
    const calculateAfterLoad = () => {
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(() => {
        setTimeout(calculatePositions, 50);
      });
    };

    // Calculate positions after initial render with multiple attempts
    calculateAfterLoad();
    setTimeout(calculateAfterLoad, 200);
    setTimeout(calculateAfterLoad, 500);

    // Recalculate on resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateAfterLoad, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Also recalculate when images load
    const images = containerRef.current?.querySelectorAll("img");
    images?.forEach((img) => {
      if (img.complete) {
        calculateAfterLoad();
      } else {
        img.addEventListener("load", calculateAfterLoad, { once: true });
      }
    });

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Divider
        bg={getNebulaDividerGradient("blue")}
        speed={0.1}
        offset={offset}
        factor={factor}
        zIndex={100}
      >
        <UpDown>
          <Svg
            icon='box'
            hiddenMobile
            width={6}
            color='icon_blue'
            left='50%'
            top='70%'
          />
          <Svg
            icon='upDown'
            hiddenMobile
            width={8}
            color='icon_darkest'
            left='70%'
            top='20%'
          />
          <Svg
            icon='triangle'
            width={8}
            stroke
            color='icon_darkest'
            left='90%'
            top='35%'
          />
          <Svg
            icon='upDown'
            hiddenMobile
            width={20}
            color='icon_green'
            left='7%'
            top='30%'
          />
        </UpDown>
        <Svg
          icon='circle'
          hiddenMobile
          width={6}
          color='icon_brightest'
          left='4%'
          top='20%'
        />
        <Svg icon='box' width={12} color='icon_darkest' left='20%' top='30%' />
        <Svg
          icon='hexa'
          width={12}
          stroke
          color='icon_orange'
          left='80%'
          top='70%'
        />
      </Divider>
      <Content speed={0.4} offset={offset + 0.1} factor={factor}>
        <Inner>
          {/* <StackMDX /> */}
          <div
            ref={containerRef}
            sx={{
              position: "relative",
              marginTop: "5rem",
              minHeight: "400px",
            }}
          >
            {/* Enhanced constellation lines connecting technologies */}
            <div
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                opacity: 0.3,
                zIndex: 1,
              }}
            >
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <defs>
                  {/* Simplified subtle glow filter */}
                  <filter id='whiteGlow' x='-50%' y='-50%' width='200%' height='200%'>
                    <feGaussianBlur stdDeviation='2' result='coloredBlur' />
                    <feMerge>
                      <feMergeNode in='coloredBlur' />
                      <feMergeNode in='SourceGraphic' />
                    </feMerge>
                  </filter>
                </defs>

                {/* Simplified constellation - only main chains */}
                {dotPositions.length >= 2 && (
                  <g>
                    {/* Frontend chain: HTML → CSS → JS → TS → React → Next.js */}
                    {dotPositions.length > 5 &&
                      [0, 1, 2, 3, 4].map(
                        (i) =>
                          dotPositions[i] &&
                          dotPositions[i + 1] && (
                            <line
                              key={`frontend-${i}`}
                              x1={`${dotPositions[i].x}%`}
                              y1={`${dotPositions[i].y}%`}
                              x2={`${dotPositions[i + 1].x}%`}
                              y2={`${dotPositions[i + 1].y}%`}
                              stroke='rgba(255, 255, 255, 0.3)'
                              strokeWidth='1'
                              strokeDasharray='4,4'
                            />
                          )
                      )}

                    {/* Database/DevOps chain: SQL → Mongo → Redis → Docker → DevOps */}
                    {dotPositions.length > 15 &&
                      [11, 12, 13, 14].map(
                        (i) =>
                          dotPositions[i] &&
                          dotPositions[i + 1] && (
                            <line
                              key={`database-${i}`}
                              x1={`${dotPositions[i].x}%`}
                              y1={`${dotPositions[i].y}%`}
                              x2={`${dotPositions[i + 1].x}%`}
                              y2={`${dotPositions[i + 1].y}%`}
                              stroke='rgba(255, 255, 255, 0.3)'
                              strokeWidth='1'
                              strokeDasharray='4,4'
                            />
                          )
                      )}
                  </g>
                )}

                {/* Subtle dots at technology positions */}
                {dotPositions.map((pos, index) => (
                  <circle
                    key={index}
                    cx={`${pos.x}%`}
                    cy={`${pos.y}%`}
                    r='1.5'
                    fill='rgba(255, 255, 255, 0.5)'
                  />
                ))}
              </svg>
            </div>

            <div
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Float>
                <div ref={(el) => (iconsRef.current[0] = el)}>
                  <LazyImage
                    src={Html}
                    width={50}
                    alt='HTML programming language icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(255, 140, 0, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(255, 140, 0, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Float>
              <Twinkle>
                <div ref={(el) => (iconsRef.current[1] = el)}>
                  <LazyImage
                    src={Css}
                    width={50}
                    alt='CSS styling language icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(30, 144, 255, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(30, 144, 255, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Twinkle>
              <Drift>
                <div ref={(el) => (iconsRef.current[2] = el)}>
                  <LazyImage
                    src={Js}
                    width={50}
                    alt='JavaScript programming language icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(255, 240, 0, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(255, 240, 0, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Drift>
              <Float>
                <div ref={(el) => (iconsRef.current[3] = el)}>
                  <LazyImage
                    src={Ts}
                    width={50}
                    alt='TypeScript programming language icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(49, 120, 198, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(49, 120, 198, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Float>
              <Twinkle>
                <div ref={(el) => (iconsRef.current[4] = el)}>
                  <LazyImage
                    src={React}
                    width={50}
                    alt='React JavaScript framework icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(97, 218, 251, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(97, 218, 251, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Twinkle>
              <Drift>
                <div ref={(el) => (iconsRef.current[5] = el)}>
                  <svg
                    width='50px'
                    height='50px'
                    viewBox='0 0 256 256'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    preserveAspectRatio='xMidYMid'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
                      "&:hover": {
                        filter:
                          "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <g>
                      <path
                        d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
                        fill='#000000'
                      ></path>
                    </g>
                  </svg>
                </div>
              </Drift>
              <Float>
                <div ref={(el) => (iconsRef.current[6] = el)}>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 256 270'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin meet'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(221, 27, 22, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(221, 27, 22, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <path
                      d='M127.606.341L.849 44.95 20.88 211.022l106.86 58.732 107.412-59.528L255.175 44.16 127.606.341z'
                      fill='#B3B3B3'
                    />
                    <path
                      d='M242.532 53.758L127.31 14.466v241.256l96.561-53.441 18.66-148.523z'
                      fill='#A6120D'
                    />
                    <path
                      d='M15.073 54.466l17.165 148.525 95.07 52.731V14.462L15.074 54.465z'
                      fill='#DD1B16'
                    />
                    <path
                      d='M159.027 142.898L127.31 157.73H93.881l-15.714 39.305-29.228.54L127.31 23.227l31.717 119.672zm-3.066-7.467l-28.44-56.303-23.329 55.334h23.117l28.652.97z'
                      fill='#F2F2F2'
                    />
                    <path
                      d='M127.309 23.226l.21 55.902 26.47 55.377h-26.62l-.06 23.189 36.81.035 17.204 39.852 27.967.518-81.981-174.873z'
                      fill='#B3B3B3'
                    />
                  </svg>
                </div>
              </Float>
              <Twinkle>
                <div ref={(el) => (iconsRef.current[7] = el)}>
                  <LazyImage
                    src={Python}
                    width={50}
                    alt='Python programming language icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(255, 223, 0, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(255, 223, 0, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Twinkle>
              <Drift>
                <div ref={(el) => (iconsRef.current[8] = el)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='70'
                    height='50'
                    viewBox='0 0 436.506 152.503'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(0, 46, 34, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(0, 46, 34, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <g fill='#092e20'>
                      <path d='M51.465 0h23.871v110.496c-12.245 2.325-21.236 3.256-31.002 3.256C15.191 113.75 0 100.576 0 75.308c0-24.337 16.122-40.147 41.078-40.147 3.875 0 6.82.309 10.387 1.239V0zm0 55.62c-2.79-.929-5.115-1.239-8.061-1.239-12.091 0-19.067 7.441-19.067 20.461 0 12.712 6.666 19.687 18.912 19.687 2.635 0 4.806-.154 8.216-.619V55.62z' />
                      <path d='M113.312 36.865v55.338c0 19.067-1.396 28.213-5.58 36.118-3.876 7.597-8.992 12.401-19.532 17.673l-22.167-10.541c10.541-4.961 15.656-9.3 18.911-15.968 3.411-6.819 4.497-14.726 4.497-35.497V36.865h23.871zM89.441.127h23.871v24.492H89.441V.127zM127.731 42.29c10.542-4.959 20.617-7.129 31.623-7.129 12.246 0 20.306 3.254 23.872 9.61 2.014 3.565 2.634 8.215 2.634 18.137v48.517c-10.697 1.55-24.182 2.636-34.102 2.636-19.996 0-28.988-6.978-28.988-22.478 0-16.743 11.936-24.493 41.233-26.974v-5.27c0-4.34-2.17-5.889-8.216-5.889-8.835 0-18.756 2.48-28.058 7.286l.002-18.446zm37.359 37.978c-15.812 1.55-20.928 4.03-20.928 10.231 0 4.649 2.946 6.819 9.456 6.819 3.566 0 6.82-.309 11.471-1.084l.001-15.966zM197.487 40.585c14.105-3.72 25.731-5.424 37.512-5.424 12.246 0 21.082 2.789 26.354 8.215 4.96 5.114 6.509 10.694 6.509 22.632v46.812H243.99V66.938c0-9.145-3.1-12.557-11.625-12.557-3.255 0-6.2.31-11.007 1.705v56.734h-23.871V40.585zM277.142 125.841c8.372 4.341 16.742 6.354 25.577 6.354 15.654 0 22.32-6.354 22.32-21.546v-.465c-4.649 2.324-9.301 3.255-15.5 3.255-20.927 0-34.26-13.796-34.26-35.651 0-27.129 19.688-42.474 54.564-42.474 10.231 0 19.688 1.084 31.158 3.409l-8.174 17.219c-6.355-1.24-.509-.166-5.312-.631v2.481l.309 10.074.154 13.022c.155 3.254.155 6.51.311 9.765v6.512c0 20.461-1.705 30.071-6.819 37.977-7.441 11.627-20.308 17.361-38.599 17.361-9.301 0-17.359-1.395-25.731-4.65l.002-22.012zm47.434-71.305h-2.479c-4.649-.155-10.074 1.084-13.796 3.409-5.734 3.256-8.682 9.147-8.682 17.517 0 11.937 5.893 18.757 16.433 18.757 3.255 0 5.891-.621 8.989-1.55v-8.215c0-2.791-.153-5.893-.153-9.146l-.154-11.005-.156-7.906-.002-1.861zM398.062 34.85c23.871 0 38.443 15.037 38.443 39.373 0 24.958-15.19 40.614-39.373 40.614-23.873 0-38.6-15.037-38.6-39.218.002-25.114 15.194-40.769 39.53-40.769zm-.467 60.764c9.146 0 14.572-7.596 14.572-20.772 0-13.02-5.271-20.771-14.415-20.771-9.457 0-14.884 7.597-14.884 20.771.002 13.177 5.428 20.772 14.727 20.772z' />
                    </g>
                  </svg>
                </div>
              </Drift>
              <Float>
                <div ref={(el) => (iconsRef.current[9] = el)}>
                  <LazyImage
                    src={Node}
                    width={50}
                    alt='Node.js runtime environment icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(83, 158, 67, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(83, 158, 67, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Float>
              <Twinkle>
                <div ref={(el) => (iconsRef.current[10] = el)}>
                  <LazyImage
                    src={Api}
                    width={50}
                    alt='API integration icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
                      "&:hover": {
                        filter:
                          "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Twinkle>
              <Drift>
                <div ref={(el) => (iconsRef.current[11] = el)}>
                  <LazyImage
                    src={Sql}
                    width={50}
                    alt='SQL database icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(0, 123, 255, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(0, 123, 255, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Drift>
              <Float>
                <div ref={(el) => (iconsRef.current[12] = el)}>
                  <LazyImage
                    src={Mongo}
                    width={50}
                    alt='MongoDB database icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(0, 230, 118, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(0, 230, 118, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Float>
              <Twinkle>
                <div ref={(el) => (iconsRef.current[13] = el)}>
                  <LazyImage
                    src={Redis}
                    width={50}
                    alt='Redis cache database icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(220, 38, 38, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(220, 38, 38, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Twinkle>
              <Drift>
                <div ref={(el) => (iconsRef.current[14] = el)}>
                  <LazyImage
                    src={Docker}
                    width={50}
                    alt='Docker containerization icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(0, 144, 228, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(0, 144, 228, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Drift>
              <Float>
                <div ref={(el) => (iconsRef.current[15] = el)}>
                  <LazyImage
                    src={DevOps}
                    width={50}
                    alt='DevOps tools and practices icon'
                    loading='lazy'
                    sx={{
                      margin: "1rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 0 5px rgba(0, 191, 255, 0.3))",
                      "&:hover": {
                        filter: "drop-shadow(0 0 15px rgba(0, 191, 255, 0.8))",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </div>
              </Float>
            </div>
          </div>
        </Inner>
      </Content>
    </div>
  );
};

export default Stack;
