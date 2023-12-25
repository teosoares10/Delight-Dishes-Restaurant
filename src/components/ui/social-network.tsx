import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';

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
