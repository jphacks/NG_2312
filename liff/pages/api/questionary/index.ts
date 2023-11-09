import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/api/db";
import { getUserInfoByIdToken } from "@/lib/api/user";
import { AnswerInfo } from "@/features/questionary/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id_token = req.headers.authorization;
    const userInfo = await getUserInfoByIdToken(id_token);
    const userId = userInfo.id;

    if (req.method == "POST") {
      const { answerInfoList, destination_id } = req.body;
      const respondent_id = userId;

      try {
        const newAnswers = await Promise.all(
          answerInfoList.map(async (answerInfo: AnswerInfo) => {
            const newAnswer = await prisma.answer.create({
              data: {
                respondent_id,
                ...answerInfo,
              },
            });
            return newAnswer;
          })
        );

        const destinationUser = await prisma.user.findUnique({
          where: { id: destination_id },
        });

        if (!destinationUser) throw new Error("ポイント付与相手が存在しません");

        const userPoints = destinationUser.points;
        // アンケートの回答数*10ポイントを相手に付与
        const plusPoints = newAnswers.length * 10;

        await prisma.user.update({
          where: {
            id: destination_id,
          },
          data: {
            points: userPoints + plusPoints,
          },
        });

        res.status(201).end();
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
