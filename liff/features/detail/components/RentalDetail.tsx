import QRcode from "@/components/ui/QRcode";

const RentalDetail = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <QRcode text="test" />
      <div className="mt-7">
        <div className="text-xl font-bold text-accent-color">
          2023月 10月 26 日
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="mx-auto w-9/12 flex justify-between">
          <div className="w-28 text-center text-main-color text-xl flex flex-col items-center">
            <div className="font-bold">貸出者</div>
            <div className="mt-4">
              <div className="relative w-12 h-12 rounded-full bg-app-gray"></div>
            </div>
            <div className="mt-4 w-full">
              <div className="max-w-full overflow-scroll whitespace-nowrap">
                テスト
              </div>
            </div>
          </div>
          <div className="w-28 text-center text-main-color text-xl flex flex-col items-center">
            <div className="font-bold">借受者</div>
            <div className="mt-4">
              <div className="relative w-12 h-12 rounded-full bg-app-gray"></div>
            </div>
            <div className="mt-4 w-full">
              <div className="max-w-full overflow-scroll whitespace-nowrap">
                未選択
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetail;
