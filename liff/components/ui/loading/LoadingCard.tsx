import ContentLoader from "react-content-loader";

const LoadingCard = () => {
  return (
    <ContentLoader
      className="w-full h-24"
      backgroundColor="#DFE8F1"
      foregroundColor="#FAFCFF"
    >
      <rect x="0" y="0" rx="8" ry="8" className="w-full h-full" />
    </ContentLoader>
  );
};

export default LoadingCard;
