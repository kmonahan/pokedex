import { fontFamilyTokens, fontScale } from "./atoms.css";
import { globalStyle } from "@vanilla-extract/css";
import { accentColor } from "./vars.css";

globalStyle("body", {
  fontFamily: fontFamilyTokens.primary,
  fontSize: fontScale["1"],
  margin: 0,
});

globalStyle("a", {
  color: accentColor,
  textDecoration: "none",
});
