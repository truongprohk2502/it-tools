import type { Metadata } from "next";
import AccordionSource from "./accordion-source";

export const metadata: Metadata = {
  title: "UI Accordion - IT Tools",
  description: "UI Accordion component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AccordionSource />;
}
