import UISourceCode from "../_components/ui-source-code";
import { dialogComponentCode, dialogTailwindCode } from "./constant";

export default function DialogSource() {
  return (
    <UISourceCode
      component="Dialog"
      dependencies={[
        <>
          <code className="text-red-500">@radix-ui/react-portal </code>
          is a minimalist JavaScript library that renders a React subtree in a
          different part of the DOM.
        </>,
      ]}
      steps={[
        {
          title: "Step 1: Create Tailwind animation",
          sourceCode: dialogTailwindCode,
        },
        {
          title: "Step 2: Create Dialog component",
          sourceCode: dialogComponentCode,
        },
      ]}
    />
  );
}
