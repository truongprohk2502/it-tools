import type { Metadata } from "next";
import UISourceCode from "../_components/ui-source-code";
import { buttonComponentCode, buttonVariantCode } from "./constant";

export const metadata: Metadata = {
  title: "UI Button - IT Tools",
  description: "UI Button component using ReactJS and TailwindCSS",
};

export default function ButtonSourcePage() {
  return (
    <UISourceCode
      component="Button"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: buttonVariantCode,
        },
        {
          title: "Step 2: Create Button component",
          sourceCode: buttonComponentCode,
        },
      ]}
    />
  );
}
