import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";

export const validateDate = (date: CalendarDateTime | null) => {
  if (!date) {
    return true;
  }
  const today = new Date();

  const selectedDate = date.toDate(getLocalTimeZone());

  console.log("Selected title: ", selectedDate);
  console.log("Today's date: ", today);
  return selectedDate < today;
};
