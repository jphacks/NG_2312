export const formatDate = (targetDate: Date | string) => {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatedDate = `${year}年${month}月${day}日`;

  return formatedDate;
};
