import { type CalendarDateTime } from "@internationalized/date";
import { DatePicker, TimeInput } from "@nextui-org/react";
import { Calendar, Clock } from "lucide-react";

interface DateTimeInputsProps {
  value: CalendarDateTime;
  onValueChange: (value: CalendarDateTime) => void;
}

const DateTimeInputs = ({ value, onValueChange }: DateTimeInputsProps) => {
  return (
    <div className="flex justify-between gap-7">
      <DatePicker
        dateInputClassNames={{
          inputWrapper: "bg-white py-6",
          label: "text-lg",
        }}
        classNames={{ selectorIcon: "text-blue-400" }}
        selectorIcon={<Calendar size={18} />}
        label="Select Due Date"
        labelPlacement="outside"
        radius="full"
        variant="bordered"
        value={value}
        onChange={onValueChange}
      />
      <TimeInput
        classNames={{ inputWrapper: "bg-white py-6", label: "text-lg" }}
        label="Select Time"
        labelPlacement="outside"
        radius="full"
        variant="bordered"
        endContent={<Clock className="text-blue-400" />}
        value={value}
        onChange={onValueChange}
      />
    </div>
  );
};

export default DateTimeInputs;
