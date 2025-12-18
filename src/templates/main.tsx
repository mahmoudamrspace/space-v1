/** @jsx jsx */
import { jsx } from "theme-ui";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Stack from "../components/stack";
import SpaceTransition from "../components/space-transition";
import ErrorBoundary from "../components/ErrorBoundary";
import "../components/sky.css";
import Sky from "../components/sky";

const Main = () => (
  <Layout>
    <ErrorBoundary>
      <Parallax pages={7}>
        <Sky />
        <Hero offset={0} factor={1} />
        <Sky />
        <About offset={1.5} factor={1} />
        <Sky />
        <SpaceTransition offset={3} factor={1.5} />
        <Sky />
        <Stack offset={5} factor={0.8} />
        <Sky />
        <Contact offset={6} factor={1} />
        <Sky />
      </Parallax>
    </ErrorBoundary>
  </Layout>
);

export default Main;
