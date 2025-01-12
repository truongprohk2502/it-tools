import type { Metadata } from "next";
import QrCodePage from "./qr-code-page";

export const metadata: Metadata = {
  title: "Generate QR Code - IT Tools",
  description:
    "Create and download QR Code with various format and beautiful frame.",
};

export default function Page() {
  return <QrCodePage />;
}
