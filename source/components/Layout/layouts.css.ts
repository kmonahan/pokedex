import { atoms, spacing } from "../../base/atoms.css";
import { style } from "@vanilla-extract/css";

export const constrain = style([
  atoms({
    maxWidth: "medium",
  }),
  style({
    margin: "0 auto",
    padding: spacing["2.5"],
  }),
]);
