import ContentLoader from "react-content-loader";

const LoadingQR = () => {
  return (
    <ContentLoader className="w-[200px] h-[200px]">
      <rect x="0" y="0" rx="2" ry="2" className="w-full h-full" />
    </ContentLoader>
  );
};

export default LoadingQR;
