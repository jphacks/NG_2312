const BookSearch = () => {
  return (
    <div className="w-full">
      <label className="w-full text-main-color">
        <div className="text-base font-bold">本情報登録</div>
        <div className="w-full flex justify-between items-center">
          <input
            type="text"
            className="w-9/12 h-14 rounded-lg border-[1px] border-light-color hover:border-2 outline-none px-2 text-base font-bold"
            placeholder="本のタイトルを登録"
          />
          <button className="w-2/12 h-10 bg-light-color rounded-lg text-xs font-bold">
            追加
          </button>
        </div>
      </label>
    </div>
  );
};

export default BookSearch;
