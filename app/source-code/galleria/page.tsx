import type { Metadata } from "next";
import GalleriaSource from "./galleria-source";

export const metadata: Metadata = {
  title: "UI Galleria - IT Tools",
  description: "UI Galleria component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <GalleriaSource />;
}
