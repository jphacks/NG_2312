import { useLogin } from "@/components/hooks/useLogin";
import Borrowing from "@/components/pages/Borrowing";
import liff from "@line/liff";

type Liff = typeof liff;

const BorrowingPage = ({
  liff,
  liffError,
}: {
  liff: Liff | null;
  liffError: string | null;
}) => {
  useLogin(liff);

  return <Borrowing liff={liff} />;
};

export default BorrowingPage;
