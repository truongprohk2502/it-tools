import type { Metadata } from "next";
import AutocompletePage from "./_components/autocomplete-page";

export const metadata: Metadata = {
  title: "UI Autocomplete - IT Tools",
  description: "UI Autocomplete component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AutocompletePage />;
}
