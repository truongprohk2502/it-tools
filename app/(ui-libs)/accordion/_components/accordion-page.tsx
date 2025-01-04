"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { useState } from "react";
import UIChildDocs from "../../_components/ui-child-docs";
import Accordion from "./accordion-component";
import AccordionItem from "./accordion-item";
import { accordionItemProperties, accordionProperties } from "./constant";
import type { AccordionProps } from "./types";

const generateCode = (props: AccordionProps) => `<Accordion
  variant="${props.variant}"
  selectMode="${props.selectMode}"
  className="${props.className}"
>
  <AccordionItem id="1" title="Accordion 1">
    Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Earum
    voluptate fugiat itaque blanditiis debitis quia quibusdam velit
    obcaecati unde provident expedita quisquam nostrum incidunt atque,
    sint repellat sit, iste eveniet. eveniet.
  </AccordionItem>
  <AccordionItem id="2" title="Accordion 2">
    Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Earum
    voluptate fugiat itaque blanditiis debitis quia quibusdam velit
    obcaecati unde provident expedita quisquam nostrum incidunt atque,
    sint repellat sit, iste eveniet.
  </AccordionItem>
  <AccordionItem id="3" title="Accordion 3">
    Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Earum
    voluptate fugiat itaque blanditiis debitis quia quibusdam velit
    obcaecati unde provident expedita quisquam nostrum incidunt atque,
    sint repellat sit, iste eveniet.
  </AccordionItem>
</Accordion>
`;

export default function AccordionPage() {
  const [accordionProps, setAccordionProps] = useState<AccordionProps>({
    variant: "light",
    selectMode: "single",
    className: "",
  });

  return (
    <div>
      <UIComponent title="Accordion" code={generateCode(accordionProps)}>
        <Accordion {...accordionProps}>
          <AccordionItem id="1" title="Accordion 1">
            Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptate fugiat itaque blanditiis debitis quia quibusdam velit
            obcaecati unde provident expedita quisquam nostrum incidunt atque,
            sint repellat sit, iste eveniet. eveniet.
          </AccordionItem>
          <AccordionItem id="2" title="Accordion 2">
            Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptate fugiat itaque blanditiis debitis quia quibusdam velit
            obcaecati unde provident expedita quisquam nostrum incidunt atque,
            sint repellat sit, iste eveniet.
          </AccordionItem>
          <AccordionItem id="3" title="Accordion 3">
            Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptate fugiat itaque blanditiis debitis quia quibusdam velit
            obcaecati unde provident expedita quisquam nostrum incidunt atque,
            sint repellat sit, iste eveniet.
          </AccordionItem>
        </Accordion>
      </UIComponent>
      <UIDocs<AccordionProps>
        fields={accordionProperties}
        fieldState={accordionProps}
        onChange={setAccordionProps}
      />
      <UIChildDocs
        componentName="AccordionItem"
        fields={accordionItemProperties}
      />
    </div>
  );
}
