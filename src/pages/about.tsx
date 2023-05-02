import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import About from "../components/About";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const AboutPage: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app} pageTitle={`About Me | ${app.title}`}>
      <About about={app.about} />
    </Layout>
  );
};

export default AboutPage;
