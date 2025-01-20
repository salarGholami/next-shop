export function toLocalDateString(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // weekday: "long",
    // hour: "numeric",
    // second: "numeric",
  };

  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringShort(date) {
  return new Date(date).toLocaleDateString("fa-IR");
}
