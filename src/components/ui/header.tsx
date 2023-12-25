import Logo from '@/components/ui/Logo';
import NavBar from '@/components/ui/Nav';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <NavBar />
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
    </header>
  );
}
