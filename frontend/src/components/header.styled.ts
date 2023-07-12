import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
});

export const NavigationContainer = styled("nav", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  "a.active": {
    color: "#E54D3C",
  },
  a: {
    color: "#012E5D",
  },
});

export const Divider = styled("hr", {
  height: 0,
  width: "100%",
  overflow: "hidden",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "black",
});
