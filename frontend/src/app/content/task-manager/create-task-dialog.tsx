import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
  StyledDialogButtonContainer,
  StyledDialogContent,
  StyledDialogOverlay,
} from "./create-task-dialog.styled";

export const CreateTaskDialog = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Create task</Dialog.Trigger>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <Dialog.Title>Create new task</Dialog.Title>
          <StyledDialogButtonContainer>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={handleSubmit}>Submit</button>
          </StyledDialogButtonContainer>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
