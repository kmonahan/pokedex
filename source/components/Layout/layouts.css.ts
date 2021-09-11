import { atoms, constrain as constrainStyles } from "../../base/atoms.css";
import { style } from "@vanilla-extract/css";

export const constrain = style([
  constrainStyles({
    maxWidth: "medium",
  }),
  atoms({
    padding: 2.5,
  }),
  style({
    margin: "0 auto",
  }),
]);
