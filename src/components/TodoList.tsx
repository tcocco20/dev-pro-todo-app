import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="flex flex-col gap-5">
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
