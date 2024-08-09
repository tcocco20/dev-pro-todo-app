import { type Subtask } from "../store/todo-context";

export const getProgress = (subtasks: Subtask[]) => {
  if (!subtasks.length) {
    return 0;
  }
  const total = subtasks.length;
  const completed = subtasks.filter((subtask) => subtask.completed).length;
  return Math.floor((completed / total) * 100);
};
