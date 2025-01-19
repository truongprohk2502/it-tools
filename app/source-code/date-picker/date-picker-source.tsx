import UISourceCode from "../_components/ui-source-code";
import {
  datePickerComponentCode,
  datePickerHelpersCode,
  datePickerInputCode,
  datePickerPopupCode,
  datePickerTypesCode,
  datePickerUseClickAwayHook,
} from "./constant";

export default function DatePickerSource() {
  return (
    <UISourceCode
      component="DatePicker"
      dependencies={["dayjs"]}
      steps={[
        {
          title: "Step 1: Create useClickAway hook",
          sourceCode: datePickerUseClickAwayHook,
        },
        {
          title: "Step 2: Create TypeScript types",
          sourceCode: datePickerTypesCode,
        },
        {
          title: "Step 3: Create helper functions",
          sourceCode: datePickerHelpersCode,
        },
        {
          title: "Step 4: Create DateInput component",
          sourceCode: datePickerInputCode,
        },
        {
          title: "Step 5: Create DatePopup component",
          sourceCode: datePickerPopupCode,
        },
        {
          title: "Step 6: Create DatePicker component",
          sourceCode: datePickerComponentCode,
        },
      ]}
    />
  );
}
