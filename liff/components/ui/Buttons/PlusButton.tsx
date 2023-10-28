type Props = {
  handleButton: () => void;
};

const PlusButton = ({ handleButton }: Props) => {
  return (
    <div className="fixed bottom-28 right-4 z-10" onClick={handleButton}>
      <div className="w-16 h-16 rounded-full bg-main-color shadow-lg cursor-pointer relative">
        <i className="w-8 h-1 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
        <i className="w-8 h-1 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"></i>
      </div>
    </div>
  );
};

export default PlusButton;
