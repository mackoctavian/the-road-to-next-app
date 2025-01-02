import { initialTickets } from "../../data";

import Heading from "@/components/heading";
import TicketItem from "@/features/ticket/components/ticket-item";
import TicketList from "@/features/ticket/components/ticket-list";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { Suspense } from "react";

export default function TicketsPage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place" />

      <Suspense fallback="Loading...">
        <TicketList />
      </Suspense>
    </main>
  );
}
