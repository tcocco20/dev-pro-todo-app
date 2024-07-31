import { Button } from "@nextui-org/react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import { Plus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <SearchBar />
      <Filters />
      <TodoList />
      <Button
        size="lg"
        radius="full"
        className="text-lg"
        startContent={<Plus />}
      >
        Load More
      </Button>
    </div>
  );
};

export default HomePage;
