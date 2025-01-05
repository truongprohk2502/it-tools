import type { Metadata } from "next";
import AvatarPage from "./_components/avatar-page";

export const metadata: Metadata = {
  title: "UI Avatar - IT Tools",
  description: "UI Avatar component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AvatarPage />;
}
