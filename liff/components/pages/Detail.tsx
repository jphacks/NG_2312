import BooksDetail from "@/features/detail/components/BooksDetail";
import Header from "../base/Header";
import SwitchMenu from "@/features/detail/components/SwitchMenu";
import RentalDetail from "@/features/detail/components/RentalDetail";
import LoadingDetail from "@/features/detail/components/LoadingDetail";
import { useDetail } from "@/features/detail/hooks/useDetail";

const Detail = () => {
  useDetail();
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header title="詳細" isBack={true} />
      <div className="mt-5">
        <SwitchMenu />
      </div>

      <div className="mt-14">
        {/* <RentalDetail /> */}
        <BooksDetail />

        {/* <LoadingDetail isRentalDetail={false} /> */}
      </div>

      <div className="mb-24"></div>
    </div>
  );
};

export default Detail;
