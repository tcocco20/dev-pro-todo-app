export const getProgress = (
  subtasks: {
    title: string;
    completed: boolean;
  }[]
) => {
  const total = subtasks.length;
  const completed = subtasks.filter((subtask) => subtask.completed).length;
  return Math.floor((completed / total) * 100);
};
