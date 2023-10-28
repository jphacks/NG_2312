import ContentLoader from "react-content-loader";

const LoadingSquare = () => {
  return (
    <ContentLoader className="w-full h-full">
      <rect x="0" y="0" rx="0" ry="0" className="w-full h-full" />
    </ContentLoader>
  );
};

export default LoadingSquare;
