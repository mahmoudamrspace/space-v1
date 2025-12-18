/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, Float, Drift, Twinkle } from "../styles/animations";
import AboutMDX from "../sections/about.mdx";

const About = ({ offset, factor }: { offset: number; factor?: number }) => (
  <div>
    {/* Floating planetary elements and constellation */}
    <Divider speed={0.1} offset={offset + 0.1} factor={factor} zIndex={10}>
      <UpDown>
        <Twinkle>
          <Svg
            icon='box'
            hiddenMobile
            width={6}
            color='icon_blue'
            left='50%'
            top='75%'
          />
        </Twinkle>
        <Float>
          <Svg
            icon='upDown'
            hiddenMobile
            width={8}
            color='icon_blue'
            left='70%'
            top='20%'
          />
        </Float>
        <Twinkle>
          <Svg
            icon='triangle'
            width={8}
            stroke
            color='icon_brightest'
            left='35%'
            top='15%'
          />
        </Twinkle>
        <Drift>
          <Svg
            icon='upDown'
            hiddenMobile
            width={24}
            color='icon_orange'
            left='90%'
            top='50%'
          />
        </Drift>
      </UpDown>
      <Twinkle>
        <Svg
          icon='circle'
          hiddenMobile
          width={6}
          color='icon_brightest'
          left='4%'
          top='20%'
        />
      </Twinkle>
      <Float>
        <Svg
          icon='circle'
          width={12}
          color='icon_orange'
          left='10%'
          top='60%'
        />
      </Float>
      <Drift>
        <Svg icon='box' width={12} color='icon_blue' left='20%' top='30%' />
      </Drift>
      <Twinkle>
        <Svg
          icon='hexa'
          width={8}
          stroke
          color='icon_blue'
          left='80%'
          top='70%'
        />
      </Twinkle>
    </Divider>

    <Content speed={0.4} offset={offset + 0.1} factor={factor}>
      <Inner>
        {/* Floating planet/moon element */}
        <Drift>
          <div
            sx={{
              position: "absolute",
              left: "15%",
              top: "25%",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, rgba(255, 200, 150, 0.3), rgba(138, 43, 226, 0.2))`,
              boxShadow: `
              0 0 20px rgba(255, 200, 150, 0.4),
              inset -20px -20px 40px rgba(0, 0, 0, 0.5)
            `,
              filter: "blur(1px)",
              "@media screen and (max-width: 600px)": {
                width: "50px",
                height: "50px",
              },
            }}
          />
        </Drift>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
);

export default About;
