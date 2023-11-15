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

    const resDatas: BookInfo[] = response.data.result;
    // バーコード読み取りAPIからのレスポンスにpublicが含まれていないため追加
    const resBookInfos: BookInfo[] = resDatas.map((resData) => {
      return {
        ...resData,
        public: true,
      };
    });

    if (resBookInfos.length == 0)
      throw new Error("バーコードから画像を取得できませんでした。");

    return resBookInfos;
  } catch (error) {
    throw new Error("バーコードから画像を取得できませんでした。");
  }
};
