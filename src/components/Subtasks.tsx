import { Button, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Subtask from "./Subtask";
import { useRef } from "react";

interface SubtasksProps {
  tasks: { title: string; completed: boolean }[];
}

const Subtasks = ({ tasks }: SubtasksProps) => {
  const taskRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <p className="text-lg mb-2">Add Checklist for Subtasks</p>
      <div className="flex flex-col-reverse gap-5">
        <Input
          ref={taskRef}
          placeholder="Type to add new subtask..."
          radius="full"
          size="lg"
          variant="bordered"
          classNames={{ inputWrapper: "bg-white py-6" }}
          onSubmit={() => {
            console.log("Submitted");
            console.log(taskRef.current?.value);
          }}
          endContent={
            <Button
              isIconOnly
              radius="full"
              size="sm"
              className="bg-blue-100/70"
            >
              <Plus />
            </Button>
          }
        />
        {tasks.map((task, index) => (
          <Subtask key={index} title={task.title} />
        ))}
      </div>
    </div>
  );
};

export default Subtasks;
