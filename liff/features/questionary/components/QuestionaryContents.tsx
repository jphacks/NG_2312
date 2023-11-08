const QuestionaryContents = () => {
  return (
    <div className="w-full">
      <div>
        <label>
          <div className="text-base text-main-color font-bold mb-3">
            見やすさ
            <span className="text-accent-color ml-1">*</span>
          </div>
          <div className="w-full flex justify-between text-sm text-app-gray">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            //   value="1"
            step="1"
            className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-app-gray [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:-translate-y-1/4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-main-color"
          />
        </label>
      </div>
      <div className="mt-9">
        <label>
          <div className="text-base text-main-color font-bold mb-3">
            理解しやすさ
            <span className="text-accent-color ml-1">*</span>
          </div>
          <div className="w-full flex justify-between text-sm text-app-gray">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            //   value="1"
            step="1"
            className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-app-gray [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:-translate-y-1/4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-main-color"
          />
        </label>
      </div>
      <div className="mt-9">
        <label>
          <div className="text-base text-main-color font-bold mb-3">
            感想
            <span className="text-accent-color ml-1">*</span>
          </div>
          <textarea className="w-full h-32 border-[1px] border-app-gray rounded-lg py-1 px-2 outline-none hover:border-main-color" />
        </label>
      </div>
    </div>
  );
};

export default QuestionaryContents;
