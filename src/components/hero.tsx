/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import {
  UpDown,
  UpDownWide,
  UpDownWideRotate,
  UpDownOpacity,
  Rotatee,
  FlipSatellite,
} from "../styles/animations";
import { hidden } from "../styles/utils";
// @ts-ignore
import Intro from "../sections/intro.mdx";
import "./sky.css";
import Lottie from "lottie-web";
import animate from "lottie-web";
import { useRef, useEffect } from "react";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <div className="hero">
      <div id="sky">
        <span>
          <s></s>
          <s></s>
          <s></s>
          <s></s>
          <s></s>
        </span>
      </div>
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
          className="container"
          ref={container}
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
        <UpDown>
          <img
            src="/nodes2.png"
            alt=""
            color="icon_orange"
            sx={{
              position: `relative`,
              top: `10%`,
              width: "55%",
              margin: "1rem",
              "@media screen and (max-width: 600px)": {
                top: "60%",
                width: "60%",
              },
            }}
          />
        </UpDown>
        <FlipSatellite>
          <img
            src="/satellite.png"
            alt=""
            color="icon_orange"
            sx={{
              position: `relative`,
              width: `70%`,
              right: [`4rem`, "6rem", `8.5rem`, `10rem`],
              top: [`10rem`, `12rem`, `18rem`, `23rem`],
            }}
          />
        </FlipSatellite>
      </Content>
    </div>
  );
};

export default Hero;
