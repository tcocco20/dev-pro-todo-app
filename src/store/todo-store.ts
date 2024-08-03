import { CalendarDate } from "@internationalized/date";
import { create } from "zustand";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: CalendarDate;
  priority: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  complexity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  tags: string[];
  subtasks: {
    title: string;
    completed: boolean;
  }[];
}

interface TodoState {
  todoList: Todo[];
  tagList: string[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
  completeTodo: (id: string) => void;
  addTags: (tags: string[]) => void;
}

const useTodoStore = create<TodoState>()((set) => ({
  todoList: [],
  tagList: [],
  addTodo: (todo) => {
    set((state) => ({
      todoList: [...state.todoList, todo],
    }));
  },
  deleteTodo: (id) => {
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: (id, todo) => {
    set((state) => ({
      todoList: state.todoList.map((t) => (t.id === id ? todo : t)),
    }));
  },
  completeTodo: (id) => {
    set((state) => ({
      todoList: state.todoList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }));
  },
  addTags: (tags) => {
    set((state) => ({
      tagList: [...state.tagList, ...tags],
    }));
  },
}));

export default useTodoStore;
