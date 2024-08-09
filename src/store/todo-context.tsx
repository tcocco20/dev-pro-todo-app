import { CalendarDateTime } from "@internationalized/date";
import { createContext, useState, type ReactNode } from "react";

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
  tagList: string[];
}

export interface TodoContextValue extends TodoState {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
  completeTodo: (id: string) => void;
  completeSubtask: (todoId: string, index: number) => void;
  unCheckSubtask: (todoId: string, index: number) => void;
  repeatTodo: (id: string) => void;
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
    completeSubtask(todoId, index) {
      // Create copy of the todo
      const todo = { ...todoList.find((todo) => todo.id === todoId) } as Todo;
      if (!todo) {
        return;
      }

      // Set subtask as completed
      todo.subtasks[index].completed = true;
      // Check to see if all subtasks are completed
      const allSubtasksCompleted = todo.subtasks.every(
        (subtask) => subtask.completed
      );

      // If all subtasks are completed, set the main task as completed
      if (allSubtasksCompleted) {
        todo.completed = true;
      }
      setTodoList((state) =>
        state.map((t) => (t.id === todoId ? { ...todo } : t))
      );
    },
    unCheckSubtask(todoId, index) {
      // Create copy of the todo
      const todo = { ...todoList.find((todo) => todo.id === todoId) } as Todo;
      if (!todo) {
        return;
      }
      // Set subtask as not completed
      todo.subtasks[index].completed = false;

      // Uncheck the main task if it was completed
      if (todo.completed) {
        todo.completed = false;
      }
      setTodoList((state) =>
        state.map((t) => (t.id === todoId ? { ...todo } : t))
      );
    },
    repeatTodo(id) {
      // Get the todo
      const todo = todoList.find((todo) => todo.id === id);
      if (!todo) {
        return;
      }
      // Set completed to false
      const newTodo = { ...todo, completed: false };
      // Set subtasks to not completed
      newTodo.subtasks = todo.subtasks.map((subtask) => ({
        ...subtask,
        completed: false,
      }));

      setTodoList((state) => state.map((t) => (t.id === id ? newTodo : t)));
    },
    addTags: (tags) => {
      const newTags = tags.filter((tag) => !tagList.includes(tag));
      setTagList((state) => [...state, ...newTags]);
    },
    getTodoById: (id) => todoList.find((todo) => todo.id === id),
  };
  return <TodoContext.Provider value={ctx}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
