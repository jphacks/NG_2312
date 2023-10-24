import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = () => {
  return (
    <div className="w-full">
      <label className="w-full text-main-color">
        <div className="text-base font-bold">返却日</div>
        <div className="w-full h-14 rounded-lg bg-white border-[1px] border-light-color relative">
          <DatePicker
            className="w-full h-full opacity-0"
            onChange={(date: Date) => console.log(date)}
          />
          <div className="w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center">
            <div className="w-fit text-xl font-bold">2023年10月29日</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DateInput;
