import { cn } from '@/lib/utils';
import { NavItem } from './nav-item';

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      <ul className={cn('flex gap-4', className)}>
        <NavItem text="home" href="/" />
        <NavItem text="about us" href="/aboutUs" />
        <NavItem text="order online" href="/orderOnline" />
        <NavItem text="our menu" href="/ourMenu" />
        <NavItem text="gallery" href="/gallery" />
        <NavItem text="recipe" href="/recipe" />
        <NavItem text="blog" href="/blog" />
        <NavItem text="contact us" href="/contactUs" />
      </ul>
    </>
  );
}
