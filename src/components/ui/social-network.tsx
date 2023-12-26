import FacebookIcon from '@/components/ui/facebook-icon';
import InstagramIcon from '@/components/ui/instagram-icon';
import TwitterIcon from '@/components/ui/twitter-icon';

type SocialNetworkProps = {
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
};

export default function SocialNetwork({
  facebookLink,
  instagramLink,
  twitterLink
}: SocialNetworkProps) {
  return (
    <div className="flex gap-4">
      <FacebookIcon link={facebookLink} />
      <InstagramIcon link={instagramLink} />
      <TwitterIcon link={twitterLink} />
    </div>
  );
}
