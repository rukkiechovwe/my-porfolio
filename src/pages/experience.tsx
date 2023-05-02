import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import { IApp } from "../utils/interfaces";
import Experience from "../components/Experience";

type Props = {
  app: IApp;
};

const ExperiencePage: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app} pageTitle={`About Me | ${app.title}`}>
      <Experience experience={app.experience} />
    </Layout>
  );
};

export default ExperiencePage;
