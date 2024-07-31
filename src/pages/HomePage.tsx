import { Button } from "@nextui-org/react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import { Plus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchBar />
      <Filters />
      <TodoList />
      <div className="text-center">
        <Button
          size="lg"
          radius="full"
          className="text-xl opacity-85 py-8"
          startContent={<Plus />}
          color="primary"
        >
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
