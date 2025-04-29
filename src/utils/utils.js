export function formatDate(date) {
  const [day, month] = date.split(" ");
  const formattedMonth = month.substring(0, 3);

  return `${day} ${formattedMonth}`;
}
