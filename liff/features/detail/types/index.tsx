import { Book, Rental, User } from "@/types/type";

export type RentalDetail = Rental & {
  books: Book[];
  lender: User;
  borrower?: User;
};
