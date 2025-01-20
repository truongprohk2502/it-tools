import type { Metadata } from "next";
import OtpInputSource from "./otp-input-source";

export const metadata: Metadata = {
  title: "UI OtpInput - IT Tools",
  description: "UI OtpInput component using ReactJS and TailwindCSS",
};

export default function Page() {
  return <OtpInputSource />;
}
