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
  menuItems?: { key: string; label: string; last: boolean }[];
  selectedOption?: string;
  setSelectedOption?: (option: string) => void;
}

const SortFilter = ({
  buttonTitle,
  menuItems,
  selectedOption,
  setSelectedOption,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const generateFilters = (
    options: { key: string; label: string; last: boolean }[]
  ) => {
    return options.map((option) => (
      <Radio
        key={option.key}
        classNames={{
          base: `flex-row-reverse justify-between max-w-full m-0 w-full${
            option.last ? "" : " border-b mb-1"
          }`,
          label: "text-sm",
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
        classNames={{ list: "inline-block" }}
      >
        <DropdownItem isReadOnly>
          <RadioGroup
            color="default"
            defaultValue={"default"}
            value={selectedOption}
            onValueChange={setSelectedOption}
          >
            {generateFilters(menuItems!)}
          </RadioGroup>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortFilter;
