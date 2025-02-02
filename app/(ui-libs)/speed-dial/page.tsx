import type { Metadata } from "next";
import SpeedDialPage from "./_components/speed-dial-page";

export const metadata: Metadata = {
  title: "UI SpeedDial - IT Tools",
  description: "UI SpeedDial component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SpeedDialPage />;
}
