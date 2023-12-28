'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      <ul className={cn('flex gap-4', className)}>
        <li>
          <Link className="hover:text-orange-600" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-600" href="/aboutUs">
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-600" href="/ourMenu">
            Our Menu
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-600" href="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-600" href="/recipe">
            Recipe
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-600" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-600" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
