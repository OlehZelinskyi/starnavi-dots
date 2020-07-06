export default function getFormattedDate() {
  const dateInMs = new Date();
  const hours =
    dateInMs.getHours().toString().length === 1
      ? `0${dateInMs.getHours()}`
      : dateInMs.getHours();
  const minutes =
    dateInMs.getMinutes().toString().length === 1
      ? `0${dateInMs.getMinutes()}`
      : dateInMs.getMinutes();
  const day =
    dateInMs.getDate().toString().length === 1
      ? `0${dateInMs.getDate()}`
      : dateInMs.getDate();
  const month = getFormattedMonth(dateInMs);
  const year = dateInMs.getFullYear();

  return `${hours}:${minutes} ${day} ${month} ${year}`;
}

export const getFormattedMonth = (ms: Date) => {
  const months = [
    "January",
    "February",
    "May",
    "April",
    "March",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[ms.getMonth()];
};
