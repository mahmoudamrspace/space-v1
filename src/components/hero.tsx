/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import {
  UpDown,
  UpDownWide,
  FlipSatellite,
  Float,
  Drift,
} from "../styles/animations";
import LazyImage from "./LazyImage";
import Intro from "../sections/intro.mdx";
import { useRef, useEffect } from "react";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const container = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const initLottie = async () => {
      if (container.current && !animationInstance.current && mounted) {
        // Dynamically import Lottie to reduce initial bundle size
        const LottieModule = await import("lottie-web");
        const Lottie = LottieModule.default || LottieModule;

        if (mounted && container.current) {
          animationInstance.current = Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../astronaout.json"),
          });
          animationInstance.current.setSpeed(0.5);
        }
      }
    };

    initLottie();

    return () => {
      mounted = false;
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []);

  return (
    <div className='hero'>
      {/* Constellation lines connecting elements */}
      <Divider speed={0.1} offset={offset} factor={factor} zIndex={50}>
        <svg
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: 0.2,
          }}
        >
          <line
            x1='20%'
            y1='30%'
            x2='50%'
            y2='50%'
            stroke='rgba(255, 255, 255, 0.3)'
            strokeWidth='1'
            strokeDasharray='2,2'
          />
          <line
            x1='80%'
            y1='40%'
            x2='50%'
            y2='50%'
            stroke='rgba(255, 200, 150, 0.3)'
            strokeWidth='1'
            strokeDasharray='2,2'
          />
          <line
            x1='30%'
            y1='70%'
            x2='50%'
            y2='50%'
            stroke='rgba(200, 220, 255, 0.3)'
            strokeWidth='1'
            strokeDasharray='2,2'
          />
        </svg>
      </Divider>

      <Divider speed={0.1} offset={offset} factor={factor} zIndex={100}>
        <div
          sx={{
            height: "35%",
            position: "relative",
            right: "35%",
            top: "50%",
            "@media screen and (max-width: 600px)": {
              height: "25%",
            },
          }}
          className='container'
          ref={container}
          role='img'
          aria-label='Animated astronaut floating in space'
        ></div>
      </Divider>
      <Content
        sx={{ variant: `texts.bigger`, textAlign: "center" }}
        speed={0.4}
        offset={offset}
        factor={factor}
      >
        <Inner>
          <Intro />
        </Inner>
        <Float>
          <LazyImage
            src='/nodes2.png'
            alt='Floating nodes representing network connections'
            loading='eager'
            sx={{
              position: `relative`,
              top: `10%`,
              width: "55%",
              margin: "1rem",
            }}
          />
        </Float>
        <Drift>
          <FlipSatellite>
            <LazyImage
              src='/satellite.png'
              alt='Satellite floating in space'
              loading='lazy'
              sx={{
                position: `relative`,
                width: `70%`,
                right: [`4rem`, "6rem", `8.5rem`, `10rem`],
                top: [`10rem`, `12rem`, `18rem`, `23rem`],
                filter: "drop-shadow(0 0 15px rgba(255, 140, 0, 0.6))",
              }}
            />
          </FlipSatellite>
        </Drift>
      </Content>
    </div>
  );
};

export default Hero;
