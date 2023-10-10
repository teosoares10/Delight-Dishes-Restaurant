'use client';

import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';

export default function InstagramLogo({ link }: { link: string }) {
  return (
    <Link href={`${link}`}>
      <InstagramIcon className="hover:text-orange-600" size={24} />
    </Link>
  );
}
