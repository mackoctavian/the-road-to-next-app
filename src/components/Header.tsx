import { homePath, ticketsPath } from "@/path";
import { Kanban } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import ThemeSwitcher from "./theme/theme-switcher";

export default function Header() {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 w-full backdrop-blur  flex justify-between py-2.5 px-5 border-b">
      <Button asChild variant={"ghost"}>
        <Link href={homePath()}>
          <Kanban />
          <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
        </Link>
      </Button>

      <div className="flex align-center gap-x-2">
        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
}
