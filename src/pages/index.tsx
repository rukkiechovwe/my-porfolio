import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const Home: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app}>
      <Hero hero={app.hero} />
    </Layout>
  );
};

export default Home;
