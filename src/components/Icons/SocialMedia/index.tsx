import FacebookLogo from './components/Facebook';
import InstagramLogo from './components/Instagram';
import TwitterLogo from './components/Twitter';

type SocialMediaProps = {
  facebook: string;
  instagram: string;
  twitter: string;
};

export default function SocialMedia({
  facebook,
  instagram,
  twitter
}: SocialMediaProps) {
  return (
    <div className="flex gap-4">
      <FacebookLogo link={facebook} />
      <InstagramLogo link={instagram} />
      <TwitterLogo link={twitter} />
    </div>
  );
}
