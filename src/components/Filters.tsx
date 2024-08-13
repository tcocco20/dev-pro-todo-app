import { useTodoContext } from "../store/useTodoContext";
import utils from "../utils";
import Filter from "./Filter";
import SortFilter from "./SortFilter";

interface FilterProps {
  selectedTags: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  setSelectedTags: (tags: string[]) => void;
}

const Filters = ({
  selectedTags,
  selectedOption,
  setSelectedOption,
  setSelectedTags,
}: FilterProps) => {
  const { todoList } = useTodoContext();
  const sortOptions = [
    { key: "default", label: "Default", last: false },
    { key: "ascDate", label: "Ascending Date", last: false },
    { key: "descDate", label: "Descending Date", last: false },
    { key: "ascComplexity", label: "Ascending Complexity", last: false },
    { key: "descComplexity", label: "Descending Complexity", last: false },
    { key: "ascPriority", label: "Ascending Priority", last: false },
    { key: "descPriority", label: "Descending Priority", last: true },
  ];
  const tags = utils.getTags(todoList);

  const filterOptions = tags.map((tag, i, arr) => ({
    key: i.toString(),
    label: tag,
    last: i === arr.length - 1,
  }));

  const handleSelectTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex gap-8">
      <SortFilter
        buttonTitle="Sort"
        menuItems={sortOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Filter
        selectTagHandler={handleSelectTag}
        selectedTags={selectedTags}
        buttonTitle="Category"
        menuItems={filterOptions}
      />
    </div>
  );
};

export default Filters;
