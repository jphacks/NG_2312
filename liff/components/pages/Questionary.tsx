import ProgressBar from "@/features/questionary/components/ProgressBar";
import Header from "../base/Header";
import BookDisplay from "@/features/questionary/components/BookDisplay";
import QuestionaryContents from "@/features/questionary/components/QuestionaryContents";
import SmallButton from "../ui/Buttons/SmallButton";

const Questionary = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header title="アンケート" isBack={false} />
      <div className="px-8">
        <div className="mt-9">
          <ProgressBar percent={80} />
        </div>
        <div className="mt-9">
          <BookDisplay />
        </div>
        <div className="mt-9">
          <QuestionaryContents />
        </div>
        <div className="mt-9 flex justify-around mb-9">
          <div className="w-32">
            <SmallButton
              isActive={true}
              isReverse={true}
              handleButton={() => {}}
              value="戻る"
            />
          </div>
          <div className="w-32">
            <SmallButton isActive={true} handleButton={() => {}} value="次へ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionary;
