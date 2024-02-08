export const addDay = (date: Date, day: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + day);
  return newDate;
};

export const subDay = (date: Date, day: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - day);
  return newDate;
};

export const addMonth = (date: Date, month: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + month);
  return newDate;
};

export const subMonth = (date: Date, month: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - month);
  return newDate;
};

export const firstDayOfMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(1);
  return newDate;
};

export const startOfToday = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

export const startOfTheDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const checkIsSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * 2つの日付の間にある日付を配列で返す
 * @return Date[]
 * */
export const getDateRange = (start: Date, end: Date) => {
  const arr = [];
  const dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};
