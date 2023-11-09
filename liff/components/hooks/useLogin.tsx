import liff from "@line/liff";
import { User } from "@/types/type";
import { setIdToken, setUserId } from "@/redux/userSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Selector } from "@/redux/type";

type Liff = typeof liff;

export const useLogin = (liff: Liff | null) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userId, idToken } = useSelector((state: Selector) => state.user);

  const userLogin = async (idToken: string | null, liff: Liff) => {
    try {
      if (!idToken) throw new Error("トークン取得失敗");
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };

      const response = await axios.post(`/api/user`, null, {
        headers: headers,
      });
      const user: User = response.data;

      dispatch(setUserId(user.id));
      dispatch(setIdToken(idToken));
    } catch (e) {
      const isInLiff = liff.isInClient();
      if (isInLiff) {
        alert("ログインに失敗しました。");
        liff.closeWindow();
        return;
      }

      if (confirm("ログイン失敗しました。LINEログインをし直しますか?")) {
        liff.logout();
        router.reload();
      } else {
        alert("ログインに失敗しサービスを利用することができません。");
        router.push("/");
      }
    }
  };

  useEffect(() => {
    if (userId && idToken) return;

    if (!liff) return;

    console.log(liff.getIDToken());

    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      const idToken = liff.getIDToken();
      userLogin(idToken, liff);
    }
  }, [liff]);
};
