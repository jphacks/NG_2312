import prisma from "@/lib/api/db";
import { getDecodedIdtoken } from "@/lib/api/line/lineAuth";

export const getUserInfoByIdToken = async (id_token: string | undefined) => {
  const lineProfile = await getDecodedIdtoken(id_token);
  const line_id = lineProfile.lineUserId;

  const user = await prisma.user.findFirst({
    where: {
      line_id: line_id,
    },
  });

  if (!user) {
    throw new Error("ユーザー情報がDBに存在しません。");
  }

  return user;
};
