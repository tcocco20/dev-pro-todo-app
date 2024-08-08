import { CalendarDateTime } from "@internationalized/date";

export const getUrgency = (date: CalendarDateTime): "low" | "mid" | "high" => {
  const today = new Date();
  const dueDate = new Date(date.year, date.month - 1, date.day);

  // Check if the due date is today or tomorrow
  if (today.toDateString() === dueDate.toDateString()) {
    return "high";
  } else {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.toDateString() === dueDate.toDateString()) {
      return "high";
    }
  }
  //  Check if the due date is within 3 days
  const threeDays = new Date(today);
  threeDays.setDate(threeDays.getDate() + 3);
  if (dueDate <= threeDays) {
    return "mid";
  }

  return "low";
};
