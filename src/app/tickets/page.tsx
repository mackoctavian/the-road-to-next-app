
import {initialTickets} from '../../data';
import {ticketPath} from "@/path";
import Link from 'next/link';
export default function TicketsPage() {
  return (
    <main>
      {
        initialTickets.map(ticket => (
          <div key={ticket.id}>
            <h2 className="text-lg">{ticket.title}</h2>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>

          </div>
        ))
      }
    </main>
  );
}