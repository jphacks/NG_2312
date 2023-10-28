import { useEffect, useState } from "react";
import { getRentals } from "../api/getRentals";
import { RentalData } from "../types";
import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";

export const useRentals = () => {
  const [lendList, setLendList] = useState<RentalData[]>([]);
  const [borrowList, setBorrowList] = useState<RentalData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { idToken } = useSelector((state: Selector) => state.user);

  useEffect(() => {
    setLoading(true);

    if (!idToken) return;
    (async () => {
      try {
        const rentalData = await getRentals(idToken);
        // console.log(rentalData);
        setBorrowList(rentalData.borrowList);
        setLendList(rentalData.lendList);
      } catch (error) {
        setError(new Error("データ取得に失敗"));
      } finally {
        setLoading(false);
      }
    })();
  }, [idToken]);

  if (error) {
    console.error(error);
  }

  return { lendList, borrowList, isLoading, error };
};
