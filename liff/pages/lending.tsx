import { useLogin } from "@/components/hooks/useLogin";
import Lending from "@/components/pages/Lending";
import liff from "@line/liff";

type Liff = typeof liff;

const LendingPage = ({
  liff,
  liffError,
}: {
  liff: Liff | null;
  liffError: string | null;
}) => {
  useLogin(liff);
  return <Lending />;
};

export default LendingPage;
