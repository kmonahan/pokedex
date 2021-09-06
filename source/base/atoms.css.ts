import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

const spacing = {
  0.5: "0.25rem",
  1: "0.5rem",
  2: "1rem",
  2.5: "1.25rem",
};

const constrainWidths = {
  small: "800px",
  medium: "1200px",
  large: "1440px",
};

const constrainStyles = createAtomicStyles({
  properties: {
    maxWidth: constrainWidths,
  },
});

const atoms = createAtomsFn(constrainStyles);

export { spacing, atoms };
