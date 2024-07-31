import Filter from "./Filter";

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
  return (
    <div className="flex gap-8">
      <Filter
        buttonTitle="Sort"
        menuItems={sortOptions}
        selectionMode="single"
      />
      <Filter buttonTitle="Category" selectionMode="multiple" />
    </div>
  );
};

export default Filters;
