import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoComerz UI Preview",
  description: "Preview all components of the NeoComerz UI library",
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
