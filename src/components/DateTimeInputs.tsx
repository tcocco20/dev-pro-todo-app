import { DatePicker, TimeInput } from "@nextui-org/react";

const DateTimeInputs = () => {
  return (
    <div className="flex justify-between gap-5">
      <DatePicker
        classNames={{ timeInput: "bg-white py-6", timeInputLabel: "text-lg" }}
        size="lg"
        label="Select Due Date"
        labelPlacement="outside"
        radius="full"
      />
      <TimeInput
        classNames={{ inputWrapper: "bg-white py-6", label: "text-lg" }}
        size="lg"
        label="Select Time"
        labelPlacement="outside"
        radius="full"
      />
    </div>
  );
};

export default DateTimeInputs;
