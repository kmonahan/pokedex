import type { AppProps } from "next/app";
import "../source/base/global.css";
import { ChangeEvent, useState } from "react";
import { theme } from "../source/base/theme.css";
import { mainCss } from "../source/components/Layout/main.css";

function Pokedex({ Component, pageProps }: AppProps) {
  const [themeClass, setThemeClass] = useState("moon");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setThemeClass(event.currentTarget.value);
  return (
    <div className={`${themeClass} ${theme} ${mainCss}`}>
      <fieldset>
        <legend>
          <span>Select Theme</span>
        </legend>
        <input
          type="radio"
          name="theme"
          value="moon"
          id="theme-moon"
          onChange={handleChange}
          checked={themeClass === "moon"}
        />
        <label htmlFor="theme-moon">Moon</label>
        <input
          type="radio"
          name="theme"
          value="sun"
          id="theme-sun"
          onChange={handleChange}
          checked={themeClass === "sun"}
        />
        <label htmlFor="theme-sun">Sun</label>
      </fieldset>

      <Component {...pageProps} />
    </div>
  );
}
export default Pokedex;
