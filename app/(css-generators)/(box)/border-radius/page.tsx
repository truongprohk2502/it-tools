import type { Metadata } from "next";
import BorderRadiusPage from "./border-radius-page";

export const metadata: Metadata = {
  title: "CSS Border Radius - IT Tools",
  description: "CSS Border Radius generator and preview.",
};

export default function Page() {
  return <BorderRadiusPage />;
}
