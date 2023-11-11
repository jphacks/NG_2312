import { User } from "@/types/type";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Selector } from "@/redux/type";

export const useUser = () => {
  const { idToken } = useSelector((state: Selector) => state.user);
  const [userInfo, setUserInfo] = useState<User>({
    id: "",
    line_id: "",
    name: "unknown",
    image_url: null,
    points: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const getUser = async (idToken: string) => {
    setIsLoading(true);
    try {
      if (!idToken) throw new Error("トークン取得失敗");
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };

      const response = await axios.get(`/api/user`, {
        headers: headers,
      });
      const user: User = response.data;
      setUserInfo(user);
    } catch (error) {
      setError(new Error("not found user"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!idToken) return;
    getUser(idToken);
  }, [idToken]);

  return { userInfo, isLoading, error };
};
