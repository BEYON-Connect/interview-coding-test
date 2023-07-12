import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentShow = keyframes({
  from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
  to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const StyledDialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .45)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const StyledDialogContent = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: "6px",
  borderShadow: "0 5px 15px rgba(0, 0, 0, .5)",
  padding: "16px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const StyledDialogButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "16px",
});
