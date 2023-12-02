import Title from '@/components/ui/Typography/Title';
import Text from '@/components/ui/Typography/Text';
import SocialMedia from '@/components/ui/Icons/SocialMedia';

export default function About() {
  return (
    <div className="w-[25rem] space-y-4" data-testid="about">
      <Title className="text-xl text-left">Logo</Title>
      <Text>
        Lorem ipsum dolor, sitamet consectetur adipisicing elit. Error eius quam
        blanditiis facere distinctio incidunt ullam molestias? Qui reiciendis
        consequatur aperiam aliquam doloremque, dolorum libero temporibus maxime
        nam quam inventore.
      </Text>
      <SocialMedia
        facebook="https://facebook.com"
        instagram="https://instagram.com"
        twitter="https//twitter.com"
      />
    </div>
  );
}
