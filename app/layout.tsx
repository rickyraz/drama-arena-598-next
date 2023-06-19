/* eslint-disable no-undef */
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

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

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <ClerkProvider frontendApi="pk_test_bWF0dXJlLWtyaWxsLTAuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <html lang="en">
        <body className={(cn("antialiased"), inter.className)}>
          <NextTopLoader
            color="#0FA383"
            crawlSpeed={125}
            initialPosition={0.02}
          />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
