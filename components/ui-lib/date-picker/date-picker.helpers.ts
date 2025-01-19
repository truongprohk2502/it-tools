import dayjs from "dayjs";
import padStart from "lodash/padStart";

export const MONTH_FORMAT = "YYYY/MM";
export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const checkIsSameMonth = (month: string, day: string) =>
  +month.slice(-2) === +day.split("-")[1];

export const getMonth = (date: string | null | undefined) => {
  const formattedDate = date?.replace("MM", "01").replace("DD", "01");
  const dateInstance = formattedDate ? dayjs(formattedDate) : dayjs();
  return dateInstance.format(MONTH_FORMAT);
};

export const formatDateString = (year: number, month: number, day: number) =>
  (Number.isNaN(year) ? "YYYY" : padStart(year.toString(), 4, "0")) +
  "-" +
  (Number.isNaN(month) ? "MM" : padStart(month.toString(), 2, "0")) +
  "-" +
  (Number.isNaN(day) ? "DD" : padStart(day.toString(), 2, "0"));

export const getDaysOfMonthWithAdjacentDays = (monthDate: string) => {
  const year = +monthDate.split("/")[0];
  const month = +monthDate.split("/")[1];

  if (Number.isNaN(year) || Number.isNaN(month)) return [];

  const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth();
  const startDay = dayjs(`${year}-${month}-01`).day();
  const endDay = dayjs(`${year}-${month}-${daysInMonth}`).day();

  const days = [];

  // Add days from the previous month
  const daysFromPrevMonth = startDay;
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const daysInPrevMonth = dayjs(`${prevYear}-${prevMonth}-01`).daysInMonth();

  for (
    let i = daysInPrevMonth - daysFromPrevMonth + 1;
    i <= daysInPrevMonth;
    i++
  ) {
    days.push(formatDateString(prevYear, prevMonth, i));
  }

  // Add days from the current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(formatDateString(year, month, i));
  }

  // Add days from the next month
  const daysFromNextMonth = 6 - endDay;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;

  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push(formatDateString(nextYear, nextMonth, i));
  }

  return days;
};

export const checkIsValidDayAndMonth = (month: number, day: number) => {
  if (month === 2) {
    if (day > 29) return false;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) return false;
  } else {
    if (day > 31) return false;
  }
  return true;
};

export const checkIsValidDate = (year: number, month: number, day: number) => {
  if (day > 31) return false;
  if (month > 12) return false;
  if (year > 9999) return false;

  if (month === 4 || month === 6 || month === 9 || month === 11)
    if (day > 30) return false;

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8)
    if (day > 31) return false;

  if (month === 2) {
    const isLeafYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    if (day > (isLeafYear ? 29 : 28)) return false;
  }

  return true;
};

export const getLastDayOfMonth = (month: number, year?: number) => {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
  else if (month === 2) {
    if (year === undefined) return 29;
    const isLeafYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return isLeafYear ? 29 : 28;
  } else return 31;
};

export const getNextMonth = (month: string) =>
  dayjs(month).add(1, "month").format(MONTH_FORMAT);

export const getPrevMonth = (month: string) =>
  dayjs(month).subtract(1, "month").format(MONTH_FORMAT);
