import LoadingSentence from "@/components/ui/loading/LoadingSentence";
import PointsDisplay from "./PointsDisplay";
import LoadingSquare from "@/components/ui/loading/LoadingSquare";

const LoadingMyPage = () => {
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[120px] h-[120px] rounded-full bg-app-gray overflow-hidden relative">
          <LoadingSquare />
        </div>
      </div>
      <div className="mt-20 w-full">
        <div className="w-1/2 h-9 mx-auto">
          <LoadingSentence color="blue" />
        </div>
      </div>
      <div className="mt-10">
        <PointsDisplay points={0} />
      </div>
    </>
  );
};

export default LoadingMyPage;
