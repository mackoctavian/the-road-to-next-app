import Link from "next/link";
import { ticketsPath } from "@/path";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </div>
    </main>
  );
}
