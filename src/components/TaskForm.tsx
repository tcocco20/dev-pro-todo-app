import { Input } from "@nextui-org/react";
import CustomSelect from "./CustomSelect";
import DateTimeInputs from "./DateTimeInputs";
import Subtasks from "./Subtasks";

const TaskForm = () => {
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
    </div>
  );
};

export default TaskForm;
