import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import DetailsCard from "../components/DetailsCard";
import SubtaskChecklist from "../components/SubtaskChecklist";
import DetailActions from "../components/DetailActions";

const TaskDetailsPage = () => {
  const { id } = useParams();
  if (id) {
    console.log("Viewing task with ID:", id);
  }
  return (
    <>
      <PageHeader title="Task Details" />
      <DetailsCard urgency="low" />
      <SubtaskChecklist />
      <DetailActions />
    </>
  );
};

export default TaskDetailsPage;
