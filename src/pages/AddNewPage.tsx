import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";

const AddNewPage = () => {
  const { id } = useParams();
  if (id) {
    console.log("Editing task with ID:", id);
  }
  return (
    <>
      <PageHeader title={id ? "Edit Task" : "Add New Task"} />
      <TaskForm />
    </>
  );
};

export default AddNewPage;
