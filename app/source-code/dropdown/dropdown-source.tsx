import UISourceCode from "../_components/ui-source-code";
import { dropdownComponentCode, dropdownUseClickAwayCode } from "./constant";

export default function DropdownSource() {
  return (
    <UISourceCode
      component="Dropdown"
      steps={[
        {
          title: "Step 1: Create useClickAway hook",
          sourceCode: dropdownUseClickAwayCode,
        },
        {
          title: "Step 2: Create Dropdown component",
          sourceCode: dropdownComponentCode,
        },
      ]}
    />
  );
}
