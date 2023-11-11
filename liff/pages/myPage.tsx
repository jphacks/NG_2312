import { useLogin } from "@/components/hooks/useLogin";
import MyPage from "@/components/pages/MyPage";
import liff from "@line/liff";

type Liff = typeof liff;

const HomePage = ({
  liff,
  liffError,
}: {
  liff: Liff | null;
  liffError: string | null;
}) => {
  //   useLogin(liff);

  return <MyPage />;
};

export default HomePage;
