import LoadingCard from "@/components/ui/loading/LoadingCard";

const LoadingBookCard = () => {
  return (
    <div className="w-full">
      <h3 className="text-center text-base font-bold text-main-color">
        登録リスト
      </h3>
      <div className="mt-4">
        <div className="w-full h-20">
          <LoadingCard />
        </div>
      </div>
    </div>
  );
};

export default LoadingBookCard;
