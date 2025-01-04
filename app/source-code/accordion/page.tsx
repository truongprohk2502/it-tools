"use client";

import UISourceCode from "../_components/ui-source-code";
import { accordionComponentCode, accordionItemComponentCode } from "./constant";

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
