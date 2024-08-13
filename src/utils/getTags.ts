import { type Todo } from "../store/todo-context";

export const getTags = (todos: Todo[]) => {
  const tagList: string[] = [];
  todos.forEach((todo) => {
    todo.tags.forEach((tag) => {
      if (!tagList.includes(tag)) {
        tagList.push(tag);
      }
    });
  });
  return tagList;
};

export default getTags;
