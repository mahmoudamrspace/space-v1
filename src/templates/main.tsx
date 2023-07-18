import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Stack from "../components/stack";
import "../components/sky.css";
import Sky from "../components/sky";

const Main = () => (
  <Layout>
    <Parallax pages={7}>
      <Sky />
      <Hero offset={0} factor={1} />
      <Sky />
      <About offset={1.5} factor={1} />
      <Sky />
      <Projects offset={3} factor={1.5} />
      <Sky />
      <Stack offset={5} factor={0.8} />
      <Sky />
      <Contact offset={6} factor={1} />
      <Sky />
    </Parallax>
  </Layout>
);

export default Main;
