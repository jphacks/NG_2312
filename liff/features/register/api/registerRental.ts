import axios from "axios";
import { Register, ResRegisterData } from "../types";

export const registerRental = async (
  registerInfo: Register,
  idToken: string
) => {
  try {
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };

    const response = await axios.post(`/api/rental`, registerInfo, {
      headers: headers,
    });

    const responseRegisterData: ResRegisterData = response.data;

    return responseRegisterData;
  } catch (error) {
    throw new Error("登録失敗");
  }
};
