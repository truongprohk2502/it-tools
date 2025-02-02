import type { Metadata } from "next";
import ToastPage from "./_components/toast-page";

export const metadata: Metadata = {
  title: "UI Toast - IT Tools",
  description: "UI Toast component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <ToastPage />;
}
