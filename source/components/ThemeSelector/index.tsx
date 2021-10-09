import { ChangeEvent } from "react";
import { Theme } from "../../../pages/_app";
import { srOnly } from "../../base/accessibility.css";
import {
  themeSelectorInput,
  themeSelectorLabel,
  themeSelectorToggle,
  themeSelectorWrapper,
} from "./themeSelector.css";
import SunSvg from "./sunSvg";
import MoonSvg from "./MoonSvg";
interface ThemeSelectorProps {
  themeClass: Theme;
  changeTheme: (newTheme: Theme) => void;
}

function ThemeSelector({
  themeClass,
  changeTheme,
}: ThemeSelectorProps): JSX.Element {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      changeTheme("sun");
    } else {
      changeTheme("moon");
    }
  };

  return (
    <div className={themeSelectorWrapper}>
      <label htmlFor="theme-sun" className={themeSelectorLabel}>
        <input
          className={themeSelectorInput}
          type="checkbox"
          name="theme"
          value="sun"
          id="theme-sun"
          onChange={handleToggle}
          checked={themeClass === "sun"}
        />
        <span className={srOnly}>Enable Sun Theme</span>
        <MoonSvg aria-hidden="true" />
        <span
          className={
            themeSelectorToggle[themeClass === "sun" ? "checked" : "unchecked"]
          }
          aria-hidden="true"
        />
        <SunSvg aria-hidden="true" />
      </label>
    </div>
  );
}

export default ThemeSelector;
