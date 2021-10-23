import { style } from "@vanilla-extract/css";
import { atoms } from "../../base/atoms.css";

export const grid = style([
  atoms({
    gap: 2,
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
  }),
  style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 166px)",
    marginLeft: "auto",
    marginRight: "auto",
  }),
]);
