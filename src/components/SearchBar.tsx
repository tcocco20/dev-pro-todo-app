import { Button, Input } from "@nextui-org/react";
import { ArrowRight, Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <Input
      placeholder="Search..."
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{
        inputWrapper: ["bg-white", "py-7", "pr-2"],
      }}
      value={searchTerm}
      onValueChange={setSearchTerm}
      startContent={<Search />}
      endContent={
        <Button isIconOnly radius="full" size="sm" className="bg-blue-100/70">
          <ArrowRight />
        </Button>
      }
    />
  );
};

export default SearchBar;
