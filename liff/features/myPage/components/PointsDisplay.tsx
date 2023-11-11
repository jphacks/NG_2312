import { Circle } from "rc-progress";

const aimPoints = 200;

type Props = {
  points: number;
};

const PointsDisplay = ({ points }: Props) => {
  return (
    <div className="w-fit h-fit relative">
      <Circle
        className="w-56 h-56"
        percent={(points * 100) / aimPoints}
        strokeWidth={6}
        trailWidth={6}
        strokeColor="#FFA500"
        trailColor="#D9D9D9"
      />
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="w-fit h-fit relative">
          <h1 className="text-5xl text-accent-color font-bold">{points}</h1>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-7">
            <p className="text-2xl text-accent-color font-bold">pt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsDisplay;
