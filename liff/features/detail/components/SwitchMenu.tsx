import { useState } from "react";

const SwitchMenu = () => {
  const [isRentalDetail, setIsRentalDetail] = useState(true);
  return (
    <div className="w-full cursor-pointer">
      <div className="flex border-b-[1px] border-app-gray">
        <TitleView
          title="貸出詳細"
          isActive={isRentalDetail}
          handleButton={() => setIsRentalDetail(true)}
        />
        <TitleView
          title="本詳細"
          isActive={!isRentalDetail}
          handleButton={() => setIsRentalDetail(false)}
        />
      </div>
    </div>
  );
};

type TitleViewProps = {
  title: string;
  isActive: boolean;
  handleButton: () => void;
};
const TitleView = ({ title, isActive, handleButton }: TitleViewProps) => {
  return (
    <div
      className={
        "w-1/2 text-sm " + (isActive ? "border-b-2 border-main-color" : "")
      }
      onClick={() => handleButton()}
    >
      <div
        className={
          "mb-2 w-full text-center " +
          (isActive ? "text-main-color" : "text-app-gray")
        }
      >
        {title}
      </div>
    </div>
  );
};

export default SwitchMenu;
