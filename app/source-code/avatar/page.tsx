import type { Metadata } from "next";
import AvatarSource from "./avatar-source";

export const metadata: Metadata = {
  title: "UI Avatar - IT Tools",
  description: "UI Avatar component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <AvatarSource />;
}
