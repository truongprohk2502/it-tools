import type { Metadata } from "next";
import DatePickerPage from "./_components/date-picker-page";

export const metadata: Metadata = {
  title: "UI DatePicker - IT Tools",
  description: "UI DatePicker component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <DatePickerPage />;
}
