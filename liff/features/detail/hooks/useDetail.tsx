import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";
import { RentalDetail } from "../types";
import { useRouter } from "next/router";
import { getDetail } from "../api/getDetail";

export const useDetail = () => {
  const [rentalDetail, setRentalDetail] = useState<RentalDetail>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { idToken } = useSelector((state: Selector) => state.user);
  const router = useRouter();
  const { rentalId, reload } = router.query;

  useEffect(() => {
    setLoading(true);

    if (!idToken) return;
    if (!rentalId) return;

    (async () => {
      console.log("a");
      try {
        const resRentalDetail = await getDetail(idToken, rentalId as string);
        setRentalDetail(resRentalDetail);
      } catch (error) {
        setError(new Error("データ取得に失敗"));
      } finally {
        setLoading(false);
      }
    })();
  }, [idToken, rentalId, reload]);

  if (error) {
    console.error(error);
  }

  return { rentalDetail, isLoading, error };
};
