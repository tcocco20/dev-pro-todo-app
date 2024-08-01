import { Button, Input } from "@nextui-org/react";
import CustomSelect from "./CustomSelect";
import DateTimeInputs from "./DateTimeInputs";
import Subtasks from "./Subtasks";
import TagsInput from "./TagsInput";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();
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
      />
      <CustomSelect label="Select Priority Level" />
      <CustomSelect label="Select Complexity Level" />
      <DateTimeInputs />
      <Subtasks />
      <TagsInput />
      <div className="text-center">
        <Button
          size="lg"
          radius="full"
          className="text-xl opacity-85 py-8"
          color="primary"
          onClick={() => {
            setTimeout(() => {
              navigate("..");
            }, 250);
          }}
        >
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
