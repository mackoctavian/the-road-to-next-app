import {initialTickets} from '@/data';

type TicketPageParams = {
  params: Promise<{
    ticketId: string;
  }>
}


export default async function TicketPage({params}: TicketPageParams) {
  const {ticketId} = await params;
  const ticket = initialTickets.find(ticket => ticket.id === parseInt(ticketId));

  if (!ticket) {
    return <main>Ticket not found</main>;
  }
  return (
    <main>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </main>
  );
}