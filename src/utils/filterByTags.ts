import { type Todo } from "../store/todo-context";

export const filterByTags = (todos: Todo[], tags: string[] | []) => {
  if (tags.length === 0) return todos;

  return todos.filter((todo) => {
    return tags.some((tag) => todo.tags.includes(tag));
  });
};
