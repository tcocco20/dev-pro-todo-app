import { type Todo } from "../store/todo-context";

export const filterForPowerMode = (todos: Todo[]) => {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  incompleteTodos.sort(
    (a, b) => b.priority + b.complexity - a.priority - a.complexity
  );
  const nextTodo = incompleteTodos[0];
  return [nextTodo];
};
