import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ticketsPath, homePath } from "@/path";
import { Button, buttonVariants } from "@/components/ui/button";
import { Kanban } from "lucide-react";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Road to Next",
  description: "My Road to next application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className=" min-h-screen flex-1 overflow-y-auto overflow-x-hidden bg-secondary/20 flex flex-col py-24 px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
