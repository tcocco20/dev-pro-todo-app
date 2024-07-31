import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FilterProps {
  buttonTitle: string;
  menuItems?: { key: string; label: string }[];
}

const SortFilter = ({ buttonTitle, menuItems }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const generateFilters = (options: { key: string; label: string }[]) => {
    return options.map((option) => (
      <Radio
        key={option.key}
        classNames={{
          base: "flex-row-reverse justify-between max-w-full w-full",
          label: "text-xs",
        }}
        value={option.key}
      >
        {option.label}
      </Radio>
    ));
  };
  return (
    <Dropdown onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <DropdownTrigger>
        <Button
          size="lg"
          className="flex-1 bg-white"
          radius="full"
          endContent={isOpen ? <ChevronUp /> : <ChevronDown />}
        >
          {buttonTitle}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        items={menuItems}
        disabledKeys={["emptyKey123"]}
        selectionMode="none"
      >
        <DropdownItem isReadOnly>
          <RadioGroup>{generateFilters(menuItems!)}</RadioGroup>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortFilter;
