import { useLogin } from "@/components/hooks/useLogin";
import Detail from "@/components/pages/Detail";
import liff from "@line/liff";

type Liff = typeof liff;

const DetailPage = ({
  liff,
  liffError,
}: {
  liff: Liff | null;
  liffError: string | null;
}) => {
  useLogin(liff);
  return <Detail />;
};

export default DetailPage;
