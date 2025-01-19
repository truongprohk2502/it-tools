"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Dropdown, type DropdownProps } from "@/components/ui-lib/dropdown";
import { useState } from "react";
import { dropdownProperties } from "./constant";

const generateCode = (props: DropdownProps) => `<Dropdown
  value={city}
  placeholder="${props.placeholder}"
  disabled={${props.disabled}}
  options={[
    { label: "Danang", value: "Danang" },
    { label: "Hanoi", value: "Hanoi" },
    { label: "New York", value: "New York" },
    { label: "Paris", value: "Paris" },
    { label: "Barcelona", value: "Barcelona" },
    { label: "Milan", value: "Milan" },
    { label: "Berlin", value: "Berlin" },
    { label: "Tokyo", value: "Tokyo" },
  ]}
  onChange={setCity}
/>
`;

export default function DropdownPage() {
  const [dropdownProps, setDropdownProps] = useState<DropdownProps>({
    value: null,
    placeholder: "Enter city",
    disabled: false,
    options: [
      { label: "Danang", value: "Danang" },
      { label: "Hanoi", value: "Hanoi" },
      { label: "New York", value: "New York" },
      { label: "Paris", value: "Paris" },
      { label: "Barcelona", value: "Barcelona" },
      { label: "Milan", value: "Milan" },
      { label: "Berlin", value: "Berlin" },
      { label: "Tokyo", value: "Tokyo" },
    ],
    onChange: () => {},
  });

  const handleChange = (value: string) => {
    setDropdownProps({ ...dropdownProps, value });
  };

  return (
    <div>
      <UIComponent title="Dropdown" code={generateCode(dropdownProps)}>
        <Dropdown {...dropdownProps} onChange={handleChange} />
      </UIComponent>
      <UIDocs<DropdownProps>
        fields={dropdownProperties}
        fieldState={dropdownProps}
        onChange={setDropdownProps}
      />
    </div>
  );
}
