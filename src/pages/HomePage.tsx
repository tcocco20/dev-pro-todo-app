import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchBar />
      <Filters />
    </div>
  );
};

export default HomePage;
