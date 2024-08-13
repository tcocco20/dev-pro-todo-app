import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown, ChevronUp, CircleCheck } from "lucide-react";
import { useState } from "react";
import classes from "./filter.module.css";

interface FilterProps {
  buttonTitle: string;
  menuItems: { key: string; label: string; last: boolean; icon?: boolean }[];
  selectedTags: string[];
  selectTagHandler: (tag: string) => void;
}

const Filter = ({
  buttonTitle,
  menuItems = [
    {
      key: "emptyKey123",
      label: "Create tags to filter by!",
      last: true,
      icon: false,
    },
  ],
  selectedTags,
  selectTagHandler,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <DropdownTrigger>
        <Button
          size="lg"
          className="flex-1 bg-white"
          radius="full"
          endContent={
            isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />
          }
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
            <DropdownItem
              key={item.key}
              selectedIcon={<div className="hidden" />}
              onPress={() => selectTagHandler(item.label)}
              endContent={
                item.icon === false ? (
                  <div className="hidden" />
                ) : (
                  <CircleCheck
                    className={
                      selectedTags.includes(item.label)
                        ? `${classes.selected} bg-black rounded-full`
                        : ""
                    }
                  />
                )
              }
            >
              {item.label}
            </DropdownItem>
          ) : (
            <DropdownSection showDivider>
              <DropdownItem
                key={item.key}
                selectedIcon={<div className="hidden" />}
                onPress={() => selectTagHandler(item.label)}
                endContent={
                  item.icon === false ? (
                    <div className="hidden" />
                  ) : (
                    <CircleCheck
                      className={
                        selectedTags.includes(item.label)
                          ? `${classes.selected} bg-black rounded-full`
                          : ""
                      }
                    />
                  )
                }
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
