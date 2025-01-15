"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  Autocomplete,
  type AutocompleteProps,
} from "@/components/ui-lib/autocomplete";
import { useState } from "react";
import { autocompleteProperties } from "./constant";

const generateCode = (props: Partial<AutocompleteProps>) => `<Autocomplete
  placeholder="${props.placeholder}"
  disabled={${props.disabled}}
  value={animal}
  onChange={setAnimal}
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
      onChange: () => {},
    },
  );

  const changeValue = (value: string) => {
    setAutocompleteProps({ ...autocompleteProps, value });
  };

  return (
    <div>
      <UIComponent
        title="Autocomplete"
        code={generateCode(autocompleteProps)}
        hasNpmLink
      >
        <Autocomplete
          {...autocompleteProps}
          value={autocompleteProps.value as string}
          onChange={changeValue}
        />
      </UIComponent>
      <UIDocs<AutocompleteProps>
        fields={autocompleteProperties}
        fieldState={autocompleteProps}
        onChange={setAutocompleteProps}
      />
    </div>
  );
}
