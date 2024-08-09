import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import { ArrowUp, Calendar, Move } from "lucide-react";
import { Todo } from "../store/todo-context";
import utils from "../utils";

interface DetailsCardProps {
  todo: Todo;
}

const DetailsCard = ({ todo }: DetailsCardProps) => {
  const urgency = utils.getUrgency(todo.dueDate);
  return (
    <Card shadow="none" className="mb-8">
      <CardHeader>
        <div className="flex gap-3 items-center">
          <div
            className={`w-5 h-5 rounded-full ${
              urgency === "high"
                ? "bg-red-500"
                : urgency === "mid"
                ? "bg-orange-400"
                : "bg-blue-400"
            }`}
          />
          <h3 className="text-xl">{todo.title}</h3>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 text-lg font-light">
        <div className="flex items-center gap-2">
          <Calendar />
          <p>
            <span className="text-zinc-500">Due Date: </span>
            <span
              className={`${
                urgency === "high"
                  ? "text-red-500"
                  : urgency === "mid"
                  ? "text-orange-400"
                  : "text-blue-400"
              }`}
            >
              {utils.getDisplayDate(todo.dueDate)}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ArrowUp />
          <p>
            <span className="text-zinc-500">Priority: </span>
            {utils.getDisplayLevel(todo.priority)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Move />
          <p>
            <span className="text-zinc-500">Complexity: </span>
            {utils.getDisplayLevel(todo.complexity)}
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <Progress
          value={todo.completed ? 100 : utils.getProgress(todo.subtasks)}
          label="Task Completed"
          showValueLabel
          className="mb-3"
          classNames={{
            label: "text-xl",
            value: "text-xl text-blue-500",
            labelWrapper: "mb-2",
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default DetailsCard;
