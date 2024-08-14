import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";

export const validateDate = (date: CalendarDateTime | null) => {
  if (!date) {
    return true;
  }
  const today = new Date();

  const selectedDate = date.toDate(getLocalTimeZone());

  return selectedDate < today;
};
