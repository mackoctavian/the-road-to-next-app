import { initialTickets } from "@/data";
import { Ticket } from "../type";


export const getTicket = async (id: number): Promise<Ticket | null> => {
  new Promise(resolve => setTimeout(resolve, 2000));
  const ticket = initialTickets.find(ticket => ticket.id === id)

  return new Promise(resolve => {
    resolve(ticket || null)
  })
}