import { type Todo } from "../store/todo-context";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todoList: Todo[];
}

const TodoList = ({todoList}: TodoListProps) => {
  // const { todoList } = useTodoContext();
  return (
    <div className="flex flex-col gap-5">
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
