import { CalendarDateTime, CalendarDate } from "@internationalized/date";
import { DatePicker, TimeInput } from "@nextui-org/react";
import { Calendar, Clock } from "lucide-react";

interface DateTimeInputsProps {
  value: CalendarDateTime | null;
  onValueChange: (value: CalendarDateTime) => void;
  isInvalid?: boolean;
}

const DateTimeInputs = ({
  value,
  onValueChange,
  isInvalid,
}: DateTimeInputsProps) => {
  const today = new Date();
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
        errorMessage="Due date cannot be empty or in the past"
        isInvalid={isInvalid}
        radius="full"
        minValue={
          new CalendarDate(
            today.getFullYear(),
            today.getMonth() + 1,
            today.getDate()
          )
        }
        variant="bordered"
        value={
          value ? new CalendarDate(value.year, value.month, value.day) : null
        }
        onChange={(newVal) => {
          if (!value) {
            onValueChange(
              new CalendarDateTime(
                newVal.year,
                newVal.month,
                newVal.day,
                value.hour,
                value.minute
              )
            );
            return;
          }
          onValueChange(
            new CalendarDateTime(
              newVal.year,
              newVal.month,
              newVal.day,
              value.hour,
              value.minute
            )
          );
        }}
      />
      <TimeInput
        classNames={{ inputWrapper: "bg-white py-6", label: "text-lg" }}
        label="Select Time"
        labelPlacement="outside"
        radius="full"
        variant="bordered"
        errorMessage="Due date cannot be empty or in the past"
        isInvalid={isInvalid}
        minValue={
          new CalendarDateTime(
            today.getFullYear(),
            today.getMonth() + 1,
            today.getDate(),
            today.getHours(),
            today.getMinutes()
          )
        }
        endContent={<Clock className="text-blue-400" />}
        value={value}
        onChange={onValueChange}
      />
    </div>
  );
};

export default DateTimeInputs;
