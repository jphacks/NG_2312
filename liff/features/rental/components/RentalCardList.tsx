import Image from "next/image";
import { useRouter } from "next/router";

export const RentalCardList = () => {
  return (
    <div className="w-full">
      <div className="mb-8 w-11/12 h-24 mx-auto bg-light-color rounded-lg flex items-center shadow-md cursor-pointer">
        <div className="w-16 ml-3">
          <div className="relative w-12 h-12 rounded-full bg-app-gray mx-auto overflow-hidden"></div>
          <div className="mt-1">
            <div className="max-w-full overflow-scroll whitespace-nowrap text-center text-xs text-main-color">
              テスト
            </div>
          </div>
        </div>
        <div className="ml-14">
          <div className="text-xl text-accent-color font-bold">
            2023年10月29日
          </div>
          <div className="mt-3 text-xs text-main-color font-bold">
            貸出数: 3冊
          </div>
        </div>
      </div>
    </div>
  );
};
