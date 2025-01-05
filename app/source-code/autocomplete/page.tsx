"use client";

import UISourceCode from "../_components/ui-source-code";
import {
  autocompleteComponentCode,
  autocompleteUseClickAwayCode,
} from "./constant";

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
