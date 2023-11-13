import axios from "axios";
import { BookInfo } from "../types";

export const searchBook = async (query: string): Promise<BookInfo> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    const resBooks = response.data.items;

    if (resBooks.length == 0)
      throw new Error("関連する本が見つかりませんでした。");

    const resBookInfo = resBooks[0].volumeInfo;

    const bookInfo: BookInfo = {
      title: resBookInfo.title,
      description: resBookInfo.description ?? "",
      author: resBookInfo.authors?.join("/") ?? resBookInfo.publisher ?? "",
      image_url: resBookInfo.imageLinks?.smallThumbnail,
      public: true,
    };

    return bookInfo;
  } catch (error) {
    throw new Error("データ取得に失敗");
  }
};
