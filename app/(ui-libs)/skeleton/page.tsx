import type { Metadata } from "next";
import SkeletonPage from "./_components/skeleton-page";

export const metadata: Metadata = {
  title: "UI Skeleton - IT Tools",
  description: "UI Skeleton component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SkeletonPage />;
}
