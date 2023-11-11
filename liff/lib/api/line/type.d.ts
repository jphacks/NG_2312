export type LineProfile = {
  lineUserId: string;
  lineUserName: string;
  linePictureUrl: string;
};

export type LineTextMessage = {
  type: "text";
  text: string;
};

export type LineStickerMessage = {
  type: "sticker";
  packageId: string;
  stickerId: string;
};

export type LineImageMessage = {
  type: "image";
  originalContentUrl: string;
  previewImageUrl: string;
};

export type LineMessagesType = (
  | LineTextMessage
  | LineStickerMessage
  | LineImageMessage
)[];
