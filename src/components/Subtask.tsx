import { Button, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";
// import { useRef } from "react";

const Subtask = () => {
  return (
    <Input
      //   ref={ref}
      placeholder="Type to add new subtask..."
      labelPlacement="outside"
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{ inputWrapper: "bg-white py-6" }}
      endContent={
        <Button isIconOnly radius="full" size="sm" className="bg-blue-100/70">
          <Plus />
        </Button>
      }
    />
  );
};

export default Subtask;
