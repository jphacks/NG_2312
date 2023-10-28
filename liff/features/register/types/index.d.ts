import { Rental } from "@/types/type";

export type BookInfo = {
  title: string;
  description: string;
  author: string;
  image_url?: string;
};

export type Register = {
  return_date: Date;
  bookInfoList: BookInfo[];
};