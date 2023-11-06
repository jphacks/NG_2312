import axios from "axios";
import { LineStickerMessage, LineTextMessage } from "./type";

export const pushMessage = async (
  messages: (LineTextMessage | LineStickerMessage)[],
  toLineId: string
) => {
  const data = {
    to: toLineId,
    messages: messages,
  };

  const response = await axios.post(
    "https://api.line.me/v2/bot/message/push",
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.LINE_ACCESS_TOKEN}`,
      },
    }
  );
  return;
};
