import { style } from "@vanilla-extract/css";
import { atoms } from "../../base/atoms.css";
import { accentColor } from "../../base/vars.css";

export const card = style([
  atoms({
    padding: 2,
  }),
  style({
    alignItems: "center",
    backgroundColor: accentColor,
    color: "black",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
  }),
]);

export const cardTitle = style([
  atoms({
    fontSize: 1,
  }),
  style({
    fontWeight: 400,
    margin: 0,
    textTransform: "capitalize",
  }),
]);

export const cardImg = style({
  order: -1,
});
