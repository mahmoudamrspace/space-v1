/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import { Float, Drift, Twinkle } from "../styles/animations";
import { keyframes } from "@emotion/react";

const rotateRing = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const SpaceTransition = ({
  offset,
  factor = 1.5,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    {/* Floating planets/moons - enhanced with orbital rings and better colors - refined layout */}
    <Divider speed={0.1} offset={offset} factor={factor} zIndex={10}>
      {/* Large planet - enhanced with richer colors and orbital ring - top left */}
      <div sx={{ position: "absolute", left: "8%", top: "18%" }}>
        {/* Orbital ring */}
        <div
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: ["120px", "180px"],
            height: ["120px", "180px"],
            borderRadius: "50%",
            border: "1px solid rgba(255, 200, 150, 0.2)",
            boxShadow: "0 0 20px rgba(255, 200, 150, 0.15)",
            animation: `${rotateRing} 30s linear infinite`,
          }}
        />
        <Drift>
          <div
            sx={{
              position: "relative",
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(255, 180, 120, 0.6) 0%,
                  rgba(255, 140, 80, 0.5) 20%,
                  rgba(138, 43, 226, 0.4) 50%,
                  rgba(75, 0, 130, 0.3) 100%
                )
              `,
              boxShadow: `
                0 0 40px rgba(255, 180, 120, 0.6),
                0 0 60px rgba(138, 43, 226, 0.4),
                inset -40px -40px 80px rgba(0, 0, 0, 0.7),
                inset 20px 20px 40px rgba(255, 200, 150, 0.2)
              `,
              filter: "blur(1px)",
              "@media screen and (max-width: 600px)": {
                width: "100px",
                height: "100px",
              },
            }}
          />
        </Drift>
      </div>

      {/* Medium planet - enhanced with orbital ring - right center */}
      <div sx={{ position: "absolute", left: "72%", top: "48%" }}>
        {/* Orbital ring */}
        <div
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: ["90px", "120px"],
            height: ["90px", "120px"],
            borderRadius: "50%",
            border: "1px solid rgba(30, 144, 255, 0.25)",
            boxShadow: "0 0 15px rgba(30, 144, 255, 0.2)",
            animation: `${rotateRing} 25s linear infinite reverse`,
          }}
        />
        <Float>
          <div
            sx={{
              position: "relative",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: `
                radial-gradient(circle at 25% 25%, 
                  rgba(30, 144, 255, 0.5) 0%,
                  rgba(0, 191, 255, 0.4) 30%,
                  rgba(138, 43, 226, 0.35) 60%,
                  rgba(75, 0, 130, 0.25) 100%
                )
              `,
              boxShadow: `
                0 0 35px rgba(30, 144, 255, 0.5),
                0 0 50px rgba(138, 43, 226, 0.3),
                inset -25px -25px 60px rgba(0, 0, 0, 0.6),
                inset 15px 15px 30px rgba(30, 144, 255, 0.15)
              `,
              filter: "blur(1px)",
              "@media screen and (max-width: 600px)": {
                width: "75px",
                height: "75px",
              },
            }}
          />
        </Float>
      </div>

      {/* Small moon - enhanced - center bottom */}
      <Twinkle>
        <div
          sx={{
            position: "absolute",
            left: "48%",
            top: "68%",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: `
              radial-gradient(circle at 40% 40%, 
                rgba(255, 255, 255, 0.5) 0%,
                rgba(240, 248, 255, 0.4) 30%,
                rgba(200, 220, 255, 0.3) 60%,
                rgba(176, 196, 222, 0.2) 100%
              )
            `,
            boxShadow: `
              0 0 30px rgba(255, 255, 255, 0.4),
              0 0 45px rgba(200, 220, 255, 0.3),
              inset -20px -20px 50px rgba(0, 0, 0, 0.5),
              inset 10px 10px 25px rgba(255, 255, 255, 0.1)
            `,
            filter: "blur(0.5px)",
            "@media screen and (max-width: 600px)": {
              width: "50px",
              height: "50px",
            },
          }}
        />
      </Twinkle>

      {/* Additional planet - orange/red gas giant - top right */}
      <Drift>
        <div
          sx={{
            position: "absolute",
            left: "83%",
            top: "12%",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: `
              radial-gradient(circle at 35% 35%, 
                rgba(255, 140, 0, 0.5) 0%,
                rgba(255, 69, 0, 0.4) 25%,
                rgba(220, 20, 60, 0.35) 50%,
                rgba(139, 0, 0, 0.3) 100%
              )
            `,
            boxShadow: `
              0 0 30px rgba(255, 140, 0, 0.5),
              0 0 45px rgba(220, 20, 60, 0.3),
              inset -30px -30px 60px rgba(0, 0, 0, 0.6),
              inset 20px 20px 40px rgba(255, 140, 0, 0.15)
            `,
            filter: "blur(1px)",
            "@media screen and (max-width: 600px)": {
              width: "65px",
              height: "65px",
            },
          }}
        />
      </Drift>

      {/* Additional small planetoid - bottom left */}
      <Float>
        <div
          sx={{
            position: "absolute",
            left: "22%",
            top: "73%",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: `
              radial-gradient(circle at 45% 45%, 
                rgba(186, 85, 211, 0.4) 0%,
                rgba(138, 43, 226, 0.3) 40%,
                rgba(75, 0, 130, 0.25) 80%,
                rgba(25, 25, 112, 0.2) 100%
              )
            `,
            boxShadow: `
              0 0 25px rgba(186, 85, 211, 0.4),
              inset -15px -15px 35px rgba(0, 0, 0, 0.5),
              inset 10px 10px 20px rgba(186, 85, 211, 0.1)
            `,
            filter: "blur(0.5px)",
            "@media screen and (max-width: 600px)": {
              width: "40px",
              height: "40px",
            },
          }}
        />
      </Float>
    </Divider>

    {/* Enhanced asteroid field - better distribution and variety with refined timing */}
    <Divider speed={0.15} offset={offset} factor={factor} zIndex={8}>
      {Array.from({ length: 20 }, (_, i) => {
        const size = 3 + (i % 4) + Math.floor(i / 5) * 0.5;
        const opacity = 0.4 + (i % 4) * 0.15;
        const glowSize = 2 + (i % 3);
        const colors = [
          "rgba(255, 255, 255, ",
          "rgba(200, 220, 255, ",
          "rgba(255, 200, 150, ",
          "rgba(186, 85, 211, ",
        ];
        const color = colors[i % colors.length];

        return (
          <Float key={i}>
            <div
              sx={{
                position: "absolute",
                left: `${(i * 5.3 + 10) % 95}%`,
                top: `${(i * 7.7 + 15) % 85}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: i % 3 === 0 ? "50%" : "30%",
                background: `${color}${opacity})`,
                boxShadow: `
                  0 0 ${glowSize}px ${color}${opacity * 0.8}),
                  0 0 ${glowSize * 2}px ${color}${opacity * 0.4})
                `,
                animationDelay: `${i * 0.35}s`,
                transform: `rotate(${i * 15}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          </Float>
        );
      })}
    </Divider>

    {/* Enhanced animated constellation - expanded pattern */}
    <Divider speed={0.1} offset={offset} factor={factor} zIndex={9}>
      <div
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.4,
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Expanded constellation lines connecting stars */}
          <line
            x1='12%'
            y1='20%'
            x2='20%'
            y2='28%'
            stroke='rgba(255, 255, 255, 0.5)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))'
          />
          <line
            x1='20%'
            y1='28%'
            x2='35%'
            y2='25%'
            stroke='rgba(200, 220, 255, 0.5)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(200, 220, 255, 0.3))'
          />
          <line
            x1='35%'
            y1='25%'
            x2='45%'
            y2='35%'
            stroke='rgba(255, 200, 150, 0.5)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(255, 200, 150, 0.3))'
          />
          <line
            x1='45%'
            y1='35%'
            x2='60%'
            y2='40%'
            stroke='rgba(255, 255, 255, 0.4)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))'
          />
          <line
            x1='60%'
            y1='40%'
            x2='75%'
            y2='38%'
            stroke='rgba(186, 85, 211, 0.4)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(186, 85, 211, 0.2))'
          />
          <line
            x1='25%'
            y1='55%'
            x2='45%'
            y2='65%'
            stroke='rgba(200, 220, 255, 0.4)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(200, 220, 255, 0.2))'
          />
          <line
            x1='45%'
            y1='65%'
            x2='65%'
            y2='62%'
            stroke='rgba(255, 200, 150, 0.4)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(255, 200, 150, 0.2))'
          />
          <line
            x1='65%'
            y1='62%'
            x2='80%'
            y2='70%'
            stroke='rgba(255, 255, 255, 0.35)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(255, 255, 255, 0.15))'
          />
          <line
            x1='15%'
            y1='45%'
            x2='25%'
            y2='55%'
            stroke='rgba(30, 144, 255, 0.4)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(30, 144, 255, 0.2))'
          />
          <line
            x1='55%'
            y1='20%'
            x2='60%'
            y2='40%'
            stroke='rgba(255, 140, 0, 0.4)'
            strokeWidth='1.5'
            strokeDasharray='4,4'
            filter='drop-shadow(0 0 2px rgba(255, 140, 0, 0.2))'
          />
          {/* Expanded constellation stars with varied sizes and colors */}
          {[
            {
              x: "12%",
              y: "20%",
              size: 2.5,
              color: "rgba(255, 255, 255, 0.8)",
            },
            { x: "20%", y: "28%", size: 2, color: "rgba(200, 220, 255, 0.75)" },
            { x: "35%", y: "25%", size: 3, color: "rgba(255, 200, 150, 0.8)" },
            {
              x: "45%",
              y: "35%",
              size: 2.5,
              color: "rgba(255, 255, 255, 0.7)",
            },
            {
              x: "60%",
              y: "40%",
              size: 2.5,
              color: "rgba(186, 85, 211, 0.75)",
            },
            { x: "75%", y: "38%", size: 2, color: "rgba(255, 255, 255, 0.7)" },
            { x: "25%", y: "55%", size: 2, color: "rgba(200, 220, 255, 0.7)" },
            { x: "45%", y: "65%", size: 3, color: "rgba(255, 200, 150, 0.8)" },
            {
              x: "65%",
              y: "62%",
              size: 2.5,
              color: "rgba(255, 255, 255, 0.75)",
            },
            { x: "80%", y: "70%", size: 2, color: "rgba(255, 255, 255, 0.65)" },
            { x: "15%", y: "45%", size: 2, color: "rgba(30, 144, 255, 0.7)" },
            { x: "55%", y: "20%", size: 2.5, color: "rgba(255, 140, 0, 0.75)" },
            { x: "30%", y: "15%", size: 2, color: "rgba(255, 255, 255, 0.65)" },
            { x: "85%", y: "50%", size: 2.5, color: "rgba(186, 85, 211, 0.7)" },
            { x: "5%", y: "60%", size: 2, color: "rgba(200, 220, 255, 0.65)" },
          ].map((star, i) => (
            <circle
              key={i}
              cx={star.x}
              cy={star.y}
              r={star.size}
              fill={star.color}
              style={{
                filter: `drop-shadow(0 0 ${
                  star.size * 1.5
                }px ${star.color.replace("0.", "0.9")})`,
                animation: `twinkle ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </svg>
      </div>
    </Divider>

    {/* Enhanced inspirational text with better typography and glow */}
    <Divider speed={0.2} offset={offset + 0.3} factor={factor} zIndex={15}>
      <div
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 15,
          width: ["85%", "75%", "65%"],
          animation: "fadeInUp 1.5s ease-out",
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translate(-50%, -40%)",
            },
            "100%": {
              opacity: 1,
              transform: "translate(-50%, -50%)",
            },
          },
        }}
      >
        <h3
          sx={{
            color: "heading",
            fontSize: [4, 5, 6],
            fontWeight: 600,
            textShadow: `
              0 0 15px rgba(255, 255, 255, 0.6),
              0 0 25px rgba(255, 255, 255, 0.4),
              0 0 35px rgba(255, 255, 255, 0.3),
              0 0 45px rgba(200, 220, 255, 0.2),
              0 0 55px rgba(186, 85, 211, 0.15)
            `,
            opacity: 0.95,
            letterSpacing: "0.08em",
            mb: 3,
            lineHeight: 1.3,
          }}
        >
          Exploring the Cosmos of Code
        </h3>
        <p
          sx={{
            color: "text",
            fontSize: [2, 3],
            mt: 3,
            mb: 2,
            opacity: 0.85,
            fontStyle: "italic",
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.4),
              0 0 20px rgba(255, 255, 255, 0.2)
            `,
            letterSpacing: "0.03em",
            lineHeight: 1.6,
          }}
        >
          Journeying through the digital universe, one project at a time
        </p>
      </div>
    </Divider>
  </div>
);

export default SpaceTransition;
