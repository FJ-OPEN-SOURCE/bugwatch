import "../globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HPFooter, HPNavbar } from "@/components";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bugwatch",
  description: "AI Powered Bug Tracking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} antialiased grid grid-rows-[auto,1fr,auto] min-h-screen`}
      >
        <HPNavbar />
        {children}
        <HPFooter />
      </body>
    </html>
  );
}
