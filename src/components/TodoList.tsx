import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="flex flex-col gap-5">
      <Todo urgency="high" />
      <Todo urgency="low" />
    </div>
  );
};

export default TodoList;
