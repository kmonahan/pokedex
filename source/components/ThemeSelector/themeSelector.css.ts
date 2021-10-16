import { style, styleVariants } from "@vanilla-extract/css";
import { atoms } from "../../base/atoms.css";
import { accentColor, textColor } from "../../base/vars.css";

const themeSelectorWrapper = style([
  atoms({
    padding: 0,
  }),
  style({
    border: 0,
    textAlign: "right",
    position: "relative",
  }),
]);

const themeSelectorLabel = style([
  style({
    color: textColor,
    display: "inline-flex",
  }),
]);

const themeSelectorToggleBase = style({
  backgroundColor: accentColor,
  borderRadius: "1rem",
  display: "inline-block",
  height: "24px",
  position: "relative",
  width: "3rem",
  "::after": {
    backgroundColor: "#fff",
    borderRadius: "50%",
    content: "''",
    display: "block",
    height: "20px",
    left: "4px",
    position: "absolute",
    top: "2px",
    transition: "transform 200ms ease-in-out",
    width: "20px",
  },
});

const themeSelectorToggle = styleVariants({
  unchecked: [
    themeSelectorToggleBase,
    {
      "::after": {
        transform: "translate3d(0, 0, 0)",
      },
    },
  ],
  checked: [
    themeSelectorToggleBase,
    {
      "::after": {
        transform: "translate3d(20px, 0, 0)",
      },
    },
  ],
});

const themeSelectorInput = style({
  position: "absolute",
  left: "30px",
  zIndex: -1,
});

export {
  themeSelectorWrapper,
  themeSelectorLabel,
  themeSelectorToggle,
  themeSelectorInput,
};
