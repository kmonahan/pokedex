import { StylesConfig } from "react-select";
import { accentColor, backgroundColor, textColor } from "../../base/vars.css";

const selectStyles: StylesConfig = {
  menu: (provided) => ({
    ...provided,
    color: "#000",
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected
      ? accentColor
      : isFocused
      ? backgroundColor
      : "#fff",
    color: isSelected || isFocused ? textColor : "#000",
  }),
};

export default selectStyles;
