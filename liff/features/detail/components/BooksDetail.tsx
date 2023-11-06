import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import { Book } from "@/types/type";

type Props = {
  bookDetailList: Book[];
};

const BooksDetail = ({ bookDetailList }: Props) => {
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
        {bookDetailList.map((bookDetail, key) => (
          <SwiperSlide key={key}>
            <div className="w-full flex flex-col items-center pb-8">
              <div className="w-[128px] h-[182px] bg-app-gray relative">
                {bookDetail?.image_url && (
                  <Image
                    src={bookDetail.image_url}
                    alt="book"
                    width={128}
                    height={182}
                  />
                )}
              </div>

              <div className="mt-6 text-base font-bold w-9/12 break-words text-center">
                {bookDetail.title}
              </div>
              <div className="mt-2 text-sm w-9/12 break-words text-center">
                {bookDetail.description}
              </div>
              <div className="mt-2 text-sm w-9/12 break-words text-center">
                {bookDetail.author}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BooksDetail;
