import {initialTickets} from '@/data';

type TicketPageParams = {
  params: {
    ticketId: string;
  }
}


export default function TicketPage({params}: TicketPageParams) {
  const ticketId = params.ticketId;
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