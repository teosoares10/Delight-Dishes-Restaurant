import Logo from '@/components/ui/logo';
import NavBar from '@/components/ui/nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-8">
        <Logo />
        <NavBar />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/signIn" className="capitalize">
          sign in
        </Link>
        <Button
          className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
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
