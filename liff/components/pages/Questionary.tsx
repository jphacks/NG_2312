import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";
import ProgressBar from "@/features/questionary/components/ProgressBar";
import Header from "../base/Header";
import BookDisplay from "@/features/questionary/components/BookDisplay";
import QuestionaryContents from "@/features/questionary/components/QuestionaryContents";
import SmallButton from "../ui/Buttons/SmallButton";
import { useRentalInfo } from "@/features/questionary/hooks/useRentalInfo";
import LoadingQuestionary from "@/features/questionary/components/LoadingQuestionary";
import { useEffect, useReducer, useState } from "react";
import { AnswerInfo } from "@/features/questionary/types";
import { postAnswers } from "@/features/questionary/api/postAnswers";
import ResultModal from "@/features/questionary/components/ResultModal";

export type AnswerAction =
  | { type: "SET_READABLE"; payload: { index: number; score: number } }
  | { type: "SET_UNDERSTANDABLE"; payload: { index: number; score: number } }
  | { type: "SET_IMPRESSIONS"; payload: { index: number; text: string } }
  | { type: "INIT_ANSWER"; payload: AnswerInfo[] };

const answerReducer = (
  state: AnswerInfo[],
  action: AnswerAction
): AnswerInfo[] => {
  switch (action.type) {
    case "SET_READABLE":
      const changedReadableState = state.concat();
      changedReadableState[action.payload.index] = {
        ...changedReadableState[action.payload.index],
        readable_point: action.payload.score,
      };

      return changedReadableState;
    case "SET_UNDERSTANDABLE":
      const changedUnderstandableState = state.concat();
      changedUnderstandableState[action.payload.index] = {
        ...changedUnderstandableState[action.payload.index],
        understandable_point: action.payload.score,
      };

      return changedUnderstandableState;
    case "SET_IMPRESSIONS":
      const changedImpressionsState = state.concat();
      changedImpressionsState[action.payload.index] = {
        ...changedImpressionsState[action.payload.index],
        impressions: action.payload.text,
      };

      return changedImpressionsState;
    case "INIT_ANSWER":
      return action.payload;
    default:
      return state;
  }
};

const Questionary = () => {
  const { idToken } = useSelector((state: Selector) => state.user);
  const { rentalInfo, isLoading, error } = useRentalInfo();
  const [pageIndex, setPageIndex] = useState(0);
  const [state, dispatch] = useReducer(answerReducer, []);
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState<Error>();
  const [isModal, setIsModal] = useState(false);

  // rentalInfoが取得できた段階でstateに初期値を設定
  useEffect(() => {
    if (!rentalInfo) return;

    const books = rentalInfo.books;
    const initState: AnswerInfo[] = books.map((book) => {
      return {
        book_id: book.id,
        readable_point: 4,
        understandable_point: 4,
        impressions: "",
      };
    });

    dispatch({ type: "INIT_ANSWER", payload: initState });
  }, [rentalInfo]);

  if (error) {
    if (error.message == "not Questionary") {
      alert("こちらのアンケートは存在しない、または回答済みです。");
    } else {
      alert("予期せぬエラーが発生しました。");
    }
  }

  const handleCompButton = async () => {
    if (!idToken) return;

    if (!state[pageIndex].impressions) {
      alert("必須項目に回答をしてください。");
      return;
    }

    // 最後のアンケートでなければ次のアンケートへ進む
    if (rentalInfo?.books.length != pageIndex + 1) {
      setPageIndex(pageIndex + 1);
      return;
    }

    setIsModal(true);
    setIsPosting(true);
    // アンケート登録
    try {
      await postAnswers(idToken, rentalInfo!.lender_id, state);
    } catch (error) {
      setPostError(new Error("can not answer"));
    } finally {
      setIsPosting(false);
    }
    return;
  };

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header title="アンケート" isBack={false} />
      {rentalInfo && isModal && (
        <ResultModal
          rentalInfo={rentalInfo}
          isLoading={isPosting}
          error={postError}
        />
      )}
      {error ? null : rentalInfo && state.length ? (
        <div className="px-8">
          <div className="mt-9">
            <ProgressBar
              percent={((pageIndex + 1) * 100) / rentalInfo.books.length}
            />
          </div>
          <div className="mt-9">
            <BookDisplay book={rentalInfo.books[pageIndex]} />
          </div>
          <div className="mt-9">
            <QuestionaryContents
              pageIndex={pageIndex}
              answerState={state[pageIndex]}
              answerDispatch={dispatch}
            />
          </div>
          <div className="mt-9 flex justify-around mb-9">
            <div className="w-32">
              <SmallButton
                isActive={pageIndex != 0}
                isReverse={true}
                handleButton={() => setPageIndex(pageIndex - 1)}
                value="戻る"
              />
            </div>
            <div className="w-32">
              <SmallButton
                isActive={rentalInfo?.books ? true : false}
                handleButton={() => handleCompButton()}
                value={
                  rentalInfo?.books.length == pageIndex + 1 ? "登録" : "次へ"
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <LoadingQuestionary />
      )}
    </div>
  );
};

export default Questionary;
