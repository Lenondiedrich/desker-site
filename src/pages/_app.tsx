import "@/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import chroma from "chroma-js";
import * as Themes from "@/theme/Theme.Colors";
import ThemeConfig from "../theme/Theme.Config";
import ThemeProvider from "@/common/contexts/ThemeProvider";
import { useCallback, useMemo } from "react";

/**
 * Bootstrap NEXT.JS App
 * @param {AppProps} { Component, pageProps }
 * @returns {JSX.Element} JSX.Element
 * @description This is the main bootstrap for the application. It loads the font and the theme.
 */

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const ThemeMainColor = useMemo(
    () => Themes[ThemeConfig.theme as keyof typeof Themes].main,
    []
  );

  const Delta = useMemo(
    () => chroma.deltaE(ThemeMainColor, "#ffffff"),
    [ThemeMainColor]
  );

  const TextColor = useCallback(() => {
    if (Delta < 35) {
      return "#000000";
    } else {
      return "#ffffff";
    }
  }, [Delta]);

  return (
    <ThemeProvider>
      <style jsx global>{`
        :root {
          --main-color: ${ThemeMainColor};
          --main-text-color: ${TextColor()};
          --main-color-lighter: ${chroma(ThemeMainColor).brighten(1).hex()};
          --main-color-darker: ${chroma(ThemeMainColor).darken(0.5).hex()};
        }
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
