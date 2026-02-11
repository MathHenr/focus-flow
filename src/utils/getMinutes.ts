export const getMinutes = (time: number): string => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  return minutes;
};
