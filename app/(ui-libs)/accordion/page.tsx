import type { Metadata } from "next";
import AccordionPage from "./_components/accordion-page";

export const metadata: Metadata = {
  title: "UI Accordion - IT Tools",
  description: "UI Accordion component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AccordionPage />;
}
