import { CalendarDateTime } from "@internationalized/date";
import { getDisplayTime } from "./getDisplayTime";
import constants from "../constants";

export const getDisplayDate = (date: CalendarDateTime) => {
  const today = new Date();
  const dueDate = new Date(date.year, date.month - 1, date.day);
  const displayTime = getDisplayTime(date);

  // Check if the due date is today or tomorrow
  if (today.toDateString() === dueDate.toDateString()) {
    return `Today, ${displayTime}`;
  } else {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.toDateString() === dueDate.toDateString()) {
      return `Tomorrow, ${displayTime}`;
    }
  }

  let dayString = dueDate.getDate().toString();
  if (dueDate.getDate() === 1 || dueDate.getDate() === 21) {
    dayString += "st";
  } else if (dueDate.getDate() === 2 || dueDate.getDate() === 22) {
    dayString += "nd";
  } else if (dueDate.getDate() === 3 || dueDate.getDate() === 23) {
    dayString += "rd";
  } else {
    dayString += "th";
  }

  return `${constants.months[dueDate.getMonth()]} ${dayString}, ${displayTime}`;
};
