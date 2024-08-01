import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import { ArrowUp, Calendar, Move } from "lucide-react";

interface DetailsCardProps {
  urgency: "high" | "medium" | "low";
}

const DetailsCard = ({ urgency }: DetailsCardProps) => {
  return (
    <Card shadow="none" className="mb-8">
      <CardHeader>
        <div className="flex gap-3 items-center">
          <div
            className={`w-5 h-5 rounded-full ${
              urgency === "high"
                ? "bg-red-500"
                : urgency === "medium"
                ? "bg-orange-400"
                : "bg-blue-400"
            }`}
          />
          <h3 className="text-xl">Prepare for job interview</h3>
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
          <ArrowUp />
          <p>
            <span className="text-zinc-500">Priority: </span>High (8/10)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Move />
          <p>
            <span className="text-zinc-500">Complexity: </span>Moderate (5/10)
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <Progress
          value={50}
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
