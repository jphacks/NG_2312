import type { NextApiRequest, NextApiResponse } from "next";
import { Book, Rental } from "@/types/type";
import prisma from "@/lib/api/db";
import { getUserInfoByIdToken } from "@/lib/api/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id_token = req.headers.authorization;
    const userInfo = await getUserInfoByIdToken(id_token);
    const userId = userInfo.id;

    if (req.method == "GET") {
      try {
        const lendList = await prisma.rental.findMany({
          where: {
            lender_id: userId,
            is_return: false,
          },
          include: {
            lender: true,
            borrower: true,
            books: true,
          },
          orderBy: {
            return_date: "asc",
          },
        });

        const borrowList = await prisma.rental.findMany({
          where: {
            borrower_id: userId,
            is_return: false,
          },
          include: {
            lender: true,
            borrower: true,
            books: true,
          },
          orderBy: {
            return_date: "desc",
          },
        });

        const resData = {
          lendList: lendList,
          borrowList: borrowList,
        };

        res.status(200).json(resData);
      } catch (error) {
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
