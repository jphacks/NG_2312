import { RentalDetail } from "../types";
import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";
import FullWidthButton from "@/components/ui/Buttons/FullWidthButton";
import { useMemo, useState } from "react";
import { putRental } from "../api/putRental";
import { useRouter } from "next/router";

type Props = {
  rentalDetail: RentalDetail | undefined;
};
const PutRentalButton = ({ rentalDetail }: Props) => {
  const { idToken, userId } = useSelector((state: Selector) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const putData = async (idToken: string, data: RentalDetail) => {
    try {
      await putRental(idToken, data);
      router.push(`/detail/${data.id}?reload=on`);
    } catch (error) {
      setError(new Error("error put"));
    } finally {
      setIsLoading(false);
    }
  };

  const returnBooks = async () => {
    if (!idToken) return;
    setIsLoading(true);

    const changedRentalDetail: RentalDetail = {
      ...rentalDetail!,
      is_return: true,
    };
    await putData(idToken, changedRentalDetail);
  };

  const registerBorrower = async () => {
    if (!idToken) return;
    if (!userId) return;
    setIsLoading(true);

    const changedRentalDetail: RentalDetail = {
      ...rentalDetail!,
      borrower_id: userId,
    };
    await putData(idToken, changedRentalDetail);
  };

  if (error) {
    if (error.message == "error put") {
      alert("処理を正常に実行できませんでした。");
    } else {
      alert("予期せぬエラーが発生しました。");
    }
    setError(null);
  }

  const buttonContent = useMemo(() => {
    if (!rentalDetail) return <div></div>;
    if (rentalDetail.is_return) {
      return (
        <FullWidthButton
          isActive={false}
          handleButton={() => {}}
          value={"返却済み"}
        />
      );
    }

    const lenderId = rentalDetail.lender_id;
    const borrowerId = rentalDetail.borrower_id;

    if (lenderId == userId)
      return (
        <FullWidthButton
          isLoading={isLoading}
          isActive={true}
          handleButton={returnBooks}
          value={"返却を完了"}
        />
      );

    if (!borrowerId)
      return (
        <FullWidthButton
          isLoading={isLoading}
          isActive={true}
          handleButton={registerBorrower}
          value={"借りる"}
        />
      );

    return <div></div>;
  }, [userId, rentalDetail, isLoading]);

  return <>{buttonContent}</>;
};

export default PutRentalButton;
