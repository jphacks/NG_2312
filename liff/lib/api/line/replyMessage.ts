import axios from "axios";
import { LineMessagesType } from "./type";

export const replyMessage = async (
  messages: LineMessagesType,
  replyToken: string
) => {
  const data = {
    replyToken: replyToken,
    messages: messages,
  };

  const response = await axios.post(
    "https://api.line.me/v2/bot/message/reply",
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
