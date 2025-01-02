import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/path";
import Link from "next/link";

type TicketPageParams = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageParams) {
  const { ticketId } = await params;
  const ticket = await getTicket(parseInt(ticketId));

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket Not Found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go back to tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <main className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </main>
  );
}
