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
        [backgroundColor]: "#fff",
        [primaryColor]: sunColors.offWhite,
        [accentColor]: sunColors.orange,
        [textColor]: "#000",
      },
    },
    "&.moon": {
      vars: {
        [backgroundColor]: "#000",
        [primaryColor]: moonColors.darkBlue,
        [accentColor]: moonColors.lightBlue,
        [textColor]: "#fff",
      },
    },
  },
});
