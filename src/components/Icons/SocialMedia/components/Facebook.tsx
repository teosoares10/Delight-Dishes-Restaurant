'use client';

import { FacebookIcon } from 'lucide-react';
import Link from 'next/link';

export default function FacebookLogo({ link }: { link: string }) {
  return (
    <Link href={`${link}`}>
      <FacebookIcon className="hover:text-orange-600" size={24} />
    </Link>
  );
}
