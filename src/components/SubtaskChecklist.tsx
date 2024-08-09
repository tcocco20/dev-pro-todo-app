import { Subtask } from "../store/todo-context";
import ChecklistSubtask from "./ChecklistSubtask";

interface SubtaskChecklistProps {
  subtasks: Subtask[];
  completeSubtask: (index: number) => void;
  unCheckSubtask: (index: number) => void;
}

const SubtaskChecklist = ({
  subtasks,
  completeSubtask,
  unCheckSubtask,
}: SubtaskChecklistProps) => {
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
            completeHandler={() => completeSubtask(index)}
            uncheckHandler={() => unCheckSubtask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubtaskChecklist;
