import { CalendarDateTime } from "@internationalized/date";
import { createContext, useEffect, useState, type ReactNode } from "react";

export type TodoRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Subtask = {
  title: string;
  completed: boolean;
};

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate: CalendarDateTime;
  priority: TodoRange;
  complexity: TodoRange;
  tags: string[];
  subtasks: Subtask[];
}

interface TodoState {
  todoList: Todo[];
}

export interface TodoContextValue extends TodoState {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
  completeTodo: (id: string) => void;
  completeSubtask: (todoId: string, index: number) => void;
  unCheckSubtask: (todoId: string, index: number) => void;
  repeatTodo: (id: string) => void;
  getTodoById: (id: string) => Todo | undefined;
}

export const TodoContext = createContext<TodoContextValue | null>(null);

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const ctx: TodoContextValue = {
    todoList,
    addTodo: (todo) => {
      setTodoList((state) => [...state, todo]);
    },
    deleteTodo: (id) => {
      setTodoList((state) => state.filter((todo) => todo.id !== id));
    },
    updateTodo: (id, todo) => {
      setTodoList((state) => state.map((t) => (t.id === id ? todo : t)));
    },
    completeTodo: (id) => {
      setTodoList((state) =>
        state.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    },
    completeSubtask(todoId, index) {
      const todo = { ...todoList.find((todo) => todo.id === todoId) } as Todo;
      if (!todo) {
        return;
      }

      todo.subtasks[index].completed = true;

      const allSubtasksCompleted = todo.subtasks.every(
        (subtask) => subtask.completed
      );

      if (allSubtasksCompleted) {
        todo.completed = true;
      }
      setTodoList((state) =>
        state.map((t) => (t.id === todoId ? { ...todo } : t))
      );
    },
    unCheckSubtask(todoId, index) {
      const todo = { ...todoList.find((todo) => todo.id === todoId) } as Todo;
      if (!todo) {
        return;
      }

      todo.subtasks[index].completed = false;

      if (todo.completed) {
        todo.completed = false;
      }
      setTodoList((state) =>
        state.map((t) => (t.id === todoId ? { ...todo } : t))
      );
    },
    repeatTodo(id) {
      const todo = todoList.find((todo) => todo.id === id);
      if (!todo) {
        return;
      }

      const newTodo = { ...todo, completed: false };

      newTodo.subtasks = todo.subtasks.map((subtask) => ({
        ...subtask,
        completed: false,
      }));

      setTodoList((state) => state.map((t) => (t.id === id ? newTodo : t)));
    },
    getTodoById: (id) => todoList.find((todo) => todo.id === id),
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      // Parse the stored todos and map the dueDate to CalendarDateTime
      const mappedTodos = JSON.parse(storedTodos).map((todo: Todo) => ({
        ...todo,
        dueDate: new CalendarDateTime(
          todo.dueDate.year,
          todo.dueDate.month,
          todo.dueDate.day,
          todo.dueDate.hour,
          todo.dueDate.minute
        ),
      }));
      setTodoList(mappedTodos);
    }
  }, []);

  useEffect(() => {
    if (todoList.length === 0) {
      localStorage.removeItem("todos");
    } else {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList]);

  console.log(todoList);

  return <TodoContext.Provider value={ctx}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
