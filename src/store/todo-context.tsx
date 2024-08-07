import { CalendarDateTime } from "@internationalized/date";
import { createContext, useState, type ReactNode } from "react";

export type TodoRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate: CalendarDateTime;
  priority: TodoRange;
  complexity: TodoRange;
  tags: string[];
  subtasks: {
    title: string;
    completed: boolean;
  }[];
}

interface TodoState {
  todoList: Todo[];
  tagList: string[];
}

export interface TodoContextValue extends TodoState {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
  completeTodo: (id: string) => void;
  addTags: (tags: string[]) => void;
  getTodoById: (id: string) => Todo | undefined;
}

export const TodoContext = createContext<TodoContextValue | null>(null);

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);

  const ctx: TodoContextValue = {
    todoList,
    tagList,
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
    addTags: (tags) => {
      setTagList((state) => [...state, ...tags]);
    },
    getTodoById: (id) => todoList.find((todo) => todo.id === id),
  };
  return <TodoContext.Provider value={ctx}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
