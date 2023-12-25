import { TwitterLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function TwitterIcon({ link }: { link: string }) {
  return (
    <Link href={`${link}`} data-testid="twitter-link">
      <TwitterLogo className="hover:text-orange-600" size={24} />
    </Link>
  );
}
