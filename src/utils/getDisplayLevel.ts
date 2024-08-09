import { TodoRange } from "../store/todo-context";

export const getDisplayLevel = (level: TodoRange) => {
  const endStr = " (" + level + "/10)";
  if (level > 7) {
    return "High" + endStr;
  }
  if (level > 4) {
    return "Moderate" + endStr;
  }
  return "Low" + endStr;
};
