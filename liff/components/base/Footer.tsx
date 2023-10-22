import { useRouter } from "next/router";
import BorrowIcon from "../ui/svg/BorrowIcon";
import LendIcon from "../ui/svg/LendIcon";

type Props = {
  pageName: "borrowing" | "lending";
};

const Footer = ({ pageName }: Props) => {
  const isBorrowing = pageName == "borrowing";
  const isLending = pageName == "lending";

  const router = useRouter();

  return (
    <>
      <div className="w-full h-20 bg-[#FFF5DF] fixed bottom-0 left-0 z-10 flex justify-around items-center shadow-top">
        <div
          className="w-16 flex flex-col items-center"
          onClick={() => router.push("/borrowing")}
        >
          <BorrowIcon isActive={isBorrowing} />
          <div className="mt-1">
            <div
              className={
                "text-xs " + (isBorrowing ? "text-main-color" : "text-app-gray")
              }
            >
              借りる
            </div>
          </div>
        </div>
        <div
          className="w-16 flex flex-col items-center"
          onClick={() => router.push("/lending")}
        >
          <LendIcon isActive={isLending} />
          <div className="mt-1">
            <div
              className={
                "text-xs " + (isLending ? "text-main-color" : "text-app-gray")
              }
            >
              貸す
            </div>
          </div>
        </div>
      </div>

      {/* headerの下に要素が入り込まないようにする */}
      <div className="w-full h-20"></div>
    </>
  );
};

export default Footer;
