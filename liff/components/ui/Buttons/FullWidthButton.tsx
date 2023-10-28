type Props = {
  isActive: boolean;
  value: string;
  handleButton: () => void;
  isLoading?: boolean;
};

const FullWidthButton = ({
  isActive,
  value,
  isLoading,
  handleButton,
}: Props) => {
  return (
    <div className="w-full fixed bottom-0 left-0 z-10">
      <div
        onClick={() => {
          if (!isActive) return;
          handleButton();
        }}
        className={
          "w-full h-20 flex justify-center items-center text-2xl text-white cursor-pointer " +
          (isActive ? "bg-accent-color" : "bg-app-gray")
        }
      >
        {isLoading ? (
          <div className="animate-spin h-10 w-10 border-4 border-white rounded-full border-t-transparent"></div>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

export default FullWidthButton;
