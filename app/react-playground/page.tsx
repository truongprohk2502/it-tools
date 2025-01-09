import type { Metadata } from "next";
import ReactPlaygroundPage from "./react-playground-page";

export const metadata: Metadata = {
  title: "React Playground - IT Tools",
  description:
    "The ability to render React components with editable source code and live preview.",
};

export default function Page() {
  return <ReactPlaygroundPage />;
}
