import UISourceCode from "../_components/ui-source-code";
import {
  toastComponentCode,
  toastTailwindCode,
  useToastCode,
} from "./constant";

export default function ToastSource() {
  return (
    <UISourceCode
      component="Toast"
      dependencies={["react-portal", "zustand"]}
      steps={[
        {
          title: "Step 1: Create Tailwind config",
          sourceCode: toastTailwindCode,
        },
        {
          title: "Step 2: Create useToast hook",
          sourceCode: useToastCode,
        },
        {
          title: "Step 3: Create Toast component",
          sourceCode: toastComponentCode,
        },
      ]}
    />
  );
}
