import LoadingQR from "@/components/ui/loading/LoadingQR";
import LoadingSentence from "@/components/ui/loading/LoadingSentence";
import LoadingSquare from "@/components/ui/loading/LoadingSquare";

type Props = {
  isRentalDetail: boolean;
};

const LoadingDetail = ({ isRentalDetail }: Props) => {
  return (
    <>{isRentalDetail ? <LoadingRentalDetail /> : <LoadingBookDetail />}</>
  );
};

const LoadingRentalDetail = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <LoadingQR />
        <div className="mt-7">
          <div className="w-24 h-5">
            <LoadingSentence color="orange" />
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="mx-auto w-9/12 flex justify-between">
            <div className="w-28 flex flex-col items-center">
              <div className="font-bold">貸出者</div>
              <div className="mt-4">
                <div className="relative w-12 h-12 rounded-full bg-app-gray"></div>
              </div>
              <div className="mt-4 w-full">
                <div className="w-full h-5">
                  <LoadingSentence color="blue" />
                </div>
              </div>
            </div>
            <div className="w-28 flex flex-col items-center">
              <div className="font-bold">借受者</div>
              <div className="mt-4">
                <div className="relative w-12 h-12 rounded-full bg-app-gray"></div>
              </div>
              <div className="mt-4 w-full">
                <div className="w-full h-5">
                  <LoadingSentence color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LoadingBookDetail = () => {
  return (
    <>
      <div className="w-full text-main-color">
        <div className="w-full flex flex-col items-center pb-8">
          <div className="w-[128px] h-[182px]">
            <LoadingSquare />
          </div>
          <div className="mt-6 w-5/12 h-4">
            <LoadingSentence color="blue" />
          </div>
          <div className="mt-2 w-9/12 h-[14px]">
            <LoadingSentence color="blue" />
          </div>
          <div className="mt-2 w-8/12 h-[14px]">
            <LoadingSentence color="blue" />
          </div>
          <div className="mt-2 w-3/12 h-[14px]">
            <LoadingSentence color="blue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingDetail;
