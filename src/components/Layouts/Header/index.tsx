import NavBar from '@/components/Nav';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-center">
        <h2 className="font-bold text-xl capitalize">krazy kitchen katerers</h2>
        <p className="text-xs tracking-[.4rem] uppercase">restaurant</p>
      </div>
      <NavBar />
      <Button asChild>
        <a href="#bookTable">
          <p>book a table</p>
        </a>
      </Button>
    </header>
  );
}
