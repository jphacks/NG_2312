type Props = {
  isReverse?: boolean;
  isActive: boolean;
  value: string;
  handleButton: () => void;
  isLoading?: boolean;
};

const SmallButton = ({
  isReverse,
  isActive,
  value,
  isLoading,
  handleButton,
}: Props) => {
  if (isReverse) {
    return (
      <div
        onClick={() => {
          if (!isActive) return;
          handleButton();
        }}
        className={
          "w-full h-10 rounded-[30px] flex justify-center items-center text-base bg-app-gray cursor-pointer " +
          (isActive ? "text-main-color" : "text-white")
        }
      >
        {isLoading ? (
          <div className="animate-spin h-5 w-5 border-2 border-main-color rounded-full border-t-transparent"></div>
        ) : (
          value
        )}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          if (!isActive) return;
          handleButton();
        }}
        className={
          "w-full h-10 rounded-[30px] flex justify-center items-center text-base text-white cursor-pointer " +
          (isActive ? "bg-main-color" : "bg-app-gray")
        }
      >
        {isLoading ? (
          <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
        ) : (
          value
        )}
      </div>
    );
  }
};

export default SmallButton;
