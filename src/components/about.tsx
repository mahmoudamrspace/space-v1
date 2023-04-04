import * as React from "react";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import AboutMDX from "../sections/about.mdx";

const About = ({ offset, factor }: { offset: number; factor?: number }) => (
  <div>
          <div id="sky">
        <span>
          <s></s>
          <s></s>
          <s></s>
          <s></s>
          <s></s>
        </span>
      </div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.1}
      offset={offset}
      factor={factor}
      zIndex={2}
    />
    <Divider speed={0.1} offset={offset + 0.1} factor={factor} zIndex={10}>
      <UpDown>
        <Svg
          icon="box"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="75%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_blue"
          left="70%"
          top="20%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_brightest"
          left="35%"
          top="15%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="90%"
          top="50%"
        />
      </UpDown>
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Svg icon="circle" width={12} color="icon_orange" left="10%" top="60%" />
      <Svg icon="box" width={12} color="icon_blue" left="20%" top="30%" />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_blue"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset + 0.1} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
);

export default About;
