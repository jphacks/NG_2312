import axios from "axios";
import { RentalDetail, ReqRentalDetail } from "../types";

export const putRental = async (idToken: string, rentalData: RentalDetail) => {
  const { id, lender_id, borrower_id, is_return, return_date, created_at } =
    rentalData;

  // putのリクエストに不必要な物を削除
  const reqRentalDetail: ReqRentalDetail = {
    id: id,
    lender_id: lender_id,
    borrower_id: borrower_id,
    is_return: is_return,
    return_date: return_date,
    created_at: created_at,
  };

  const rentalId = reqRentalDetail.id;

  try {
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };

    await axios.put(`/api/rental/${rentalId}`, reqRentalDetail, {
      headers: headers,
    });

    return;
  } catch (error) {
    throw new Error("登録失敗");
  }
};
