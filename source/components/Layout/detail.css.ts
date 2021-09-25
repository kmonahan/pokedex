import { style } from "@vanilla-extract/css";

const detailLayout = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

const detailLayoutHeader = style({
  gridColumnStart: "span 2",
});

const detailLayoutSubgrid = style({
  display: "grid",
  gridColumnStart: "span 2",
  gridTemplateColumns: "1fr 1fr 1fr",
});

const detailLayoutSubgridHeader = style({
  gridColumnStart: "span 3",
});

export {
  detailLayout,
  detailLayoutHeader,
  detailLayoutSubgrid,
  detailLayoutSubgridHeader,
};
