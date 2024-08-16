import { Button } from "@nextui-org/react";
import { RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../store/useTodoContext";

interface DetailActionsProps {
  todoId: string;
}

const DetailActions = ({ todoId }: DetailActionsProps) => {
  const navigate = useNavigate();
  const { deleteTodo, repeatTodo } = useTodoContext();
  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex gap-5">
        <Button
          variant="flat"
          size="lg"
          radius="full"
          className="flex-1 bg-blue-400/70"
          onPress={() => navigate("/edit/" + todoId)}
        >
          Edit Task
        </Button>
        <Button
          variant="flat"
          size="lg"
          radius="full"
          className="flex-1 bg-red-400/70"
          onPress={() => {
            deleteTodo(todoId);
            navigate("..");
          }}
        >
          Delete Task
        </Button>
      </div>
      <Button
        size="lg"
        color="primary"
        radius="full"
        startContent={<RefreshCw />}
        onPress={() => repeatTodo(todoId)}
      >
        Repeat Task
      </Button>
    </div>
  );
};

export default DetailActions;
