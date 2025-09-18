import type { Metadata } from "next";
import AlarmClockPage from "./alarm-clock-page";

export const metadata: Metadata = {
  title: "Alarm Clock - IT Tools",
  description: "Set an alarm to notify you at a specific time.",
};

export default function Page() {
  return <AlarmClockPage />;
}
