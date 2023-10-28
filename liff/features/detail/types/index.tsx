import { Book, Rental, User } from "@/types/type";

export type RentalDetail = Rental & {
  books: Book[];
  lender: User;
  borrower?: User;
  return_date: string;
  created_at: string;
};

export type ReqRentalDetail = Rental & {
  return_date: string;
  created_at: string;
};
