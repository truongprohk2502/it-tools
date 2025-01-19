import type { Metadata } from "next";
import GalleriaPage from "./_components/galleria-page";

export const metadata: Metadata = {
  title: "UI Galleria - IT Tools",
  description: "UI Galleria component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <GalleriaPage />;
}
