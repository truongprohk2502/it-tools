import type { Metadata } from "next";
import EmojiReactionPage from "./_components/emoji-reaction-page";

export const metadata: Metadata = {
  title: "UI EmojiReaction - IT Tools",
  description: "UI EmojiReaction component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <EmojiReactionPage />;
}
