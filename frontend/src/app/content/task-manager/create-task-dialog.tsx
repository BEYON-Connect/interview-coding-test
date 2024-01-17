import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
  StyledDialogButtonContainer,
  StyledDialogContent,
  StyledDialogOverlay,
} from "../../../components/dialog.styled";

export const CreateTaskDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Create task</Dialog.Trigger>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <Dialog.Title>Create new task</Dialog.Title>
          <form onSubmit={() => setOpen(false)}>
            <StyledDialogButtonContainer>
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button type="submit">Submit</button>
            </StyledDialogButtonContainer>
          </form>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
