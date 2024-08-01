import { Input } from "@nextui-org/react";

const TagsInput = () => {
  return (
    <Input
      placeholder="Separate tags with commas..."
      labelPlacement="outside"
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{ inputWrapper: "bg-white py-6", label: "text-lg" }}
      label="Add Tags"
    />
  );
};

export default TagsInput;
