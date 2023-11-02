import { Note } from "../types/notes";

const getEncryptedNotesAndDecrypt = async (): Promise<Note[]> => {
  return [
    {
      title: "Mocked Note",
      content: `This note is mocked in the frontend.`,
      createdAt: new Date(),
    },
  ];
};

export const encryptedNotesService = {
  getEncryptedNotesAndDecrypt,
};
