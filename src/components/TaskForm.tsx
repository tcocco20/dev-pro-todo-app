import { Button, Input } from "@nextui-org/react";
import CustomSelect from "./CustomSelect";
import DateTimeInputs from "./DateTimeInputs";
import Subtasks from "./Subtasks";
import TagsInput from "./TagsInput";
import { useNavigate } from "react-router-dom";
import { Todo, type TodoRange } from "../store/todo-context";
import { useState } from "react";
import { useTodoContext } from "../store/useTodoContext";
import { CalendarDateTime } from "@internationalized/date";
import { uid } from "uid";

interface TaskFormProps {
  todo?: Todo;
}

const TaskForm = ({ todo }: TaskFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(todo?.title || "");
  const [priority, setPriority] = useState<TodoRange>(todo?.priority || 1);
  const [complexity, setComplexity] = useState<TodoRange>(
    todo?.complexity || 1
  );
  const [dueDate, setDueDate] = useState(
    todo?.dueDate ||
      new CalendarDateTime(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDay()
      )
  );
  const [subtasks, setSubtasks] = useState(todo?.subtasks || []);
  const [tags, setTags] = useState(todo?.tags || []);

  const { addTodo, updateTodo } = useTodoContext();

  const saveTaskHandler = () => {
    if (todo) {
      updateTodo(todo.id, {
        id: todo.id,
        title,
        priority,
        completed: todo.completed,
        complexity,
        dueDate,
        subtasks,
        tags,
      });
    } else {
      addTodo({
        id: uid(),
        title,
        priority,
        completed: false,
        complexity,
        dueDate,
        subtasks,
        tags,
      });
    }
    navigate("..");
  };
  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Task Name"
        labelPlacement="outside"
        placeholder="Enter the name of the task"
        radius="full"
        size="lg"
        variant="bordered"
        classNames={{ inputWrapper: "bg-white py-6", label: "text-lg" }}
        value={title}
        onValueChange={setTitle}
      />
      <CustomSelect
        label="Select Priority Level"
        value={priority}
        onValueChange={setPriority}
      />
      <CustomSelect
        label="Select Complexity Level"
        value={complexity}
        onValueChange={setComplexity}
      />
      <DateTimeInputs value={dueDate} onValueChange={setDueDate} />
      <Subtasks tasks={subtasks} setSubtasks={setSubtasks} />
      <TagsInput value={tags} onValueChange={setTags} />
      <div className="text-center">
        <Button
          size="lg"
          radius="full"
          className="text-xl opacity-85 py-8"
          color="primary"
          onClick={() => {
            setTimeout(() => {
              saveTaskHandler();
            }, 250);
          }}
        >
          Save Task
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
