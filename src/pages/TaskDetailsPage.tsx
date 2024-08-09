import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import DetailsCard from "../components/DetailsCard";
import SubtaskChecklist from "../components/SubtaskChecklist";
import DetailActions from "../components/DetailActions";
import { useTodoContext } from "../store/useTodoContext";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const { getTodoById, completeSubtask, unCheckSubtask } = useTodoContext();
  if (!id) {
    return (
      <>
        <h1 className="text-2xl text-red-700 mt-12 text-center">
          Todo ID required! Please go back and try again.
        </h1>
        <Link to=".." className="text-center block mt-4 text-blue-500">
          Go back to home
        </Link>
      </>
    );
  }
  const todo = getTodoById(id);

  if (!todo) {
    return (
      <>
        <h1 className="text-2xl text-red-700 mt-12 text-center">
          Task not found!
        </h1>
        <Link to=".." className="text-center block mt-4 text-blue-500">
          Go back to home
        </Link>
      </>
    );
  }
  return (
    <>
      <PageHeader title="Task Details" />
      <DetailsCard todo={todo} />
      <SubtaskChecklist
        subtasks={todo.subtasks}
        completeSubtask={(index: number) => completeSubtask(id, index)}
        unCheckSubtask={(index: number) => unCheckSubtask(id, index)}
      />
      <DetailActions />
    </>
  );
};

export default TaskDetailsPage;
