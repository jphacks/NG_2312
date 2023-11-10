import { BookInfo } from "@/features/register/types";
import axios from "axios";

export const readBarcode = async (formData: FormData): Promise<BookInfo[]> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/up`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const resBookInfos: BookInfo[] = response.data.result;

    if (resBookInfos.length == 0)
      throw new Error("バーコードから画像を取得できませんでした。");

    return resBookInfos;
  } catch (error) {
    throw new Error("バーコードから画像を取得できませんでした。");
  }
};
