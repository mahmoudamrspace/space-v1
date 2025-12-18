/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  // const [colorMode, setColorMode] = useColorMode();
  // const isDark = colorMode === `dark`;
  // const toggleColorMode = (e: any) => {
  //   setColorMode(isDark ? `light` : `dark`);
  // };

  return (
    <div
      sx={{
        width: "100%",
        textAlign: "center",
        color: "textMuted",
        px: [2, 3],
        py: [3, 4],
        mt: 4,
        position: "relative",
        display: "block",
      }}
    >
      <div sx={{ whiteSpace: "nowrap" }}>
        Mahmoud Amr &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
