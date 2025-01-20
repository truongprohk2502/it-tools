import type { Metadata } from "next";
import OtpInputPage from "./_components/otp-input-page";

export const metadata: Metadata = {
  title: "UI OtpInput - IT Tools",
  description: "UI OtpInput component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <OtpInputPage />;
}
