import { initialTickets } from "../../data";
import { ticketPath } from "@/path";
import Link from "next/link";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import { CircleCheck, FileText, Pencil } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TICKET_ICONS = {
  OPEN: <FileText />,
  DONE: <CircleCheck />,
  IN_PROGRESS: <Pencil />,
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

      <Separator />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
