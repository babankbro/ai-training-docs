import type { Metadata } from "next";
import { Sarabun, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
      className={`${sarabun.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Sidebar />
        <main className="lg:pl-72 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
