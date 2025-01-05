import type { Metadata } from "next";
import UISourceCode from "../_components/ui-source-code";
import { accordionComponentCode, accordionItemComponentCode } from "./constant";

export const metadata: Metadata = {
  title: "UI Accordion - IT Tools",
  description: "UI Accordion component using ReactJS and TailwindCSS",
};

export default function AccordionSourcePage() {
  return (
    <UISourceCode
      component="Accordion"
      steps={[
        {
          title: "Step 1: Create Accordion component",
          sourceCode: accordionComponentCode,
        },
        {
          title: "Step 2: Create AccordionItem component",
          sourceCode: accordionItemComponentCode,
        },
      ]}
    />
  );
}
