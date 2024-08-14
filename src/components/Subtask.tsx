import { Button, Input } from "@nextui-org/react";
import { Check, X } from "lucide-react";
import { useRef, useState } from "react";

interface SubtaskProps {
  title: string;
  index: number;
  onUpdate: (title: string) => void;
  onDelete: () => void;
}

const Subtask = ({ title, index, onUpdate, onDelete }: SubtaskProps) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const taskButton = focused ? (
    <Button
      isIconOnly
      radius="full"
      size="sm"
      className="bg-blue-100/70"
      onPress={() => onUpdate(title)}
    >
      <Check />
    </Button>
  ) : (
    <Button
      isIconOnly
      radius="full"
      size="sm"
      className="bg-red-100/70"
      onPress={onDelete}
    >
      <X />
    </Button>
  );
  return (
    <Input
      onFocus={() => setFocused(true)}
      ref={inputRef}
      onBlur={() => setTimeout(() => setFocused(false), 100)}
      value={title}
      onValueChange={onUpdate}
      placeholder="Type to add new subtask..."
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{ inputWrapper: "bg-white py-6" }}
      startContent={`${index + 1}.`}
      endContent={taskButton}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          inputRef.current?.blur();
        }
      }}
    />
  );
};

export default Subtask;
