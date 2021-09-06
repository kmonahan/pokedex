import { style } from "@vanilla-extract/css";
import { spacing } from "../../base/atoms.css";

export const card = style({
  alignItems: "center",
  backgroundColor: "silver",
  color: "black",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  padding: spacing["2"],
});

export const cardTitle = style({
  fontSize: "1rem",
  fontWeight: 400,
  margin: 0,
  textTransform: "capitalize",
});

export const cardImg = style({
  order: -1,
});
