import { Button, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Subtask from "./Subtask";
import { useRef } from "react";

interface SubtasksProps {
  tasks: {
    title: string;
    completed: boolean;
  }[];
  setSubtasks: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        completed: boolean;
      }[]
    >
  >;
}

const Subtasks = ({ tasks, setSubtasks }: SubtasksProps) => {
  const taskRef = useRef<HTMLInputElement>(null);

  const updateSubtask = (index: number, title: string) => {
    setSubtasks((prev) => {
      const updatedSubtasks = [...prev];
      updatedSubtasks[index].title = title;
      return updatedSubtasks;
    });
  };

  const deleteSubtask = (index: number) => {
    setSubtasks((prev) => {
      const updatedSubtasks = [...prev];
      updatedSubtasks.splice(index, 1);
      return updatedSubtasks;
    });
  };
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
              onPress={() => {
                setSubtasks((prev) => [
                  ...prev,
                  { title: taskRef.current?.value || "", completed: false },
                ]);
                taskRef.current!.value = "";
              }}
            >
              <Plus />
            </Button>
          }
        />
        <div className="flex flex-col gap-5">
          {tasks.map((task, index) => (
            <Subtask
              key={index}
              index={index}
              title={task.title}
              onUpdate={(newTitle) => updateSubtask(index, newTitle)}
              onDelete={() => deleteSubtask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subtasks;
