import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FilterProps {
  buttonTitle: string;
  menuItems?: { key: string; label: string; last: boolean }[];
  selectionMode?: "single" | "multiple";
}

const Filter = ({
  buttonTitle,
  menuItems = [
    { key: "emptyKey123", label: "Create tags to filter by!", last: true },
  ],
  selectionMode,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
        selectionMode={selectionMode}
      >
        {(item) =>
          item.last ? (
            <DropdownItem key={item.key}>
              <RadioGroup>
                <Radio
                  value={item.key}
                  classNames={{
                    base: "inline-flex flex-row-reverse justify-between items-center",
                  }}
                >
                  {item.label}
                </Radio>
              </RadioGroup>
            </DropdownItem>
          ) : (
            <DropdownSection showDivider>
              <DropdownItem key={item.key}>
                <RadioGroup>
                  <Radio
                    classNames={{
                      base: "inline-flex flex-row-reverse justify-between w-full",
                      label: "text-sm w-full",
                      labelWrapper: "w-full",
                    }}
                    value={item.key}
                  >
                    {item.label}
                  </Radio>
                </RadioGroup>
              </DropdownItem>
            </DropdownSection>
          )
        }
      </DropdownMenu>
    </Dropdown>
  );
};

export default Filter;
