import { initialTickets } from "@/data"
import { Ticket } from "../type"

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // throw new Error("Failed to fetch tickets")
  return new Promise((resolve) => {

      resolve(initialTickets)

  })
}