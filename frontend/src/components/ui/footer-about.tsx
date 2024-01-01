import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import SocialNetwork from '@/components/ui/social-network';

export default function About() {
  return (
    <div className="w-[25rem] space-y-4">
      <Title className="text-xl text-left">Logo</Title>
      <Text>
        Lorem ipsum dolor, sitamet consectetur adipisicing elit. Error eius quam
        blanditiis facere distinctio incidunt ullam molestias? Qui reiciendis
        consequatur aperiam aliquam doloremque, dolorum libero temporibus maxime
        nam quam inventore.
      </Text>
      <SocialNetwork
        facebookLink="https://facebook.com"
        instagramLink="https://instagram.com"
        twitterLink="https//twitter.com"
      />
    </div>
  );
}
