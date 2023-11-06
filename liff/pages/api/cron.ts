import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/api/db";
import { LineStickerMessage, LineTextMessage } from "@/lib/api/line/type";
import { pushMessage } from "@/lib/api/line/pushMessage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const rentals = await prisma.rental.findMany({
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

    rentals.forEach(async (rental) => {
      try {
        const messages = [];
        const lineId = rental.borrower!.line_id;
        const lenderName = rental.lender.name;
        const rentalId = rental.id;

        if (!rental.is_return) {
          // 催促メッセージ追加
          const reminderMessage: LineTextMessage = {
            type: "text",
            text: `${lenderName}さんから借りている本の返却日は今日です。忘れないように注意してください❗️\n\n詳細はこちら\n${process.env.LIFF_URL}/detail/${rentalId}`,
          };
          messages.push(reminderMessage);
        }

        // アンケート願いメッセージ追加
        const questionaryMessage: LineTextMessage = {
          type: "text",
          text: `${lenderName}さんから借りた本の感想についてアンケートをお願いします❗️❗️❗️\n\nアンケートに答えることで、${lenderName}さんにポイントをプレゼントすることができます。🎁\nアンケートの内容は${lenderName}さんからは見れないので安心してください!!\n\nアンケートはこちら\n${process.env.LIFF_URL}/questionary/${rentalId}`,
        };
        messages.push(questionaryMessage);

        // スタンプメッセージ追加
        const stickerMessage: LineStickerMessage = {
          type: "sticker",
          packageId: "6136",
          stickerId: "10551380",
        };
        messages.push(stickerMessage);

        await pushMessage(messages, lineId);
        console.log("メッセージ送信");
      } catch (error) {
        console.log("メッセージ送信に失敗");
      }
    });
  } catch (error) {
    console.log("データ取得に失敗");
  } finally {
    res.status(200).end();
  }
}
