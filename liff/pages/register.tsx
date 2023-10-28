import { useLogin } from "@/components/hooks/useLogin";
import Register from "@/components/pages/Register";
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

  return <Register />;
};

export default LendingPage;
