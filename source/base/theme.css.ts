import { style } from "@vanilla-extract/css";
import {
  accentColor,
  backgroundColor,
  primaryColor,
  textColor,
} from "./vars.css";
import { moonColors, sunColors } from "./atoms.css";

export const theme = style({
  selectors: {
    "&.sun": {
      vars: {
        [backgroundColor]: sunColors.offWhite,
        [primaryColor]: sunColors.yellow,
        [accentColor]: sunColors.red,
        [textColor]: sunColors.darkBlue,
      },
    },
    "&.moon": {
      vars: {
        [backgroundColor]: moonColors.extraDarkBlue,
        [primaryColor]: moonColors.blue,
        [accentColor]: moonColors.yellow,
        [textColor]: "#fff",
      },
    },
  },
});
