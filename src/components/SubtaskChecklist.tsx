import ChecklistSubtask from "./ChecklistSubtask";

const SubtaskChecklist = () => {
  return (
    <div>
      <h6 className="text-xl mb-5">Checklist for Subtasks</h6>
      <div className="flex flex-col gap-5">
        <ChecklistSubtask title="Create a new project" index={0} completed />
        <ChecklistSubtask title="Create a new project" index={0} />
      </div>
    </div>
  );
};

export default SubtaskChecklist;
