'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link href="/ourMenu">Our Menu</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/recipe">Recipe</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
