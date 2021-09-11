import { style } from "@vanilla-extract/css";
import { accentColor, primaryColor } from "./vars.css";
import { moonColors, sunColors } from "./atoms.css";

export const theme = style({
  selectors: {
    "&.sun": {
      vars: {
        [primaryColor]: sunColors.red,
        [accentColor]: sunColors.offWhite,
      },
    },
    "&.moon": {
      vars: {
        [primaryColor]: moonColors.darkBlue,
        [accentColor]: moonColors.silver,
      },
    },
  },
});
