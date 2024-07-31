import Filter from "./Filter";
import SortFilter from "./SortFilter";

const Filters = () => {
  const sortOptions = [
    { key: "default", label: "Default", last: false },
    { key: "dateAsc", label: "Ascending Date", last: false },
    { key: "dateDesc", label: "Descending Date", last: false },
    { key: "complexityAsc", label: "Ascending Complexity", last: false },
    { key: "complexityDesc", label: "Descending Complexity", last: false },
    { key: "priorityAsc", label: "Ascending Priority", last: false },
    { key: "priorityDesc", label: "Descending Priority", last: true },
  ];

  const testTagFilters = [
    { key: "default", label: "tag 1", last: false },
    { key: "dateAsc", label: "tag 2", last: false },
    { key: "dateDesc", label: "tag 3", last: false },
    { key: "complexityAsc", label: "tag 4", last: false },
    { key: "complexityDesc", label: "tag 5", last: false },
    {
      key: "priorityAsc",
      label: "tag 6",
      last: false,
    },
    { key: "priorityDesc", label: "tag 7", last: true },
  ];
  return (
    <div className="flex gap-8">
      <SortFilter buttonTitle="Sort" menuItems={sortOptions} />
      <Filter buttonTitle="Category" menuItems={testTagFilters} />
    </div>
  );
};

export default Filters;
