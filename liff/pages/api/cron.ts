import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/api/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const rental = await prisma.rental.findMany({
      where: {
        return_date: {
          gte: today, // 今日以降の日付
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // 翌日の00:00:00まで
        },
        borrower_id: {
          not: null,
        },
      },
      include: {
        lender: true,
        borrower: true,
        books: true,
      },
    });
  } catch (error) {
    console.log("定期実行中にエラーが発生");
  }
  res.status(200).end();
}
