import { Todo } from "../store/todo-context";

export const filterBySearchTerm = (todos: Todo[], searchTerm: string) => {
  if (!searchTerm) return todos;

  return todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};
