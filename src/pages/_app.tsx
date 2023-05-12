import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import { ThemeContextProvider } from "../context/theme_context";
import app from "../utils/data";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeContextProvider>
      {mounted && <Component {...pageProps} app={app} />}
      <Analytics />
    </ThemeContextProvider>
  );
}

export default MyApp;
