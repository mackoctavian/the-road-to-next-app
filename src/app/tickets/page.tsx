import { initialTickets } from "../../data";

import Heading from "@/components/heading";
import TicketItem from "@/features/ticket/components/ticket-item";

export default function TicketsPage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place" />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </main>
  );
}
