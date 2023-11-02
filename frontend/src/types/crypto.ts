export type UserKey = {
  userId: string;
  secretKey: CryptoKey;
};

export type ExportedUserKey = {
  userId: string;
  secretKeyRaw: string;
};
