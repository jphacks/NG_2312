import LoadingCards from "@/features/rental/components/LoadingCards";
import Header from "../base/Header";
import Footer from "../base/Footer";
import { useRentals } from "@/features/rental/hooks/useRentals";
import { RentalCardList } from "@/features/rental/components/RentalCardList";
import PlusButton from "../ui/Buttons/PlusButton";
import { useRouter } from "next/router";

const Borrowing = () => {
  const router = useRouter();

  const { borrowList, isLoading, error } = useRentals();

  if (error) {
    alert("エラーが発生しデータを取得できませんでした。");
  }

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header title="借り物リスト" isBack={false} />

      <div className="mt-8">
        {isLoading ? (
          <LoadingCards />
        ) : (
          <RentalCardList rentalType="borrowing" rentalList={borrowList} />
        )}
      </div>

      <div className="mb-44"></div>
      <PlusButton handleButton={() => {}} />
      <Footer pageName="borrowing" />
    </div>
  );
};

export default Borrowing;
