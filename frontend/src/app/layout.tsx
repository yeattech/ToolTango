import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/sidemenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolTango",
  description: "ToolTango a place to manage tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
