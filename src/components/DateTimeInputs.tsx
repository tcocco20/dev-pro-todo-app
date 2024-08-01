import { DatePicker, TimeInput } from "@nextui-org/react";

const DateTimeInputs = () => {
  return (
    <div className="flex justify-between">
      <DatePicker label="Select Due Date" labelPlacement="outside" />
      <TimeInput label="Select Time" labelPlacement="outside" />
    </div>
  );
};

export default DateTimeInputs;
