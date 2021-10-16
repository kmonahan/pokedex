import type { AppProps } from "next/app";
import "../source/base/global.css";
import { useEffect, useState } from "react";
import { theme } from "../source/base/theme.css";
import { mainCss } from "../source/components/Layout/main.css";
import ThemeSelector from "../source/components/ThemeSelector";
import Link from "next/link";
import HomeSvg from "../source/components/Layout/HomeSvg";
import { constrain } from "../source/components/Layout/layouts.css";
import { siteHeader } from "../source/components/Layout/siteHeader.css";

type Theme = "sun" | "moon";

function Pokedex({ Component, pageProps }: AppProps) {
  const [themeClass, setThemeClass] = useState<Theme>("sun");
  const changeTheme = (newTheme: Theme) => {
    setThemeClass(newTheme);
    if (window.localStorage) {
      window.localStorage.setItem("selectedTheme", newTheme);
    }
  };

  useEffect(() => {
    if (window.localStorage) {
      const selectedTheme = window.localStorage.getItem("selectedTheme");
      if (selectedTheme) {
        setThemeClass(selectedTheme as Theme);
      }
    }
  }, [setThemeClass]);

  return (
    <div className={`${themeClass} ${theme} ${mainCss}`}>
      <header className={`${constrain} ${siteHeader}`}>
        <Link href="/">
          <a>
            <HomeSvg />
          </a>
        </Link>
        <ThemeSelector themeClass={themeClass} changeTheme={changeTheme} />
      </header>

      <Component {...pageProps} />
    </div>
  );
}
export default Pokedex;
export type { Theme };
