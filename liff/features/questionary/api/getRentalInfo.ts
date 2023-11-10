import { RentalData } from "@/features/rental/types";
import axios from "axios";

export const getRentalInfo = async (
  idToken: string,
  rentalId: string
): Promise<RentalData> => {
  try {
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };
    const response = await axios.get(
      `/api/questionary/rentalInfo/${rentalId}`,
      {
        headers: headers,
      }
    );

    const responseRentalData = response.data;

    return responseRentalData;
  } catch (error) {
    throw new Error("データ取得に失敗");
  }
};
