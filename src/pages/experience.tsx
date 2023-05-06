import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import Experience from "../components/Experience";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const ExperiencePage: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app} pageTitle={`Experience | ${app.title}`}>
      <Experience experience={app.experience} />
    </Layout>
  );
};

export default ExperiencePage;
