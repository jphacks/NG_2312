import { Book, Rental, User } from "@/types/type";

export type RentalData = Rental & {
  return_date: String;
  created_at: String;
  lender: User;
  borrower?: User;
  books: Book[];
};

export type ResponseRentalData = {
  lendList: RentalData[];
  borrowList: RentalData[];
};
