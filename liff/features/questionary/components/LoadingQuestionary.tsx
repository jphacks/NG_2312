import LoadingSquare from "@/components/ui/loading/LoadingSquare";
import ProgressBar from "./ProgressBar";
import LoadingSentence from "@/components/ui/loading/LoadingSentence";

const LoadingQuestionary = () => {
  return (
    <div className="px-8">
      <div className="mt-9">
        <ProgressBar percent={0} />
      </div>
      <div className="mt-9">
        <div className="w-full h-20 flex items-center justify-between px-5">
          <div className="w-10 h-14">
            <LoadingSquare />
          </div>
          <div className="w-48 h-4 mx-5">
            <LoadingSentence color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingQuestionary;
