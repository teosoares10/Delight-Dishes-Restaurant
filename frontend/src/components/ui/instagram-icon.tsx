import { InstagramLogo } from '@phosphor-icons/react';
import Link from 'next/link';

export default function InstagramIcon({ link }: { link: string }) {
  return (
    <Link href={`${link}`}>
      <InstagramLogo className="hover:text-orange-600" size={24} />
    </Link>
  );
}
