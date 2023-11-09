import { useLogin } from "@/components/hooks/useLogin";
import Questionary from "@/components/pages/Questionary";
import liff from "@line/liff";

type Liff = typeof liff;

const QuestionaryPage = ({
  liff,
  liffError,
}: {
  liff: Liff | null;
  liffError: string | null;
}) => {
  useLogin(liff);
  return <Questionary />;
};

export default QuestionaryPage;
