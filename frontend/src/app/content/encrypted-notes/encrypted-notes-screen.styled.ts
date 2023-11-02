import { styled } from "@stitches/react";

export const RootContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ListContainer = styled("dl", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const ListItemContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const ListItemTitle = styled("dt", {
  fontSize: "1.25rem",
  fontWeight: "bold",
});
