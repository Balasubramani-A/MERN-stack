import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "OneEntry E-Commerce App",
  description: "Create by Kishan Sheth from youtube for practice purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gray-900"
    >
      <body className="">{children}</body>
    </html>
  );
}
