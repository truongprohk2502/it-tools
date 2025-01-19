import type { Metadata } from "next";
import InputPage from "./_components/input-page";

export const metadata: Metadata = {
  title: "UI Input - IT Tools",
  description: "UI Input component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <InputPage />;
}
