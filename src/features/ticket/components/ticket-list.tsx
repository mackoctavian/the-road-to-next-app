import React from "react";
import TicketItem from "./ticket-item";
import { Ticket } from "../type";
import { getTickets } from "../queries/get-tickets";

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
