import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  CircularProgress,
} from "@nextui-org/react";
import { Check, PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();
  return (
    <Card
      isPressable
      onPress={() => {
        navigate("view/1");
      }}
    >
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 rounded-full bg-blue-300" />
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
        <div className="flex flex-col gap-1">
          <p>Due Date: Tomorrow, 9:00 AM</p>
          <p>Priority: High (8/10)</p>
          <p>Complexity: Moderate (5/10)</p>
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
        <CircularProgress size="lg" value={50} showValueLabel />
      </CardBody>
    </Card>
  );
}
