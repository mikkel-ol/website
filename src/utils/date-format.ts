/**
 * Formats a Date object to a pretty string
 */
export const dateFormat = (date: Date | null): string => {
  if (date === null) return "Present";

  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${month} / ${year}`;
};
