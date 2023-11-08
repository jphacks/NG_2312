import Image from "next/image";

const BookDisplay = () => {
  return (
    <div className="w-full h-20  flex items-center justify-between px-5">
      {/* {bookInfo.image_url ? (
                  <Image
                    src={bookInfo.image_url}
                    alt=""
                    width={40}
                    height={56}
                  />
                ) : (
                  <div className="w-[56px] h-[56px] bg-app-gray"></div>
                )} */}
      <Image
        src="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        alt=""
        width={40}
        height={56}
      />
      <div className="w-full text-main-color truncate mx-5">
        <div className="text-base font-semibold whitespace-nowrap truncate">
          {/* {bookInfo.title} */}
          リーダブルコード
        </div>
        <div className="mt-1">
          <div className="text-sm whitespace-nowrap truncate">
            {/* {bookInfo.author} */}
            Dustin Boswell/Trevor Foucher
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
