import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FilterProps {
  buttonTitle: string;
  menuItems?: { key: string; label: string; last: boolean }[];
}

const Filter = ({
  buttonTitle,
  menuItems = [
    { key: "emptyKey123", label: "Create tags to filter by!", last: true },
  ],
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
      >
        {(item) =>
          item.last ? (
            <DropdownItem key={item.key}>{item.label}</DropdownItem>
          ) : (
            <DropdownSection showDivider>
              <DropdownItem
                key={item.key}
                selectedIcon={<div className="hidden" />}
              >
                {item.label}
              </DropdownItem>
            </DropdownSection>
          )
        }
      </DropdownMenu>
    </Dropdown>
  );
};

export default Filter;
