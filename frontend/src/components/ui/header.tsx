import Logo from '@/components/ui/logo';
import NavBar from '@/components/ui/nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <NavBar />
      <div className="flex">
        <Link href="/signIn" className="capitalize">
          sign in
        </Link>
        <Button
          className="text-white hover:text-orange-500 border border-orange-500 bg-orange-500"
          asChild
        >
          <a
            href="#bookTable"
            className="block capitalize"
            data-testid="book-table-link"
          >
            book a table
          </a>
        </Button>
      </div>
    </header>
  );
}
