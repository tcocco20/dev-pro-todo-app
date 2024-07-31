import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchBar />
      <Filters />
      <TodoList />
    </div>
  );
};

export default HomePage;
