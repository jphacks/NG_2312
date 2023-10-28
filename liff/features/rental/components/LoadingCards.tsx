import LoadingCard from "@/components/ui/loading/LoadingCard";

const LoadingCards = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto">
        <LoadingCard />
      </div>
      <div className="w-11/12 mx-auto mt-8">
        <LoadingCard />
      </div>
      <div className="w-11/12 mx-auto mt-8">
        <LoadingCard />
      </div>
    </div>
  );
};

export default LoadingCards;
