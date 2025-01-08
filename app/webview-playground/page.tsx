import type { Metadata } from "next";
import WebViewPage from "./webview-page";

export const metadata: Metadata = {
  title: "WebView Playground - IT Tools",
  description:
    "Simple, fast running webview page with JavaScript, HTML and CCS.",
};

export default function Page() {
  return <WebViewPage />;
}
