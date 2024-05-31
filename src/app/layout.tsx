import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"], display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Towncrier",
  description: "Discover the newsletter that will spark your imagination and fuel your purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
