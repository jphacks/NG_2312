import { formatDate } from "@/lib/formatDate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

const DateInput = ({ date, setDate }: Props) => {
  return (
    <div className="w-full">
      <label className="w-full text-main-color">
        <div className="text-base font-bold">返却日</div>
        <div className="w-full h-14 rounded-lg bg-white border-[1px] border-light-color relative">
          <DatePicker
            className="w-full h-full opacity-0"
            onChange={setDate}
            selected={date}
          />
          <div className="w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center">
            <div className="w-fit text-xl font-bold">{formatDate(date)}</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DateInput;
