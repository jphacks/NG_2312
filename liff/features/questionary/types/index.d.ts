export type AnswerInfo = {
  book_id: number;
  readable_point: number;
  understandable_point: nunber;
  impressions: string;
};

export type RequestAnswers = {
  destination_id: string;
  answerInfoList: AnswerInfo[];
};
