import type { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import Socials from "./Socials";
import AppStyles from "../styles/globalstyles";
import { useThemeContext } from "../context/theme_context";
import { IApp } from "../utils/interfaces";
import Cursor from "./Cursor";

type Props = {
  app: IApp;
  pageTitle?: string;
  children: ReactNode;
};

const Layout: NextPage<Props> = ({ app, pageTitle, children }: Props) => {
  const { mode: theme } = useThemeContext();

  return (
    // @ts-ignore
    <ThemeProvider theme={theme!}>
      {/* @ts-ignore */}
      <AppStyles />
      <Head>
        <title>{pageTitle ? pageTitle : app.title}</title>
        <meta name="description" content={app.desc} />
        <link rel="icon" href="/favicon_.png" />
      </Head>
      <Cursor />
      <Header />
      <Socials socials={app.socials} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
