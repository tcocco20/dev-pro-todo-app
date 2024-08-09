import { Subtask } from "../store/todo-context";
import ChecklistSubtask from "./ChecklistSubtask";

interface SubtaskChecklistProps {
  subtasks: Subtask[];
}

const SubtaskChecklist = ({ subtasks }: SubtaskChecklistProps) => {
  if (!subtasks.length) {
    return null;
  }
  return (
    <div>
      <h6 className="text-xl mb-5">Checklist for Subtasks</h6>
      <div className="flex flex-col gap-5">
        {subtasks.map((subtask, index) => (
          <ChecklistSubtask
            key={index}
            title={subtask.title}
            completed={subtask.completed}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SubtaskChecklist;
