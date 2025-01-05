import type { Metadata } from "next";
import UISourceCode from "../_components/ui-source-code";
import {
  autocompleteComponentCode,
  autocompleteUseClickAwayCode,
} from "./constant";

export const metadata: Metadata = {
  title: "UI Autocomplete - IT Tools",
  description: "UI Autocomplete component using ReactJS and TailwindCSS",
};

export default function AutocompleteSourcePage() {
  return (
    <UISourceCode
      component="Autocomplete"
      steps={[
        {
          title: "Step 1: Create useClickAway hook",
          sourceCode: autocompleteUseClickAwayCode,
        },
        {
          title: "Step 2: Create Autocomplete component",
          sourceCode: autocompleteComponentCode,
        },
      ]}
    />
  );
}
