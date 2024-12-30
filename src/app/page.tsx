import Link from 'next/link';
import {ticketsPath} from '@/path';

export default function HomePage() {
  return (
    <main>
      <h2>Home Page</h2>
      <Link href={ticketsPath()} className="underline">Go to tickets</Link>
    </main>
  );
}
