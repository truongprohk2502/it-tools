import type { Metadata } from "next";
import SimpleCalculatorPage from "./simple-calculator-page";

export const metadata: Metadata = {
  title: "Simple Calculator - IT Tools",
  description:
    "The simple calculator application with addition, subtraction, division and multiplication.",
};

export default function Page() {
  return <SimpleCalculatorPage />;
}
