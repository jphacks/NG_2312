import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Selector } from "@/redux/type";
import { RentalData } from "@/features/rental/types";
import { useRouter } from "next/router";
import { getRentalInfo } from "../api/getRentalInfo";

export const useRentalInfo = () => {
  const [rentalInfo, setRentalInfo] = useState<RentalData>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { idToken } = useSelector((state: Selector) => state.user);
  const router = useRouter();
  const { rentalId } = router.query;

  useEffect(() => {
    setLoading(true);

    if (!idToken) return;
    if (!rentalId) return;
    (async () => {
      try {
        const resRentalInfo = await getRentalInfo(idToken, rentalId as string);
        setRentalInfo(resRentalInfo);
      } catch (error) {
        setError(new Error("not Questionary"));
      } finally {
        setLoading(false);
      }
    })();
  }, [idToken, rentalId]);

  return { rentalInfo, isLoading, error };
};
