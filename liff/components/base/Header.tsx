import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  title: string;
  isBack: boolean;
  handleBackButton?: () => void;
};
const Header = ({ title, isBack, handleBackButton }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-16 bg-main-color fixed top-0 left-0 z-10 flex justify-center items-center">
        {isBack && (
          <div
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
            onClick={handleBackButton}
          >
            <div className="w-3 h-3 border-l-2 border-t-2 rounded-[1px] border-white -rotate-45"></div>
          </div>
        )}
        <h1 className="text-center text-white text-base font-bold">{title}</h1>
        <div
          className="absolute top-1/2 right-1 -translate-y-1/2 w-16 h-16 flex items-center justify-center"
          onClick={() => router.push("/myPage")}
        >
          <div className="w-5 h-5 relative">
            <Image
              src="/images/userIcon.png"
              alt="user_icon"
              fill
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* headerの下に要素が入り込まないようにする */}
      <div className="w-full h-16"></div>
    </>
  );
};

export default Header;
