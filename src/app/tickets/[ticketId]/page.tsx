type TicketPageParams = {
  params: {
    ticketId: string;
  }
}


export default function TicketPage({params}: TicketPageParams) {
  const ticketId = params.ticketId;
  return (
    <main>
      <p>{ticketId}</p>
    </main>
  );
}