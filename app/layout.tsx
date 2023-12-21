import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LVease",
  description:
    "Streamline employee leave management with our efficient and user-friendly Leave Management System. Easily request, track, and manage leaves. Enhance HR productivity and ensure smooth workforce planning.",
  keywords: "leave management, employee leave, HR software, workforce planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
