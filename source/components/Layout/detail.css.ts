import { style } from "@vanilla-extract/css";
import { primaryColor } from "../../base/vars.css";
import { atoms } from "../../base/atoms.css";

const detailLayout = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
});

const detailLayoutSection = style([
  atoms({
    padding: 2,
  }),
  style({
    backgroundColor: primaryColor,
    borderRadius: "5px",
  }),
]);

const detailLayoutHeader = style({
  alignItems: "center",
  display: "flex",
  gridColumnStart: "span 2",
  padding: "1rem",
});

const detailLayoutSubgrid = style([
  detailLayoutSection,
  {
    display: "grid",
    columnGap: "3rem",
    gridColumnStart: "span 2",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "1rem",
  },
]);

const detailLayoutSubgridHeader = style({
  gridColumnStart: "span 3",
});

export {
  detailLayout,
  detailLayoutSection,
  detailLayoutHeader,
  detailLayoutSubgrid,
  detailLayoutSubgridHeader,
};
