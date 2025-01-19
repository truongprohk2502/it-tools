import type { Metadata } from "next";
import DatePickerSource from "./date-picker-source";

export const metadata: Metadata = {
  title: "UI DatePicker - IT Tools",
  description: "UI DatePicker component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DatePickerSource />;
}
