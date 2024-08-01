import { Button } from "@nextui-org/react";

interface CustomSelectProps {
  label: string;
}

const CustomSelect = ({ label }: CustomSelectProps) => {
  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 10; i++) {
      buttons.push(
        <Button key={i} variant="flat" radius="full" color="primary" isIconOnly>
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
