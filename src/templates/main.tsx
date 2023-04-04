import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Stack from "../components/stack";

const Main = () => (
  <Layout>
    <Parallax pages={7}>
      <Hero offset={0} factor={1} />
      <About offset={2} factor={1.5} />
      <Projects offset={4} factor={1} />
      <Stack offset={5} factor={1} />
      <Contact offset={6} factor={1} />
    </Parallax>
  </Layout>
);

export default Main;
