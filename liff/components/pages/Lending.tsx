import LoadingCards from "@/features/rental/components/LoadingCards";
import Header from "../base/Header";
import Footer from "../base/Footer";
import { RentalCardList } from "@/features/rental/components/RentalCardList";
import PlusButton from "../ui/Buttons/PlusButton";
import { useRouter } from "next/router";

const Lending = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header title="貸出リスト" isBack={false} />

      <div className="mt-8">
        <RentalCardList />
      </div>

      <div className="mb-44"></div>
      <PlusButton handleButton={() => router.push("/register")} />
      <Footer pageName="lending" />
    </div>
  );
};

export default Lending;
