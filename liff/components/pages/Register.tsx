import Header from "../base/Header";
import DateInput from "@/features/register/components/DateInput";
import BookSearch from "@/features/register/components/BookSearch";
import { useRouter } from "next/router";
import { BookInfo, Register } from "@/features/register/types";
import { useReducer, useState } from "react";
import LoadingBookCard from "@/features/register/components/LoadingBookCard";

type RegisterAction =
  | { type: "SELECT_DATE"; payload: Date }
  | { type: "ADD_BOOK"; payload: BookInfo }
  | { type: "DELETE_BOOK"; payload: number };

const regiserReducer = (state: Register, action: RegisterAction): Register => {
  switch (action.type) {
    case "SELECT_DATE":
      return { ...state, return_date: action.payload };
    case "ADD_BOOK":
      const addedBookInfoList = [...state.bookInfoList, action.payload];
      return { ...state, bookInfoList: addedBookInfoList };
    case "DELETE_BOOK":
      const removedBookInfoList = state.bookInfoList.filter(
        (_, index) => index !== action.payload
      );
      return { ...state, bookInfoList: removedBookInfoList };
    default:
      return state;
  }
};

const Register = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(regiserReducer, {
    return_date: new Date(),
    bookInfoList: [],
  });
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    if (error.message == "not book") {
      alert("関連の本が見つかりませんでした。");
    } else if (error.message == "error post") {
      alert("登録できませんでした");
    } else {
      alert("予期せぬエラーが発生しました。");
    }
    setError(null);
  }

  console.log(state);

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header
        title="登録"
        isBack={true}
        handleBackButton={() => {
          router.push("/lending");
        }}
      />
      <div className="w-10/12 mx-auto">
        <div className="mt-10">
          <DateInput
            date={state.return_date}
            setDate={(date: Date) =>
              dispatch({ type: "SELECT_DATE", payload: date })
            }
          />
        </div>
        <div className="mt-10">
          <BookSearch
            setIsLoading={setIsSearching}
            setError={setError}
            addBook={(bookInfo: BookInfo) =>
              dispatch({ type: "ADD_BOOK", payload: bookInfo })
            }
          />
        </div>
        <div className="mt-4">
          <div className="w-2/3 border-b-2 border-main-color text-main-color text-base cursor-pointer">
            バーコード写真から本を登録
          </div>
        </div>
        <div className="mt-10">{isSearching && <LoadingBookCard />}</div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default Register;