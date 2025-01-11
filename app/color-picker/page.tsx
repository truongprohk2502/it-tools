import type { Metadata } from "next";
import ColorPickerPage from "./color-picker-page";

export const metadata: Metadata = {
  title: "Color Picker - IT Tools",
  description:
    "Ability to upload an image or from color dashboard and get the RGB Color, HEX Color and HSL Color code.",
};

export default function Page() {
  return <ColorPickerPage />;
}
