import FacebookLogo from './components/Facebook';
import InstagramLogo from './components/Instagram';
import TwitterLogo from './components/Twitter';

export default function SocialMedia() {
  return (
    <div className="flex gap-4">
      <FacebookLogo />
      <InstagramLogo />
      <TwitterLogo />
    </div>
  );
}
