import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/api/db";
import { Rental } from "@prisma/client";
import { getUserInfoByIdToken } from "@/lib/api/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id_token = req.headers.authorization;
    const userInfo = await getUserInfoByIdToken(id_token);
    const userId = userInfo.id;
    const rental_id = req.query.rental_id as string;

    if (req.method == "GET") {
      try {
        const rental = await prisma.rental.findFirst({
          where: {
            id: rental_id,
          },
          include: {
            lender: true,
            borrower: true,
            books: true,
          },
        });

        if (!rental) {
          res.status(404).json({ message: "Requested resource not found" });
          return;
        }

        res.status(200).json(rental);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else if (req.method == "PUT") {
      try {
        const rentalData = req.body as Rental;

        const updatedRental = await prisma.rental.update({
          where: {
            id: rental_id,
          },
          data: rentalData,
        });

        res.status(204).end();
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      res.status(403).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
}
