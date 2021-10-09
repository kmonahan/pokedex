import { style } from "@vanilla-extract/css";

const srOnly = style({
  border: 0,
  clip: "rect(1px, 1px, 1px, 1px)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
});

export { srOnly };
