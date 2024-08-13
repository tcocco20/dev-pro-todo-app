import { Button } from "@nextui-org/react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../store/useTodoContext";
import { useState } from "react";

export type SortOption =
  | "default"
  | "ascDate"
  | "DescDate"
  | "ascPriority"
  | "descPriority"
  | "ascComplexity"
  | "descComplexity";

const HomePage = () => {
  const navigate = useNavigate();
  const { todoList } = useTodoContext();
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  return (
    <div className="flex flex-col gap-5">
      <SearchBar />
      <Filters
        selectedOption={sortOption}
        setSelectedOption={setSortOption}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <TodoList todoList={filteredTodoList} />
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
