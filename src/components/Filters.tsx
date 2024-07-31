import Filter from "./Filter";

const Filters = () => {
  return (
    <div className="flex gap-8">
      <Filter buttonTitle="Sort" />
      <Filter buttonTitle="Category" />
    </div>
  );
};

export default Filters;
