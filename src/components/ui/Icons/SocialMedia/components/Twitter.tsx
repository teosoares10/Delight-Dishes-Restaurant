'use client';

import { TwitterIcon } from 'lucide-react';
import Link from 'next/link';

export default function TwitterLogo({ link }: { link: string }) {
  return (
    <Link href={`${link}`}>
      <TwitterIcon className="hover:text-orange-600" size={24} />
    </Link>
  );
}
