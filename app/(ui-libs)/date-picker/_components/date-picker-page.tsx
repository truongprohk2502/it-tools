"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  DatePicker,
  type DatePickerProps,
} from "@/components/ui-lib/date-picker";
import { useState } from "react";
import { datePickerProperties } from "./constant";

const generateCode = (props: DatePickerProps) => `<DatePicker
  value="${props.value}"
  onChange={setDate}
/>
`;

export default function DatePickerPage() {
  const [datePickerProps, setDatePickerProps] = useState<DatePickerProps>({
    value: null,
    onChange: () => {},
  });

  const handleChange = (value: string) => {
    setDatePickerProps({ ...datePickerProps, value });
  };

  return (
    <div>
      <UIComponent title="DatePicker" code={generateCode(datePickerProps)}>
        <DatePicker {...datePickerProps} onChange={handleChange} />
      </UIComponent>
      <UIDocs<DatePickerProps>
        fields={datePickerProperties}
        fieldState={datePickerProps}
        onChange={setDatePickerProps}
      />
    </div>
  );
}
