import type { Metadata } from "next";
import SpeedDialSource from "./speed-dial-source";

export const metadata: Metadata = {
  title: "UI SpeedDial - IT Tools",
  description: "UI SpeedDial component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <SpeedDialSource />;
}
