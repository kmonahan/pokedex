import { style } from "@vanilla-extract/css";
import { accentColor, primaryColor, textColor } from "./vars.css";
import { moonColors, sunColors } from "./atoms.css";

export const theme = style({
  selectors: {
    "&.sun": {
      vars: {
        [primaryColor]: sunColors.offWhite,
        [accentColor]: sunColors.orange,
        [textColor]: "#000",
      },
    },
    "&.moon": {
      vars: {
        [primaryColor]: moonColors.darkBlue,
        [accentColor]: moonColors.lightBlue,
        [textColor]: "#fff",
      },
    },
  },
});
