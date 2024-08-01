import { Button } from "@nextui-org/react";
import { RefreshCw } from "lucide-react";

const DetailActions = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex gap-5">
        <Button
          variant="flat"
          size="lg"
          radius="full"
          className="flex-1 bg-blue-100/70"
        >
          Edit Task
        </Button>
        <Button
          variant="flat"
          size="lg"
          radius="full"
          className="flex-1 bg-red-100/70"
        >
          Delete Task
        </Button>
      </div>
      <Button
        size="lg"
        color="primary"
        radius="full"
        startContent={<RefreshCw />}
      >
        Repeat Task
      </Button>
    </div>
  );
};

export default DetailActions;
