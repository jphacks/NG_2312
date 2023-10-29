import Header from "../base/Header";
import DateInput from "@/features/register/components/DateInput";
import BookSearch from "@/features/register/components/BookSearch";
import { useRouter } from "next/router";
import { BookInfo, Register } from "@/features/register/types";
import { useReducer, useState } from "react";
import LoadingBookCard from "@/features/register/components/LoadingBookCard";
import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";
import { registerRental } from "@/features/register/api/registerRental";
import BookCardList from "@/features/register/components/BookCardList";
import FullWidthButton from "../ui/Buttons/FullWidthButton";

type RegisterAction =
  | { type: "SELECT_DATE"; payload: Date }
  | { type: "ADD_BOOK"; payload: BookInfo }
  | { type: "DELETE_BOOK"; payload: number };

const regiserReducer = (state: Register, action: RegisterAction): Register => {
  switch (action.type) {
    case "SELECT_DATE":
      const return_date = action.payload;
      return_date.setHours(0, 0, 0, 0);
      return { ...state, return_date: return_date };
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
  const initDate = new Date();
  initDate.setHours(0, 0, 0, 0);

  const [state, dispatch] = useReducer(regiserReducer, {
    return_date: initDate,
    bookInfoList: [],
  });
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isPosting, setIsPosting] = useState(false);
  const { idToken } = useSelector((state: Selector) => state.user);

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

  const postRegisterData = async () => {
    if (!idToken) return;
    setIsPosting(true);

    try {
      const responseRegisterData = await registerRental(state, idToken);
      router.push(`/detail/${responseRegisterData.id}`);
    } catch (error) {
      setError(new Error("error post"));
    }

    setIsPosting(false);
  };

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
          <div
            onClick={() =>
              alert("実装途中のため、まだ使用することができません。")
            }
            className="w-2/3 border-b-2 border-main-color text-main-color text-base cursor-pointer"
          >
            バーコード写真から本を登録
          </div>
        </div>
        <div className="mt-10">
          {isSearching ? (
            <LoadingBookCard />
          ) : (
            <BookCardList
              bookInfoList={state.bookInfoList}
              deleteBook={(index: number) =>
                dispatch({ type: "DELETE_BOOK", payload: index })
              }
            />
          )}
        </div>
      </div>
      <div className="mt-20"></div>
      <FullWidthButton
        isActive={state.bookInfoList.length != 0}
        value="確定"
        handleButton={() => postRegisterData()}
        isLoading={isPosting}
      />
    </div>
  );
};

export default Register;
