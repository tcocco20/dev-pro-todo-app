import { Button, Input } from "@nextui-org/react";
import { Check, X } from "lucide-react";

interface SubtaskProps {
  title: string;
}

const Subtask = ({ title }: SubtaskProps) => {
  return (
    <Input
      placeholder="Type to add new subtask..."
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{ inputWrapper: "bg-white py-6" }}
      startContent={"1."}
      endContent={
        <Button
          isIconOnly
          radius="full"
          size="sm"
          className={`${focused ? "bg-blue-100/70" : "bg-red-100/70"}`}
        >
          {focused ? <Check /> : <X />}
        </Button>
      }
    />
  );
};

export default Subtask;
