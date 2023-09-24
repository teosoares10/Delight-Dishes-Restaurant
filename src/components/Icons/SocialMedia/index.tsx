import Link from 'next/link';
import FacebookLogo from '@/components/Icons/SocialMedia/Facebook';
import TwitterLogo from '@/components/Icons/SocialMedia/Twitter';
import InstagramLogo from '@/components/Icons/SocialMedia/Instagram';

export default function SocialMedia() {
  return (
    <div className="flex gap-4">
      <Link href="https://instagram.com" target="_blank">
        <InstagramLogo />
      </Link>
      <Link href="https://facebook.com" target="_blank">
        <FacebookLogo />
      </Link>
      <Link href="https://twitter.com" target="_blank">
        <TwitterLogo />
      </Link>
    </div>
  );
}
