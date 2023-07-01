export const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  const timeframe = hours <= 11 && minutes <= 59 ? "a.m" : "p.m";

  return `${hours > 12 ? hours - 12 : hours < 10 ? hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${timeframe}`;
};
