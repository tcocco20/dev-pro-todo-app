import { Button, Input } from "@nextui-org/react";
import { ArrowRight, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <Input
      placeholder="Search..."
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{
        inputWrapper: ["bg-white", "py-7"],
      }}
      startContent={<Search />}
      endContent={
        <Button isIconOnly radius="full" size="sm" className="bg-blue-100">
          <ArrowRight />
        </Button>
      }
    />
  );
};

export default SearchBar;
