import ContentLoader from "react-content-loader";

type Props = {
  color: "blue" | "orange";
};
const LoadingSentence = ({ color }: Props) => {
  const bgColorCode = color == "blue" ? "#DFE8F1" : "#FFBE46";
  const fgColorCode = color == "blue" ? "#FAFCFF" : "#FDD180";

  return (
    <ContentLoader
      className="w-full h-full"
      backgroundColor={bgColorCode}
      foregroundColor={fgColorCode}
    >
      <rect x="0" y="0" rx="10" ry="10" className="w-full h-full" />
    </ContentLoader>
  );
};

export default LoadingSentence;
