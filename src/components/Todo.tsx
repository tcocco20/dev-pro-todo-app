import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  CircularProgress,
} from "@nextui-org/react";
import { ArrowUp, Calendar, Check, Move, PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { type Todo } from "../store/todo-context";

interface TodoProps {
  todo: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const navigate = useNavigate();
  const urgency = "high";

  return (
    <Card
      isPressable
      onPress={() => {
        setTimeout(() => {
          navigate(`view/${todo.id}`);
        }, 250);
      }}
    >
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={`w-5 h-5 rounded-full ${
              urgency === "high"
                ? "bg-red-500"
                : urgency === "medium"
                ? "bg-orange-400"
                : "bg-blue-400"
            }`}
          />
          <h3 className="text-lg">{todo.title}</h3>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            isIconOnly
            radius="full"
            size="sm"
            className="bg-blue-100/70"
            onPress={() => {
              setTimeout(() => {
                navigate(`edit/${todo.id}`);
              }, 250);
            }}
          >
            <PenLine size={22} />
          </Button>
          <Button isIconOnly radius="full" size="sm" className="bg-blue-100/70">
            <Check size={22} />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <p>
              <span className="text-zinc-500">Due Date: </span>
              <span
                className={`${
                  urgency === "high"
                    ? "text-red-500"
                    : urgency === "medium"
                    ? "text-orange-400"
                    : "text-blue-400"
                }`}
              >
                Tomorrow, 9:00 AM
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUp size={20} />
            <p>
              <span className="text-zinc-500">Priority: </span>High (8/10)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Move size={20} />
            <p>
              <span className="text-zinc-500">Complexity: </span>Moderate (5/10)
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Chip size="sm" className="bg-teal-200">
              Tag 1
            </Chip>
            <Chip size="sm" className="bg-orange-200">
              Tag 2
            </Chip>
            <Chip size="sm" className="bg-green-200">
              Tag 3
            </Chip>
          </div>
        </div>
        <CircularProgress size="lg" value={20} showValueLabel />
      </CardBody>
    </Card>
  );
}
