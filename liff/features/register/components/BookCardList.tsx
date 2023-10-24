import Image from "next/image";

const BookCardList = () => {
  return (
    <div className="w-full">
      <h3 className="text-center text-base font-bold text-main-color">
        登録リスト
      </h3>
      <div className="mt-4">
        <div className="mb-4">
          <div className="w-full h-20 bg-white rounded-lg shadow-md flex items-center justify-between px-5">
            <Image
              src="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
              width={40}
              height={56}
            />
            <div className="w-full text-main-color truncate mx-5">
              <div className="text-base font-semibold whitespace-nowrap truncate">
                リーダブルコード
              </div>
              <div className="mt-1">
                <div className="text-sm whitespace-nowrap truncate">
                  本好太郎
                </div>
              </div>
            </div>
            <div className="w-4 h-4 relative cursor-pointer">
              <i className="w-4 h-[2px] absolute top-1/2 left-0 -translate-y-1/2 bg-app-gray -rotate-45"></i>
              <i className="w-4 h-[2px] absolute top-1/2 left-0 -translate-y-1/2 bg-app-gray rotate-45"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardList;
