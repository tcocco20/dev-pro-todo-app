import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Check, PenLine } from "lucide-react";

export default function Todo() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 rounded-full bg-blue-300" />
          <h3 className="text-xl">Prepare for job interview</h3>
        </div>
        <div className="flex gap-4 items-center">
          <Button isIconOnly radius="full" size="sm" className="bg-blue-100/70">
            <PenLine size={22} />
          </Button>
          <Button isIconOnly radius="full" size="sm" className="bg-blue-100/70">
            <Check size={22} />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="flex">
        <div className="flex flex-col gap-1">
          <p>Due Date: Tomorrow, 9:00 AM</p>
          <p>Priority: High (8/10)</p>
          <p>Complexity: Moderate (5/10)</p>
        </div>
      </CardBody>
    </Card>
  );
}
