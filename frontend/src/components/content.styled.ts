import { keyframes, styled } from "@stitches/react";

export const ContentContainer = styled("div", {
  padding: "16px",
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Spinner = styled("div", {
  border: "16px solid #012E5D",
  borderTop: "16px solid #E54D3C",
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  animation: `${spin} 2s linear infinite`,
  margin: "auto",
});
