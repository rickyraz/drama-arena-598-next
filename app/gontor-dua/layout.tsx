import Index from "@/components/Header/Main";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drama Arena 598 - Gontor Dua",
  description: "Pagelaran seni Drama Arena 598 di Darussalam Gontor Kampus 2",
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
      <body className={inter.className}>
        <Index />
        {children}
      </body>
    </html>
  );
}
