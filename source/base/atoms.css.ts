import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";
import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("Open Sans", {
  src: "url('/fonts/open-sans/OpenSans-Regular-webfont.woff') format('woff')",
  fontWeight: 400,
  fontStyle: "normal",
});
globalFontFace("Open Sans", {
  src: "url('/fonts/open-sans/OpenSans-Semibold-webfont.woff') format('woff')",
  fontWeight: 600,
  fontStyle: "normal",
});
globalFontFace("Open Sans", {
  src: "url('/fonts/open-sans/OpenSans-Bold-webfont.woff') format('woff')",
  fontWeight: 700,
  fontStyle: "normal",
});
globalFontFace("Open Sans", {
  src: "url('/fonts/open-sans/OpenSans-Italic-webfont.woff') format('woff')",
  fontWeight: 400,
  fontStyle: "italic",
});
globalFontFace("Open Sans", {
  src: "url('/fonts/open-sans/OpenSans-BoldItalic-webfont.woff') format('woff')",
  fontWeight: 700,
  fontStyle: "italic",
});

export const fontFamilyTokens = {
  primary: "'Open Sans', Helvetica, Arial, sans-serif",
};

export const spacingTokens = {
  0: "0",
  0.5: "0.25rem",
  1: "0.5rem",
  2: "1rem",
  2.5: "1.25rem",
};

export const fontScale = {
  0.5: "0.75rem",
  1: "1rem",
  1.5: "1.25rem",
  2: "1.5rem",
  3: "2rem",
  4: "3rem",
};

export const fontWeights = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

export const constrainWidths = {
  small: "800px",
  medium: "1200px",
  large: "1440px",
};

export const moonColors = {
  purple: "#4d1f82",
  darkBlue: "#0f2f8f",
  lightBlue: "#98dffb",
  silver: "#b8bc71",
};

export const sunColors = {
  red: "#bb2f1f",
  yellow: "#fba81a",
  orange: "#f8901f",
  offWhite: "#f9e0a2",
};

export const colorTokens = {
  ...moonColors,
  ...sunColors,
};

const spacing = createAtomicStyles({
  properties: {
    marginTop: spacingTokens,
    marginBottom: spacingTokens,
    marginRight: spacingTokens,
    marginLeft: spacingTokens,
    paddingTop: spacingTokens,
    paddingBottom: spacingTokens,
    paddingLeft: spacingTokens,
    paddingRight: spacingTokens,
    gap: spacingTokens,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    marginX: ["marginLeft", "marginRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const typography = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    fontSize: fontScale,
    fontFamily: fontFamilyTokens,
    fontWeight: fontWeights,
  },
});

const atoms = createAtomsFn(spacing, typography);

const constrainStyles = createAtomicStyles({
  properties: {
    maxWidth: constrainWidths,
  },
});

const constrain = createAtomsFn(constrainStyles);

export { spacing, constrain, atoms };
