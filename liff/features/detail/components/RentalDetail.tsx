import QRcode from "@/components/ui/QRcode";
import { RentalDetail } from "../types";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";

type Props = {
  rentalDetail: RentalDetail;
};

const RentalDetail = ({ rentalDetail }: Props) => {
  const lender = rentalDetail.lender;
  const borrower = rentalDetail?.borrower;

  return (
    <div className="w-full flex flex-col items-center">
      <QRcode text={rentalDetail.id} />
      <div className="mt-7">
        <div className="text-xl font-bold text-accent-color">
          {formatDate(rentalDetail.return_date)}
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="mx-auto w-9/12 flex justify-between">
          <div className="w-28 text-center text-main-color text-xl flex flex-col items-center">
            <div className="font-bold">貸出者</div>
            <div className="mt-4">
              <div className="relative w-12 h-12 rounded-full bg-app-gray overflow-hidden">
                {lender.image_url && (
                  <Image src={lender.image_url} alt="" fill />
                )}
              </div>
            </div>
            <div className="mt-4 w-full">
              <div className="max-w-full overflow-scroll whitespace-nowrap">
                {lender.name}
              </div>
            </div>
          </div>
          <div className="w-28 text-center text-main-color text-xl flex flex-col items-center">
            <div className="font-bold">借受者</div>
            <div className="mt-4">
              <div className="relative w-12 h-12 rounded-full bg-app-gray overflow-hidden">
                {borrower?.image_url && (
                  <Image src={borrower.image_url} alt="" fill />
                )}
              </div>
            </div>
            <div className="mt-4 w-full">
              <div className="max-w-full overflow-scroll whitespace-nowrap">
                {borrower ? borrower.name : "未選択"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetail;
