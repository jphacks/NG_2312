import axios from "axios";
import { LineProfile } from "./type";

export const getDecodedIdtoken = async (
  id_token: string | undefined
): Promise<LineProfile> => {
  const client_id = process.env.LINE_CLIENT_ID;
  if (!client_id) {
    throw new Error("lineのチャンネルIDをenvファイルで設定してください。");
  }
  if (!id_token) {
    throw new Error("client_idがリクエストに含まれていません。");
  }

  // test用
  if (id_token.replace("Bearer ", "") == "TEST") {
    return {
      lineUserId: "123456",
      lineUserName: "test",
      linePictureUrl: "",
    };
  }

  const data = {
    id_token: id_token.replace("Bearer ", ""),
    client_id: client_id,
  };

  const response = await axios.post(
    "https://api.line.me/oauth2/v2.1/verify",
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const lineProfile: LineProfile = {
    lineUserId: response.data.sub,
    lineUserName: response.data.name,
    linePictureUrl: response.data.picture,
  };
  return lineProfile;
};
