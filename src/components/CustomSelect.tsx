import { Button } from "@nextui-org/react";
import { type TodoRange } from "../store/todo-context";

interface CustomSelectProps {
  label: string;
  value: number;
  onValueChange: (value: TodoRange) => void;
}

const CustomSelect = ({ label, value, onValueChange }: CustomSelectProps) => {
  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 10; i++) {
      buttons.push(
        <Button
          key={i}
          variant={`${value === i ? "solid" : "flat"}`}
          radius="full"
          color="primary"
          isIconOnly
          onClick={() => onValueChange(i as TodoRange)}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };
  return (
    <div>
      <p className="text-lg">{label}</p>
      <div className="flex justify-between">{generateButtons()}</div>
    </div>
  );
};

export default CustomSelect;
