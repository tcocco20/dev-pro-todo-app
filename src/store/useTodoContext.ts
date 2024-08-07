import { useContext } from "react";
import { TodoContext } from "./todo-context";

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return ctx;
};
