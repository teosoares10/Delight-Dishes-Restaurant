import { FacebookLogo } from '@phosphor-icons/react';
import Link from 'next/link';

export default function FacebookIcon({ link }: { link: string }) {
  return (
    <Link href={`${link}`}>
      <FacebookLogo className="hover:text-orange-600" size={24} />
    </Link>
  );
}
