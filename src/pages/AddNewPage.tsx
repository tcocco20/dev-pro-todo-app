import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";
import { useTodoContext } from "../store/useTodoContext";
import { Todo } from "../store/todo-context";

const AddNewPage = () => {
  const { id } = useParams();
  const { getTodoById } = useTodoContext();
  let todo: Todo | undefined;
  if (id) {
    todo = getTodoById(id);
  }
  return (
    <>
      <PageHeader title={id ? "Edit Task" : "Add New Task"} />
      <TaskForm todo={todo} />
    </>
  );
};

export default AddNewPage;
