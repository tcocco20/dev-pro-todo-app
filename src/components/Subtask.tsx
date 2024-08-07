import { Button, Input } from "@nextui-org/react";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface SubtaskProps {
  title: string;
}

const Subtask = ({ title }: SubtaskProps) => {
  const [value, setValue] = useState(title);
  const [focused, setFocused] = useState(false);

  const buttonPressHandler = () => {
    console.log(value);
  };
  return (
    <Input
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
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
          onPress={buttonPressHandler}
        >
          {focused ? <Check /> : <X />}
        </Button>
      }
    />
  );
};

export default Subtask;
