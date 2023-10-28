import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import LoadingCards from "@/features/rental/components/LoadingCards";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  return (
    <div className="w-full h-screen">
      <Header title="詳細" isBack={false} />
      <LoadingCards />
      <Footer pageName="lending" />
    </div>
  );
};

export default Home;
