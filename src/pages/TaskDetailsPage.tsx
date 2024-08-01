import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const TaskDetailsPage = () => {
  const { id } = useParams();
  if (id) {
    console.log("Viewing task with ID:", id);
  }
  return (
    <>
      <PageHeader title="Task Details" />
    </>
  );
};

export default TaskDetailsPage;
