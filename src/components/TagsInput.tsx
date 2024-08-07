import { Input } from "@nextui-org/react";

interface TagsInputProps {
  value: string[];
  onValueChange: (value: string[]) => void;
}

const TagsInput = ({ value, onValueChange }: TagsInputProps) => {
  return (
    <Input
      placeholder="Separate tags with commas..."
      labelPlacement="outside"
      radius="full"
      size="lg"
      variant="bordered"
      classNames={{ inputWrapper: "bg-white py-6", label: "text-lg" }}
      label="Add Tags"
      value={value.join(", ")}
      onValueChange={(newValue) =>
        onValueChange(
          newValue.split(",").map((tag) => tag.trim().toLowerCase())
        )
      }
    />
  );
};

export default TagsInput;
