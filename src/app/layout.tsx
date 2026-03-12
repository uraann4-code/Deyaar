import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxury Interior Design",
  description: "Bespoke interior design services for luxury homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
