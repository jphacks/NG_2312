import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const BooksDetail = () => {
  return (
    <div className="w-full text-main-color">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        className="[&_.swiper-pagination]:relative
        [&_.swiper-pagination]:top-1.5
        [&_.swiper-pagination-bullet]:h-3
        [&_.swiper-pagination-bullet]:w-3
        [&_.swiper-pagination-bullet-active]:!bg-main-color
        [&_.swiper-pagination-bullet]:bg-gray-600
        "
      >
        <SwiperSlide>
          <div className="w-full flex flex-col items-center pb-8">
            <Image
              src="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
              width={128}
              height={182}
            />
            <div className="mt-6 text-base font-bold w-9/12 break-words text-center">
              ExelVBAを実務で使い倒す技術
            </div>
            <div className="mt-2 text-sm w-9/12 break-words text-center">
              本書では、VBAを実務の現場で活かすための知識(テクニック)と知恵(考え方とコツ)を教えます!
            </div>
            <div className="mt-2 text-sm w-9/12 break-words text-center">
              高橋宣成
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col items-center pb-8">
            <Image
              src="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
              width={128}
              height={182}
            />
            <div className="mt-6 text-base font-bold w-9/12 break-words text-center">
              ExelVBAを実務で使い倒す技術
            </div>
            <div className="mt-2 text-sm w-9/12 break-words text-center">
              本書では、VBAを実務の現場で活かすための知識(テクニック)と知恵(考え方とコツ)を教えます!
            </div>
            <div className="mt-2 text-sm w-9/12 break-words text-center">
              高橋宣成
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BooksDetail;
