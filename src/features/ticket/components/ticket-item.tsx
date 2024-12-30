import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ticketPath } from "@/path";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../type";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
  ticket: Ticket;
};
export default function TicketItem({ ticket }: TicketItemProps) {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
  return (
    <div className="w-full max-w-[420px] flex gap-x-2">
      <Card className="w-full max-w-[420px]">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 whitespace-break-spaces">
            {ticket.content}
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">{detailButton}</div>
    </div>
  );
}
