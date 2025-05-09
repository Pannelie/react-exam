export function formatDate(date) {
  const [day, month] = date.split(" ");
  const formattedMonth = month.substring(0, 3);

  return `${day} ${formattedMonth}`;
}

export function generateTicketID() {
  const characters = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    ...Array.from({ length: 10 }, (_, i) => i.toString()), // 0-9
  ].join(``);

  return Array.from({ length: 5 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
}
