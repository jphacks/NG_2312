import { useState } from "react";
import { searchBook } from "../api/searchBook";
import { BookInfo } from "../types";

type Props = {
  addBook: (bookInfo: BookInfo) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error) => void;
};

const BookSearch = (props: Props) => {
  const { addBook, setIsLoading, setError } = props;
  const [query, setQuery] = useState("");

  const fetchBookInfo = async () => {
    try {
      const bookInfo = await searchBook(query);
      addBook(bookInfo);
      setQuery("");
    } catch (error) {
      setError(new Error("not book"));
    }
    setIsLoading(false);
  };

  const handleButton = () => {
    if (!query) return;
    setIsLoading(true);
    fetchBookInfo();
  };

  return (
    <div className="w-full">
      <label className="w-full text-main-color">
        <div className="text-base font-bold">本情報登録</div>
        <div className="w-full flex justify-between items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-9/12 h-14 rounded-lg border-[1px] border-light-color hover:border-2 outline-none px-2 text-base font-bold"
            placeholder="本のタイトルを登録"
          />
          <button
            onClick={() => handleButton()}
            className={
              "w-2/12 h-10 rounded-lg text-xs font-bold " +
              (query ? "bg-light-color" : "bg-app-gray")
            }
          >
            追加
          </button>
        </div>
      </label>
    </div>
  );
};

export default BookSearch;
