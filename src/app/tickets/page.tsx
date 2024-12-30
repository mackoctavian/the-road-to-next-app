import { initialTickets } from "../../data";
import { ticketPath } from "@/path";
import Link from "next/link";
import clsx from "clsx";

const TICKET_ICONS = {
  OPEN: "O",
  DONE: "X",
  IN_PROGRESS: ">",
};

export default function TicketsPage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets in one place
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      {initialTickets.map((ticket) => (
        <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
          {/* <div>{TICKET_ICONS[ticket.status]}</div> */}
          <h3 className="text-lg truncate font-semibold">{ticket.title}</h3>
          <p className={clsx("text-sm text-slate-500 truncate", {
            "line-through": ticket.status === "DONE",
          })}>{ticket.content}</p>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
      </div>
    </main>
  );
}
