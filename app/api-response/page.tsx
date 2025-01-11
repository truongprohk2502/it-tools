import type { Metadata } from "next";
import ApiResponsePage from "./api-response-page";

export const metadata: Metadata = {
  title: "Generate API Response - IT Tools",
  description: "Create to use fake and dummy APIs response JSON data.",
};

export default function Page() {
  return <ApiResponsePage />;
}
