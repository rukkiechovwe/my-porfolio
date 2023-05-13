import type { NextPage } from "next";

import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const AboutPage: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app} pageTitle={`Contact Me | ${app.title}`}>
      <Contact contact={app.contact} />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
