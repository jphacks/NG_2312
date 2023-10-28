import BooksDetail from "@/features/detail/components/BooksDetail";
import Header from "../base/Header";
import SwitchMenu from "@/features/detail/components/SwitchMenu";
import RentalDetail from "@/features/detail/components/RentalDetail";
import LoadingDetail from "@/features/detail/components/LoadingDetail";
import { useDetail } from "@/features/detail/hooks/useDetail";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const Detail = () => {
  const { rentalDetail, isLoading, error } = useDetail();
  const router = useRouter();
  const [isRentalDetail, setIsRentalDetail] = useState(true);

  if (error) {
    alert("貸し借りのデータが存在しません。一覧に戻ります。");
    router.push("/borrowing");
  }

  const content = useMemo(() => {
    if (isLoading || error)
      return <LoadingDetail isRentalDetail={isRentalDetail} />;
    if (!rentalDetail) return null;
    return isRentalDetail ? (
      <RentalDetail rentalDetail={rentalDetail} />
    ) : (
      <BooksDetail />
    );
  }, [isLoading, error, rentalDetail, isRentalDetail]);

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header title="詳細" isBack={true} />
      <div className="mt-5">
        <SwitchMenu
          isRentalDetail={isRentalDetail}
          setIsRentalDetail={setIsRentalDetail}
        />
      </div>

      <div className="mt-14">{content}</div>

      <div className="mb-24"></div>
    </div>
  );
};

export default Detail;
