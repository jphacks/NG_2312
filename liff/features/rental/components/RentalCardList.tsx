import Image from "next/image";
import { RentalData } from "../types";
import { useRouter } from "next/router";
import { formatDate } from "@/lib/formatDate";

type Props = {
  rentalList: RentalData[];
  rentalType: "lending" | "borrowing";
};
export const RentalCardList = ({ rentalList, rentalType }: Props) => {
  const router = useRouter();

  const moveDetailPage = (rentalId: string) => {
    router.push(`/detail/${rentalId}`);
  };

  return (
    <div className="w-full">
      {rentalList.map((rentalData, key) => {
        const profileImgUrl =
          rentalType == "lending"
            ? rentalData.borrower?.image_url
            : rentalData.lender.image_url;

        const name =
          rentalType == "lending"
            ? rentalData.borrower?.name ?? "未選択"
            : rentalData.lender.name;

        return (
          <div
            key={key}
            className="mb-8 w-11/12 h-24 mx-auto bg-light-color rounded-lg flex items-center shadow-md cursor-pointer"
            onClick={() => moveDetailPage(rentalData.id)}
          >
            <div className="w-16 ml-3">
              <div className="relative w-12 h-12 rounded-full bg-app-gray mx-auto overflow-hidden">
                {profileImgUrl && <Image src={profileImgUrl} alt="" fill />}
              </div>
              <div className="mt-1">
                <div className="max-w-full overflow-scroll whitespace-nowrap text-center text-xs text-main-color">
                  {name}
                </div>
              </div>
            </div>
            <div className="ml-14">
              <div className="text-xl text-accent-color font-bold">
                {formatDate(rentalData.return_date)}
              </div>
              <div className="mt-3 text-xs text-main-color font-bold">
                貸出数: {rentalData.books.length}冊
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
