import type { Metadata } from "next";
import ToastSource from "./toast-source";

export const metadata: Metadata = {
  title: "UI Toast - IT Tools",
  description: "UI Toast component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ToastSource />;
}
