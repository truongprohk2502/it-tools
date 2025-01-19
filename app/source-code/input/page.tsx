import type { Metadata } from "next";
import InputSource from "./input-source";

export const metadata: Metadata = {
  title: "UI Input - IT Tools",
  description: "UI Input component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <InputSource />;
}
