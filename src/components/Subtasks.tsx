import { Button, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Subtask from "./Subtask";

const Subtasks = () => {
  return (
    <div>
      <p className="text-lg mb-2">Add Checklist for Subtasks</p>
      <div className="flex flex-col-reverse gap-5">
        <Input
          placeholder="Type to add new subtask..."
          radius="full"
          size="lg"
          variant="bordered"
          classNames={{ inputWrapper: "bg-white py-6" }}
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
        <Subtask focused={true} />
        <Subtask focused={false} />
      </div>
    </div>
  );
};

export default Subtasks;
