import type { Metadata } from "next";
import EmojiReactionSource from "./emoji-reaction-source";

export const metadata: Metadata = {
  title: "UI EmojiReaction - IT Tools",
  description: "UI EmojiReaction component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <EmojiReactionSource />;
}
