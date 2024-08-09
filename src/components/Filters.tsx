import { useTodoContext } from "../store/useTodoContext";
import Filter from "./Filter";
import SortFilter from "./SortFilter";

const Filters = () => {
  const { tagList } = useTodoContext();
  const sortOptions = [
    { key: "default", label: "Default", last: false },
    { key: "dateAsc", label: "Ascending Date", last: false },
    { key: "dateDesc", label: "Descending Date", last: false },
    { key: "complexityAsc", label: "Ascending Complexity", last: false },
    { key: "complexityDesc", label: "Descending Complexity", last: false },
    { key: "priorityAsc", label: "Ascending Priority", last: false },
    { key: "priorityDesc", label: "Descending Priority", last: true },
  ];

  const testTagFilters = tagList.map((tag, index, arr) => ({
    key: tag,
    label: tag,
    last: index === arr.length - 1,
  }));
  return (
    <div className="flex gap-8">
      <SortFilter buttonTitle="Sort" menuItems={sortOptions} />
      <Filter buttonTitle="Category" menuItems={testTagFilters} />
    </div>
  );
};

export default Filters;
