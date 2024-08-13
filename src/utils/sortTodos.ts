import { type SortOption } from "../pages/HomePage";
import { type Todo } from "../store/todo-context";

export const sortTodos = (todos: Todo[], sortBy: SortOption) => {
  const copiedArray = [...todos];

  switch (sortBy) {
    case "ascDate":
      return copiedArray.sort((a, b) => a.dueDate.compare(b.dueDate));
    case "descDate":
      return copiedArray.sort((a, b) => b.dueDate.compare(a.dueDate));
    case "ascPriority":
      return copiedArray.sort((a, b) => a.priority - b.priority);
    case "descPriority":
      return copiedArray.sort((a, b) => b.priority - a.priority);
    case "ascComplexity":
      return copiedArray.sort((a, b) => a.complexity - b.complexity);
    case "descComplexity":
      return copiedArray.sort((a, b) => b.complexity - a.complexity);
    default:
      return todos;
  }
};
