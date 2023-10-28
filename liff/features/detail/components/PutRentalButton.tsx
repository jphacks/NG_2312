import { RentalDetail } from "../types";
import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";
import FullWidthButton from "@/components/ui/Buttons/FullWidthButton";
import { useMemo, useState } from "react";

type Props = {
  rentalDetail: RentalDetail | undefined;
};
const PutRentalButton = ({ rentalDetail }: Props) => {
  const { idToken, userId } = useSelector((state: Selector) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    if (error.message == "error return") {
      alert("返却処理を正常に実行できませんでした。");
    } else if (error.message == "error borrow register") {
      alert("借受登録を正常に実行できませんでした。");
    } else {
      alert("予期せぬエラーが発生しました。");
    }
    setError(null);
  }

  const buttonContent = useMemo(() => {
    if (!rentalDetail || rentalDetail.is_return) return <div></div>;

    const lenderId = rentalDetail.lender_id;
    const borrowerId = rentalDetail.borrower_id;

    if (lenderId == userId)
      return (
        <FullWidthButton
          isLoading={isLoading}
          isActive={true}
          handleButton={() => {}}
          value={"返却完了"}
        />
      );

    if (!borrowerId)
      return (
        <FullWidthButton
          isLoading={isLoading}
          isActive={true}
          handleButton={() => {}}
          value={"借りる"}
        />
      );

    return <div></div>;
  }, [userId, rentalDetail, isLoading]);

  return <>{buttonContent}</>;
};

export default PutRentalButton;
