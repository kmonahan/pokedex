import { style } from "@vanilla-extract/css";
import { spacing } from "../../base/atoms.css";

export const grid = style({
  display: "grid",
  gap: spacing["2"],
  gridTemplateColumns: "repeat(auto-fill, 166px)",
  margin: 0,
  padding: 0,
});
