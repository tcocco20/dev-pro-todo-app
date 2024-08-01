import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const AddNewPage = () => {
  const { id } = useParams();
  if (id) {
    console.log("Editing task with ID:", id);
  }
  return (
    <>
      <PageHeader title={id ? "Edit Task" : "Add New Task"} />
    </>
  );
};

export default AddNewPage;
