import type { NextApiRequest, NextApiResponse } from "next";
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

    const rental_id = req.query.rental_id as string;

    if (req.method == "GET") {
      try {
        const rental = await prisma.rental.findFirst({
          where: {
            id: rental_id,
            borrower_id: userId,
          },
          include: {
            lender: true,
            borrower: true,
            books: true,
          },
        });

        if (!rental) {
          res.status(404).json({ message: "Rental Not Found" });
          return;
        }

        const books = rental.books;
        const bookIdList: number[] = books.map((book) => {
          return book.id;
        });

        const existAnswers = await prisma.answer.findMany({
          where: {
            book_id: {
              in: bookIdList,
            },
          },
        });

        // すでに対象の本に関する回答があった場合は回答済みというになる
        if (existAnswers.length > 0) {
          res.status(404).json({ message: "Questionary Not Found" });
          return;
        }

        res.status(200).json(rental);
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
