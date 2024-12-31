import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "IT Tools - Handy online tools for developers",
  description:
    "Collection of handy online tools for developers, with great UX. IT Tools is a free and open-source collection of handy online tools for developers & people working in IT.",
  keywords: ["IT", "Tools", "Developer"],
  authors: {
    name: "Nguyen Dinh Truong",
    url: "https://github.com/truongprohk2502",
  },
  robots: "index, follow",
  applicationName: "IT Tools",
  referrer: "no-referrer-when-downgrade",
  openGraph: {
    type: "website",
    title: "IT Tools - Handy online tools for developers",
    description:
      "Collection of handy online tools for developers, with great UX. IT Tools is a free and open-source collection of handy online tools for developers & people working in IT.",
    url: "https://it-tools.netlify.app",
    siteName: "IT Tools",
    images: [
      {
        url: "https://it-tools.netlify.app/images/background.png",
        width: 800,
        height: 420,
        alt: "IT Tools",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
