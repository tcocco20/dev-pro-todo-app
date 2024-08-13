import { Button } from "@nextui-org/react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../store/useTodoContext";
import { useEffect, useState } from "react";
import { type Todo } from "../store/todo-context";
import utils from "../utils";

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
  const [filteredTodoList, setFilteredTodoList] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    setFilteredTodoList(todoList);
    setFilteredTodoList((prev) => {
      // First filter by selected tags
      let filteredList = utils.filterByTags(prev, selectedTags);

      // Then filter by search term
      filteredList = utils.filterBySearchTerm(filteredList, searchTerm);

      // Lastly sort the list

      return filteredList;
    });
  }, [todoList, searchTerm, selectedTags, sortOption]);

  return (
    <div className="flex flex-col gap-5">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
