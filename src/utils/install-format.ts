export const installFormat = (value: number): string => {
  if (value < 1000) return value.toString();

  const valueThousands = Math.floor(value / 1000);

  return `${valueThousands}k+`;
};
