import { style } from "@vanilla-extract/css";
import { accentColor, statPercent } from "../../base/vars.css";
import { atoms } from "../../base/atoms.css";

export const StatWrapper = atoms({
  marginBottom: 2,
});

export const StatBar = style({
  background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${statPercent}, rgba(0, 0, 0, 0) ${statPercent}, rgba(0, 0, 0, 0) 100%)`,
  border: "1px solid",
  height: "1rem",
});
