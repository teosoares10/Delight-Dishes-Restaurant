import Link from 'next/link';
import FacebookLogo from '@/components/Icons/SocialMedia/components/Facebook';
import TwitterLogo from '@/components/Icons/SocialMedia/components/Twitter';
import InstagramLogo from '@/components/Icons/SocialMedia/components/Instagram';
import { Button } from '@/components/ui/button';

export default function SocialMedia() {
  const Links = [
    {
      id: 1,
      link: 'https://instagram.com',
      logo: <InstagramLogo />
    },
    {
      id: 2,
      link: 'https://facebook.com',
      logo: <FacebookLogo />
    },
    {
      id: 3,
      link: 'https://twitter.com',
      logo: <TwitterLogo />
    }
  ];

  return (
    <div className="flex gap-4">
      {Links.map(({ id, link, logo }) => (
        <Button className="px-0" key={id} asChild>
          <Link className="hover:text-orange-600" href={link} target="_blank">
            {logo}
          </Link>
        </Button>
      ))}
    </div>
  );
}
