import axios from "axios";
import { RentalDetail } from "../types";

export const getDetail = async (idToken: string, rentalId: string) => {
  try {
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };

    const response = await axios.get(`/api/rental/${rentalId}`, {
      headers: headers,
    });

    const responseRentalDetail: RentalDetail = response.data;

    return responseRentalDetail;
  } catch (error) {
    throw new Error("データ取得に失敗");
  }
};
