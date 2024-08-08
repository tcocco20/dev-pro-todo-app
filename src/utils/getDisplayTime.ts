import { CalendarDateTime } from "@internationalized/date";

export const getDisplayTime = (time: CalendarDateTime): string => {
  const hour = time.hour;

  if (hour === 0) {
    return "12:" + time.minute.toString().padStart(2, "0") + " AM";
  }
  if (hour < 12) {
    return (
      hour.toString().padStart(2, "0") +
      ":" +
      time.minute.toString().padStart(2, "0") +
      " AM"
    );
  }
  if (hour === 12) {
    return "12:" + time.minute.toString().padStart(2, "0") + " PM";
  }
  return (
    (hour - 12).toString().padStart(2, "0") +
    ":" +
    time.minute.toString().padStart(2, "0") +
    " PM"
  );
};
