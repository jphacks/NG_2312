import { Book } from "@/types/type";
import Image from "next/image";

type Props = {
  book: Book;
};

const BookDisplay = ({ book }: Props) => {
  return (
    <div className="w-full h-20 flex items-center justify-between px-5">
      <div className="w-10 h-14 bg-app-gray overflow-hidden relative">
        {book.image_url && (
          <Image src={book.image_url} alt="本" width={40} height={56} />
        )}
      </div>

      <div className="w-2/3 text-main-color truncate mx-5">
        <div className="text-base font-semibold whitespace-nowrap truncate">
          {book.title}
        </div>
        <div className="mt-1">
          <div className="text-sm whitespace-nowrap truncate">
            {book.author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
