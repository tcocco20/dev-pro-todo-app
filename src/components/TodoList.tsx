import { useTodoContext } from "../store/useTodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todoList } = useTodoContext();
  return (
    <div className="flex flex-col gap-5">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
