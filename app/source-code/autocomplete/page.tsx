import type { Metadata } from "next";
import AutocompleteSource from "./autocomplete-source";

export const metadata: Metadata = {
  title: "UI Autocomplete - IT Tools",
  description: "UI Autocomplete component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AutocompleteSource />;
}
