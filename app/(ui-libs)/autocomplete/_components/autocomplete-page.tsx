"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { useState } from "react";
import Autocomplete from "./autocomplete-component";
import { autocompleteProperties } from "./constant";
import type { AutocompleteProps } from "./types";

const generateCode = (props: AutocompleteProps) => `<<Autocomplete
  placeholder="${props.placeholder}"
  disabled={${props.disabled}}
  value="${props.value}"
  onChange={setValue}
  options={[
    "Cat",
    "Dog",
    "Zebra",
    "Bird",
    "Snake",
    "Frog",
    "Elephant",
    "Buffalo",
    "Mouse",
    "Tiger",
    "Lion",
  ]}
/>
`;

export default function AutocompletePage() {
  const [autocompleteProps, setAutocompleteProps] = useState<AutocompleteProps>(
    {
      value: "",
      options: [
        "Cat",
        "Dog",
        "Zebra",
        "Bird",
        "Snake",
        "Frog",
        "Elephant",
        "Buffalo",
        "Mouse",
        "Tiger",
        "Lion",
      ],
      placeholder: "Input animal",
      disabled: false,
    },
  );

  const changeValue = (value: string) => {
    setAutocompleteProps({ ...autocompleteProps, value });
  };

  return (
    <div>
      <UIComponent title="Autocomplete" code={generateCode(autocompleteProps)}>
        <Autocomplete {...autocompleteProps} onChange={changeValue} />
      </UIComponent>
      <UIDocs<AutocompleteProps>
        fields={autocompleteProperties}
        fieldState={autocompleteProps}
        onChange={setAutocompleteProps}
      />
    </div>
  );
}
