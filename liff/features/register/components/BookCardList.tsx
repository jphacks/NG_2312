import Image from "next/image";
import { BookInfo } from "../types";

type Props = {
  bookInfoList: BookInfo[];
  deleteBook: (index: number) => void;
};

const BookCardList = ({ bookInfoList, deleteBook }: Props) => {
  return (
    <div className="w-full">
      <h3 className="text-center text-base font-bold text-main-color">
        登録リスト
      </h3>
      <div className="mt-4">
        {bookInfoList
          .slice()
          .reverse()
          .map((bookInfo, index) => (
            <div key={index} className="mb-4">
              <div className="w-full h-20 bg-white rounded-lg shadow-md flex items-center justify-between px-5">
                <div className="w-10 h-14 bg-app-gray overflow-hidden relative">
                  {bookInfo.image_url && (
                    <Image
                      src={bookInfo.image_url}
                      alt=""
                      width={40}
                      height={56}
                    />
                  )}
                </div>

                <div className="w-2/3 text-main-color truncate mx-5">
                  <div className="text-base font-semibold whitespace-nowrap truncate">
                    {bookInfo.title}
                  </div>
                  <div className="mt-1">
                    <div className="text-sm whitespace-nowrap truncate">
                      {bookInfo.author}
                    </div>
                  </div>
                </div>
                <div
                  className="w-4 h-4 relative cursor-pointer"
                  onClick={() => deleteBook(bookInfoList.length - 1 - index)}
                >
                  <i className="w-4 h-[2px] absolute top-1/2 left-0 -translate-y-1/2 bg-app-gray -rotate-45"></i>
                  <i className="w-4 h-[2px] absolute top-1/2 left-0 -translate-y-1/2 bg-app-gray rotate-45"></i>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookCardList;
