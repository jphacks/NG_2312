import axios from "axios";
import { ResponseRentalData } from "../types";

export const getRentals = async (
  idToken: string
): Promise<ResponseRentalData> => {
  try {
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };

    const response = await axios.get(`/api/rental`, {
      headers: headers,
    });

    const responseRentalData = response.data;

    return responseRentalData;
  } catch (error) {
    throw new Error("データ取得に失敗");
  }
};
