import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIS Assignment",
  description: "Go India Stocks - NextJS Frontend- Selection Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <SideBar />
        <main className=" max-h-screen overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
