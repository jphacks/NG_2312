import axios from "axios";
import { AnswerInfo, RequestAnswers } from "../types";

export const postAnswers = async (
  idToken: string,
  destinationId: string,
  answerInfoList: AnswerInfo[]
) => {
  try {
    const headers = {
      Authorization: `Bearer ${idToken}`,
    };

    const data: RequestAnswers = {
      destination_id: destinationId,
      answerInfoList: answerInfoList,
    };
    await axios.post(`/api/questionary`, data, {
      headers: headers,
    });

    return;
  } catch (error) {
    throw new Error("アンケート保存またはポイント付与に失敗");
  }
};
