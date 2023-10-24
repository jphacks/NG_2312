type Props = {
  isActive: boolean;
  value: string;
  handleButton: () => void;
};

const FullWidthButton = ({ isActive, value, handleButton }: Props) => {
  return (
    <div className="w-full fixed bottom-0 left-0 z-10">
      <div
        className={
          "w-full h-20 flex justify-center items-center text-2xl text-white cursor-pointer " +
          (isActive ? "bg-accent-color" : "bg-app-gray")
        }
      >
        {value}
      </div>
    </div>
  );
};

export default FullWidthButton;
