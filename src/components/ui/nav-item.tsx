import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavItemProps = {
  text: string;
  className?: string;
  href: string;
};

export function NavItem({ className, href, text }: NavItemProps) {
  return (
    <li>
      <Link className={(cn('hover:text-orange-600'), className)} href={href}>
        {text}
      </Link>
    </li>
  );
}
