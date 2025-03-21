import type { Metadata } from "next";
import BoxShadowPage from "./box-shadow-page";

export const metadata: Metadata = {
  title: "CSS Box Shadow - IT Tools",
  description: "CSS Box Shadow generator and preview.",
};

export default function Page() {
  return <BoxShadowPage />;
}
