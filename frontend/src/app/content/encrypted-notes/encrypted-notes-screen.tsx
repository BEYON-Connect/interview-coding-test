import { Spinner, SubtitleContainer } from "../../../components/content.styled";
import { useEffect, useState } from "react";
import { ExportedUserKey, UserKey } from "../../../types/crypto";
import {
  ListContainer,
  ListItemContainer,
  ListItemTitle,
  RootContainer,
} from "./encrypted-notes-screen.styled";
import {
  exportUserKey,
  generateUserKey,
  importUserKey,
} from "../../../utils/crypto";
import { useQuery } from "react-query";
import { encryptedNotesService } from "../../../services/encryptedNotesService";
import { CreateEncryptedNoteDialog } from "./create-encrypted-note-dialog";

export const EncryptedNotesScreen = () => {
  const [userKey, setUserKey] = useState<UserKey>();

  const { data: notes, isLoading } = useQuery({
    queryKey: ["encrypted-notes", userKey?.userId],
    queryFn: async () => {
      return await encryptedNotesService.getEncryptedNotesAndDecrypt();
    },
    enabled: !!userKey,
  });

  useEffect(() => {
    const getAndSetUserKey = async () => {
      let parsedUserKey: UserKey;

      const storedUserKey = localStorage.getItem("userKey");
      if (storedUserKey) {
        const { userId, secretKeyRaw } = JSON.parse(
          storedUserKey
        ) as ExportedUserKey;

        parsedUserKey = await importUserKey(userId, secretKeyRaw);
      } else {
        parsedUserKey = await generateUserKey();

        localStorage.setItem(
          "userKey",
          JSON.stringify(await exportUserKey(parsedUserKey))
        );
      }

      setUserKey(parsedUserKey);
    };

    getAndSetUserKey();
  }, []);

  return (
    <>
      {!userKey || isLoading ? (
        <Spinner />
      ) : (
        <RootContainer>
          <SubtitleContainer style={{ paddingBottom: 0 }}>
            <h2>Encrypted Notes</h2>
            <CreateEncryptedNoteDialog />
          </SubtitleContainer>
          <span>
            <b>User Id: </b>
            {userKey.userId}
          </span>
          {notes && (
            <ListContainer>
              {notes.map((note) => (
                <ListItemContainer>
                  <ListItemTitle>{note.title}</ListItemTitle>
                  <dd>{note.content}</dd>
                  <dd style={{ fontStyle: "italic" }}>
                    {note.createdAt.toLocaleString()}
                  </dd>
                </ListItemContainer>
              ))}
            </ListContainer>
          )}
        </RootContainer>
      )}
    </>
  );
};
