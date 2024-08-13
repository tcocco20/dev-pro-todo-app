import { type Todo } from "../store/todo-context";

export const filterByTags = (todos: Todo[], tags: string[]) => {
  return todos.filter((todo) => {
    return tags.every((tag) => todo.tags.includes(tag));
  });
};
