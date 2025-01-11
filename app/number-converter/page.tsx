import type { Metadata } from "next";
import NumberConverterPage from "./number-converter-page";

export const metadata: Metadata = {
  title: "Number Converter - IT Tools",
  description: "Number converters and conversions.",
};

export default function Page() {
  return <NumberConverterPage />;
}
