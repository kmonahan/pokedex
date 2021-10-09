import type { AppProps } from "next/app";
import "../source/base/global.css";
import { ChangeEvent, useState } from "react";
import { theme } from "../source/base/theme.css";
import { mainCss } from "../source/components/Layout/main.css";
import ThemeSelector from "../source/components/ThemeSelector";

type Theme = "sun" | "moon";

function Pokedex({ Component, pageProps }: AppProps) {
  const [themeClass, setThemeClass] = useState<Theme>("moon");
  const changeTheme = (newTheme: Theme) => setThemeClass(newTheme);
  return (
    <div className={`${themeClass} ${theme} ${mainCss}`}>
      <ThemeSelector themeClass={themeClass} changeTheme={changeTheme} />

      <Component {...pageProps} />
    </div>
  );
}
export default Pokedex;
export type { Theme };
