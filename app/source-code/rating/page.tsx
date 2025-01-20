import type { Metadata } from "next";
import RatingSource from "./rating-source";

export const metadata: Metadata = {
  title: "UI Rating - IT Tools",
  description: "UI Rating component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <RatingSource />;
}
