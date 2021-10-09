import { style } from "@vanilla-extract/css";
import { atoms } from "../../base/atoms.css";

const Tag = style([
  atoms({
    fontSize: 0.5,
    fontWeight: "semibold",
    padding: 0.5,
    marginLeft: 0.5,
  }),
  style({
    border: "1px solid",
    borderRadius: "5px",
  }),
]);

export { Tag };
