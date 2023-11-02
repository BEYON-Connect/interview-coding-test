import { v4 as uuidv4 } from "uuid";
import { ExportedUserKey, UserKey } from "../types/crypto";
import { arrayBufferToBase64, base64ToArrayBuffer } from "./encoding";

export const generateUserKey = async () => {
  const secretKey = await crypto.subtle.generateKey(
    { length: 256, name: "AES-GCM" },
    true,
    ["decrypt", "encrypt"]
  );

  return { userId: uuidv4(), secretKey } as UserKey;
};

export const importUserKey = async (userId: string, secretKeyRaw: string) => {
  return {
    userId,
    secretKey: await crypto.subtle.importKey(
      "raw",
      base64ToArrayBuffer(secretKeyRaw),
      "AES-GCM",
      true,
      ["encrypt", "decrypt"]
    ),
  } as UserKey;
};

export const exportUserKey = async (userKey: UserKey) => {
  return {
    userId: userKey.userId,
    secretKeyRaw: arrayBufferToBase64(
      await crypto.subtle.exportKey("raw", userKey.secretKey)
    ),
  } as ExportedUserKey;
};
