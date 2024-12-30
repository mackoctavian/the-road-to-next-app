import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ticketsPath, homePath } from "@/path";
import { Button, buttonVariants } from "@/components/ui/button";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 w-full backdrop-blur  flex justify-between py-2.5 px-5 border-b">
          <Button asChild variant={"outline"}>
            <Link href={homePath()}>Home</Link>
          </Button>

          <Link
            href={ticketsPath()}
            className={buttonVariants({ variant: "outline" })}
          >
            Tickets
          </Link>
        </nav>
        <main className=" min-h-screen flex-1 overflow-y-auto overflow-x-hidden bg-secondary/20 flex flex-col py-24 px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
