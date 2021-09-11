import { style } from "@vanilla-extract/css";
import { atoms } from "../../base/atoms.css";

export const grid = style([
  atoms({
    gap: 2,
    margin: 0,
    padding: 0,
  }),
  style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 166px)",
  }),
]);
