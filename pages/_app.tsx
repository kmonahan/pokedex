import type { AppProps } from "next/app";
import "../source/base/global.css";
import { useLayoutEffect, useState } from "react";
import { theme } from "../source/base/theme.css";
import { mainCss } from "../source/components/Layout/main.css";
import ThemeSelector from "../source/components/ThemeSelector";
import Link from "next/link";

type Theme = "sun" | "moon";

function Pokedex({ Component, pageProps }: AppProps) {
  const [themeClass, setThemeClass] = useState<Theme>("moon");
  const changeTheme = (newTheme: Theme) => {
    setThemeClass(newTheme);
    if (window.localStorage) {
      window.localStorage.setItem("selectedTheme", newTheme);
    }
  };

  useLayoutEffect(() => {
    if (window.localStorage) {
      const selectedTheme = window.localStorage.getItem("selectedTheme");
      if (selectedTheme) {
        setThemeClass(selectedTheme as Theme);
      }
    }
  }, [setThemeClass]);

  return (
    <div className={`${themeClass} ${theme} ${mainCss}`}>
      <Link href="/">Home</Link>
      <ThemeSelector themeClass={themeClass} changeTheme={changeTheme} />

      <Component {...pageProps} />
    </div>
  );
}
export default Pokedex;
export type { Theme };
