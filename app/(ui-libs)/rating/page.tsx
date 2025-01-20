import type { Metadata } from "next";
import RatingPage from "./_components/rating-page";

export const metadata: Metadata = {
  title: "UI Rating - IT Tools",
  description: "UI Rating component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <RatingPage />;
}
