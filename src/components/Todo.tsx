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

interface TodoProps {
  urgency: "high" | "medium" | "low";
}

export default function Todo({ urgency }: TodoProps) {
  const navigate = useNavigate();

  const urgencyIndicatorColor =
    urgency === "high"
      ? "red-500"
      : urgency === "medium"
      ? "orange-400"
      : "blue-400";

  return (
    <Card
      isPressable
      onPress={() => {
        navigate("view/1");
      }}
    >
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={`w-5 h-5 rounded-full bg-${urgencyIndicatorColor}`} />
          <h3 className="text-xl">Prepare for job interview</h3>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            isIconOnly
            radius="full"
            size="sm"
            className="bg-blue-100/70"
            onPress={() => navigate("edit/1")}
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
              <span className={`text-${urgencyIndicatorColor}`}>
                Tomorrow, 9:00 AM
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUp size={20} />
            <p>Priority: High (8/10)</p>
          </div>
          <div className="flex items-center gap-2">
            <Move size={20} />
            <p>Complexity: Moderate (5/10)</p>
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
