import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/types/type";
import prisma from "@/lib/api/db";
import { getDecodedIdtoken } from "@/lib/api/line/lineAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id_token = req.headers.authorization;
    const lineProfile = await getDecodedIdtoken(id_token);

    if (req.method == "POST") {
      console.log("login");

      const line_id = lineProfile.lineUserId;
      const name = lineProfile.lineUserName;
      const image_url = lineProfile.linePictureUrl;

      try {
        const user = await prisma.user.findFirst({
          where: {
            line_id: line_id,
          },
        });

        // ユーザーが存在しない場合は強制でユーザー登録をさせる;
        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              name,
              line_id,
              image_url,
            },
          });
          res.status(201).json(newUser);
          return;
        }

        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }
    } else if (req.method == "GET") {
      const line_id = lineProfile.lineUserId;

      try {
        const user = await prisma.user.findFirst({
          where: {
            line_id: line_id,
          },
        });

        if (!user) {
          res.status(404).json("Not Found User");
          return;
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }
    } else {
      res.status(403).json({ message: "Method Not Allowed" });
      return;
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
}
