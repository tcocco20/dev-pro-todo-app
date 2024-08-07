import { Button, Input } from "@nextui-org/react";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface SubtaskProps {
  title: string;
  index: number;
  onUpdate: (title: string) => void;
  onDelete: () => void;
}

const Subtask = ({ title, index, onUpdate, onDelete }: SubtaskProps) => {
  const [value, setValue] = useState(title);
  const [focused, setFocused] = useState(false);

  const buttonPressHandler = () => {
    if (focused) {
      onUpdate(value);
    } else {
      onDelete();
    }
  };
  return (
    <Input
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onValueChange={setValue}
      placeholder="Type to add new subtask..."
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{ inputWrapper: "bg-white py-6" }}
      startContent={`${index + 1}.`}
      endContent={
        <Button
          isIconOnly
          radius="full"
          size="sm"
          className={`${focused ? "bg-blue-100/70" : "bg-red-100/70"}`}
          onPress={buttonPressHandler}
        >
          {focused ? <Check /> : <X />}
        </Button>
      }
    />
  );
};

export default Subtask;
