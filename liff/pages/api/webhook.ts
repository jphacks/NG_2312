import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/api/db";
import { replyMessage } from "@/lib/api/line/replyMessage";
import { LineMessagesType } from "@/lib/api/line/type";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const replyToken = req.body.events[0].replyToken;
  const lineId = req.body.events[0].source.userId;
  const message = req.body.events[0].message.text;

  if (message != "オススメ") {
    res.status(200).end();
    return;
  }

  const replyMessages = await (async (): Promise<LineMessagesType> => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          line_id: lineId,
        },
      });

      if (!user) throw new Error("not found user");

      const userId = user.id;
      const rentalList = await prisma.rental.findMany({
        where: {
          OR: [
            {
              lender_id: userId,
            },
            {
              borrower_id: userId,
            },
          ],
          borrower_id: {
            not: null,
          },
        },
      });

      if (rentalList.length == 0) throw new Error("not found rental");

      const friendIdListDupl: string[] = rentalList.map((rental) => {
        if (rental.lender_id == userId) return rental.borrower_id!;
        return rental.lender_id;
      });

      const friendIdList = [...new Set(friendIdListDupl)];

      const recomendBooks = await prisma.book.findMany({
        where: {
          owner_id: {
            in: friendIdList,
          },
        },
        include: {
          owner: true,
        },
      });

      const recommendNum = recomendBooks.length;
      if (recommendNum == 0) throw new Error("not found books");

      const targetIndex = Math.floor(Math.random() * recommendNum);

      const recomendBook = recomendBooks[targetIndex];
      const owner = recomendBook.owner;

      const messages: LineMessagesType = [];

      messages.push({
        type: "text",
        text: `${owner.name}さんは\n${
          recomendBook.title
        }\nという本を持っています❗️\n\n画像URL:\n${
          recomendBook.image_url ?? ""
        }\n\n本説明: ${recomendBook.description} \n\n${
          owner.name
        }さんにお願いして貸してもらうのはどうでしょうか❓`,
      });

      messages.push({
        type: "sticker",
        packageId: "789",
        stickerId: "10856",
      });

      return messages;
    } catch (error) {
      console.log(error);

      const messages: LineMessagesType = [
        {
          type: "text",
          text: "オススメの本が見つかりませんでした。",
        },
      ];

      return messages;
    }
  })();

  // 内容を返信
  try {
    await replyMessage(replyMessages, replyToken);
  } catch (error) {
    console.log("エラーで返信できませんでした。");
  }

  res.status(200).end();
}
