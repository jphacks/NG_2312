import { useRouter } from "next/router";
import Header from "../base/Header";
import PointsDisplay from "@/features/myPage/components/PointsDisplay";
import { useUser } from "@/features/myPage/hooks/useUser";
import LoadingMyPage from "@/features/myPage/components/LoadingMyPage";
import Image from "next/image";

const MyPage = () => {
  const router = useRouter();
  const { userInfo, isLoading, error } = useUser();

  if (error) {
    if (error.message == "not found user") {
      alert("ユーザがいません。");
    } else {
      alert("予期せぬエラーが発生しました。");
    }
  }

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 -z-50 bg-base-color w-full h-screen overflow-hidden"></div>
      <Header
        title="マイページ"
        isBack={true}
        handleBackButton={() => {
          router.back();
        }}
      />
      <div className="mt-32">
        <div className="w-11/12 pb-10 mx-auto bg-[#FFFCF6] rounded-xl flex flex-col items-center relative">
          {isLoading ? (
            <LoadingMyPage />
          ) : (
            <>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[120px] h-[120px] rounded-full bg-app-gray overflow-hidden relative">
                  {userInfo.image_url && (
                    <Image src={userInfo.image_url} alt="" fill />
                  )}
                </div>
              </div>
              <div className="mt-20 w-full">
                <div className="truncate">
                  <h3 className="mx-auto w-10/12 text-3xl font-bold text-main-color text-center whitespace-nowrap truncate">
                    {userInfo.name}
                  </h3>
                </div>
              </div>
              <div className="mt-10">
                <PointsDisplay points={userInfo.points} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
