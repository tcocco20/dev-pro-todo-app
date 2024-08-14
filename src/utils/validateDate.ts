import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";

export const validateDate = (date: CalendarDateTime | null) => {
  if (!date) {
    return false;
  }
  const today = new Date();

  const selectedDate = date.toDate(getLocalTimeZone());

  console.log(selectedDate, today);
  return selectedDate >= today;
};
