export const getSeconds = (time: number): string => {
  const seconds = String(Math.floor(time % 60)).padStart(2, '0');
  return seconds;
};
