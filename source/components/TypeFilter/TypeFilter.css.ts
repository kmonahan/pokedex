import { style } from "@vanilla-extract/css";
import { atoms, constrain } from "../../base/atoms.css";

export const TypeFilterWrapper = style([
  atoms({
    margin: 2,
  }),
  style({
    maxWidth: "15rem",
  }),
]);

export const TypeFilterLabel = atoms({
  fontSize: 0.5,
  fontWeight: "semibold",
});
