import { fontFamilyTokens, fontScale } from "./atoms.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  fontFamily: fontFamilyTokens.primary,
  fontSize: fontScale["1"],
});
