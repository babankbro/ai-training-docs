import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Knowledge & Tools for Educational Transformation",
  description:
    "หลักสูตรอบรมเชิงปฏิบัติการ ความฉลาดรู้และเครื่องมือปัญญาประดิษฐ์เชิงสร้างสรรค์ มหาวิทยาลัยกาฬสินธุ์ • CraftAI – CARIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Sidebar />
        <main className="lg:pl-72 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
