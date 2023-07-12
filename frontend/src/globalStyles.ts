import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  table: { borderSpacing: "16px" },
  "th, td": { padding: "4px" },
  "h1, h2, h3, h4, h5, h6": { margin: 0 },
  button: { height: "fit-content", width: "fit-content" },
});
