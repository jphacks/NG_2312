import Modal from "@/components/ui/Modal";
import { RentalData } from "@/features/rental/types";
import { useMemo } from "react";

type Props = {
  rentalInfo: RentalData;
  isLoading: boolean;
  error: Error | undefined;
};
const ResultModal = ({ rentalInfo, isLoading, error }: Props) => {
  const destinationName = rentalInfo.lender.name;
  const points = rentalInfo.books.length * 10;
  const content = useMemo(() => {
    if (error) {
      return (
        <div className="text-main-color text-xl font-semibold text-center">
          エラーが発生し、処理を正常に行えませんでした。
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="animate-spin h-24 w-24 border-4 border-main-color rounded-full border-t-transparent"></div>
      );
    }

    return (
      <>
        <div className="text-xl text-main-color font-semibold text-center">
          {destinationName}さんに
        </div>
        <div className="mt-4">
          <div className="text-xl text-accent-color font-bold text-center">
            <span className="text-7xl">{points}</span>pt
          </div>
        </div>
        <div className="mt-4">
          <div className="text-xl text-main-color font-semibold text-center">
            プレゼントしました。
          </div>
        </div>
      </>
    );
  }, [isLoading, error]);

  return (
    <Modal>
      <div className="w-10/12 h-96 flex flex-col justify-center items-center">
        {content}
      </div>
    </Modal>
  );
};

export default ResultModal;
