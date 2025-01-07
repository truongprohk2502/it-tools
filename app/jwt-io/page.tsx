import type { Metadata } from "next";
import JwtIOPage from "./jwt-page";

export const metadata: Metadata = {
  title: "JWT IO - IT Tools",
  description: "JSON Web Tokens - decode, verify and generate JWT.",
};

export default function Page() {
  return <JwtIOPage />;
}
