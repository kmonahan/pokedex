import { style, styleVariants } from "@vanilla-extract/css";
import { accentColor } from "../../base/vars.css";
import { atoms } from "../../base/atoms.css";

const EvolutionBlockBase = style({
  paddingRight: "20px",
  position: "relative",
});

export const EvolutionBlock = styleVariants({
  noEvolution: [EvolutionBlockBase],
  evolution: [
    EvolutionBlockBase,
    {
      "::after": {
        borderBottom: "20px solid transparent",
        borderTop: "20px solid transparent",
        borderLeft: `20px solid ${accentColor}`,
        content: "''",
        height: "0",
        width: 0,
        display: "block",
        marginTop: "-20px",
        position: "absolute",
        right: "0",
        top: "50%",
      },
    },
  ],
});

export const EvolutionList = style({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});

export const EvolutionKey = style([
  atoms({
    fontWeight: "semibold",
  }),
  style({
    flex: "0 0 50%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
]);

export const EvolutionDetail = style({
  flex: "0 0 50%",
  marginLeft: "auto",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
