import type { Metadata } from "next";
import CvCreatorPage from "./cv-creator-page";

export const metadata: Metadata = {
  title: "CV Creator - IT Tools",
  description:
    "Create, edit, and download your CV in various formats. Customize your CV with templates and styles.",
};

export default function Page() {
  return <CvCreatorPage />;
}
