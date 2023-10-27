export type UserState = {
  userId: string | null;
  idToken: string | null;
};

export type Selector = {
  user: UserState;
};
