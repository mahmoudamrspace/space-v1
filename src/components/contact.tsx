/** @jsx jsx */
import { jsx } from "theme-ui";
import { useMemo } from "react";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide, waveAnimation, Float, Twinkle, Drift } from "../styles/animations";
import Footer from "./footer";
import ContactMDX from "../sections/contact.mdx";
const Contact = ({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) => {
  // Generate particle positions and animations once to prevent infinite re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
  <div>
    <Divider
      fill='rgba(138, 43, 226, 0.4)'
      speed={0.2}
      offset={offset}
      factor={factor}
      zIndex={2}
    >
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <div
          sx={{
            position: `relative`,
            height: `full`,
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='contact-wave'
            viewBox='0 0 800 338.05'
            preserveAspectRatio='none'
            style={{ width: `100%`, height: `40vh` }}
          >
            <defs>
              <linearGradient id="spaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(192, 134, 247, 0.5)" />
                <stop offset="50%" stopColor="rgba(30, 144, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(249, 76, 168, 0.3)" />
              </linearGradient>
            </defs>
            <path
              style={{
                fill: `url(#spaceGradient)`,
                opacity: 0.6,
                animation: waveAnimation(`20s`),
              }}
            >
              <animate
                attributeName='d'
                values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
                repeatCount='indefinite'
                dur='30s'
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>

    {/* Particle effects */}
    <Divider speed={0.1} offset={offset} factor={factor} zIndex={5}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          sx={{
            position: "absolute",
            width: "2px",
            height: "2px",
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "50%",
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
            animation: `twinkle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            willChange: "opacity",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
      ))}
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <div sx={{ mt: 5, mb: 3 }}>
        <Footer />
      </div>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor} zIndex={100}>
      <UpDown>
        <Twinkle>
          <Svg
            icon='upDown'
            hiddenMobile
            width={8}
            color='icon_darkest'
            left='70%'
            top='20%'
          />
        </Twinkle>
        <Float>
          <Svg
            icon='triangle'
            width={8}
            stroke
            color='icon_darkest'
            left='25%'
            top='5%'
          />
        </Float>
      </UpDown>
      <UpDownWide>
        <Drift>
          <Svg
            icon='triangle'
            width={12}
            stroke
            color='icon_brightest'
            left='95%'
            top='50%'
          />
        </Drift>
        <Twinkle>
          <Svg
            icon='circle'
            width={6}
            color='icon_brightest'
            left='85%'
            top='15%'
          />
        </Twinkle>
        <Float>
          <Svg
            icon='upDown'
            hiddenMobile
            width={8}
            color='icon_darkest'
            left='45%'
            top='10%'
          />
        </Float>
      </UpDownWide>
      <Twinkle>
        <Svg icon='circle' width={6} color='icon_brightest' left='4%' top='20%' />
      </Twinkle>
      <Drift>
        <Svg icon='circle' width={12} color='icon_darkest' left='70%' top='60%' />
      </Drift>
      <Float>
        <Svg icon='box' width={12} color='icon_darkest' left='20%' top='30%' />
      </Float>
      <Twinkle>
        <Svg
          icon='hexa'
          width={8}
          stroke
          color='icon_darkest'
          left='80%'
          top='70%'
        />
      </Twinkle>
    </Divider>
  </div>
  );
};

export default Contact;
