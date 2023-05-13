import type { NextPage } from "next";

import Layout from "../components/Layout";
import Project from "../components/Project";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const ProjectPage: NextPage<Props> = ({ app }: Props) => {
  return (
    <Layout app={app} pageTitle={`Projects | ${app.title}`}>
      <Project project={app.project} />
    </Layout>
  );
};

export default ProjectPage;
