import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drama Arena 598",
  description: "Pagelaran seni Drama Arena 598 di Darussalam Gontor",
  themeColor: "#ffffff",
  manifest: "/favicon/site.webmanifest",
  maskIcon: "/favicon/safari-pinned-tab.svg",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
