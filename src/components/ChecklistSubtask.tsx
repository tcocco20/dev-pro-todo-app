import { Button, Chip } from "@nextui-org/react";
import { Check } from "lucide-react";

interface ChecklistSubtaskProps {
  title: string;
  completed: boolean;
  index: number;
  completeHandler: () => void;
  uncheckHandler: () => void;
}

const ChecklistSubtask = ({
  title,
  completed,
  index,
  completeHandler,
  uncheckHandler,
}: ChecklistSubtaskProps) => {
  return (
    <Chip
      size="lg"
      className="bg-white w-full py-7 max-w-full"
      endContent={
        <Button
          isIconOnly
          size="lg"
          radius="full"
          className={`${
            completed ? "bg-blue-500 text-white" : "bg-blue-100/70"
          }`}
          onPress={completed ? uncheckHandler : completeHandler}
        >
          <Check />
        </Button>
      }
    >{`${index + 1}. ${title}`}</Chip>
  );
};

export default ChecklistSubtask;
