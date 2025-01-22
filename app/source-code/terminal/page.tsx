import type { Metadata } from "next";
import SkeletonSource from "./skeleton-source";

export const metadata: Metadata = {
  title: "UI Skeleton - IT Tools",
  description: "UI Skeleton component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SkeletonSource />;
}
