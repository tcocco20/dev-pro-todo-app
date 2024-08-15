import { Button, Input } from "@nextui-org/react";
import { Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import utils from "../utils";

interface SubtaskProps {
  title: string;
  index: number;
  onUpdate: (title: string) => void;
  onDelete: () => void;
}

const Subtask = ({ title, index, onUpdate, onDelete }: SubtaskProps) => {
  const [focused, setFocused] = useState(false);
  const [isInvalid, setIsInvalid] = useState<boolean>();
  const inputRef = useRef<HTMLInputElement>(null);

  const updateHandler = (newText: string) => {
    onUpdate(newText);
    if (utils.validateTitle(newText)) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(undefined);
  };

  const taskButton = focused ? (
    <Button
      isIconOnly
      radius="full"
      size="sm"
      className="bg-blue-100/70"
      onPress={() => updateHandler(title)}
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

  useEffect(() => {
    if (isInvalid !== undefined) {
      if (utils.validateTitle(title)) {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }
    }
  }, [title, isInvalid]);

  return (
    <Input
      onFocus={() => setFocused(true)}
      ref={inputRef}
      onBlur={() => {
        if (isInvalid) {
          inputRef.current?.focus();
          return;
        }
        setIsInvalid(undefined);
        setTimeout(() => setFocused(false), 100);
      }}
      value={title}
      onValueChange={updateHandler}
      isInvalid={isInvalid}
      errorMessage="Subtask cannot be empty"
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
