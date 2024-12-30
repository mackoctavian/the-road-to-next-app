import Link from "next/link";
import { ticketsPath } from "@/path";
import Heading from "@/components/heading";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-y-8">
      <Heading title="Home" description="Your home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </div>
    </main>
  );
}
