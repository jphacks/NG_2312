type Props = {
  percent: number;
};

const ProgressBar = ({ percent }: Props) => {
  return (
    <div className="w-full h-3 rounded-lg bg-app-gray relative overflow-hidden">
      <div
        className="w-1/2 h-full bg-main-color rounded-lg absolute top-0 left-0"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
