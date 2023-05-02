import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const Home: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app}>
      <Hero hero={app.hero} />
      {/* <About about={app.about} /> */}
      {/* <Project project={app.project} /> */}
      {/* <Contact contact={app.contact} /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
