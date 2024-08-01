import { Button } from "@nextui-org/react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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
          onClick={() => {
            setTimeout(() => {
              navigate("add-new");
            }, 250);
          }}
        >
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
