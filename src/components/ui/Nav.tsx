'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      <ul className={cn('flex gap-4', className)}>
        <li>
          <Link className="hover:text-orange-600" href="/" data-testid="link">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600"
            href="/aboutUs"
            data-testid="link"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600"
            href="/ourMenu"
            data-testid="link"
          >
            Our Menu
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600"
            href="/gallery"
            data-testid="link"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600"
            href="/recipe"
            data-testid="link"
          >
            Recipe
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600"
            href="/blog"
            data-testid="link"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600"
            href="/contact"
            data-testid="link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
