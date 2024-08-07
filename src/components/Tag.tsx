import { Chip } from "@nextui-org/react";

const Tag = ({ title, index }: { title: string; index: number }) => {
  const colorNum = index % 3;
  return (
    <Chip
      size="sm"
      className={`${
        colorNum === 0
          ? "bg-teal-200"
          : colorNum === 1
          ? "bg-orange-200"
          : "bg-green-200"
      }`}
    >
      {title}
    </Chip>
  );
};

export default Tag;
