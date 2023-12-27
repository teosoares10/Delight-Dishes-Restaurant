import { ChefAttributes } from '@/@types/type';
import { Card } from '@/components/ui/card';
import SocialNetwork from '@/components/ui/social-network';

export function ChefList({ chefs }: { chefs: ChefAttributes[] }) {
  return (
    <>
      {chefs?.map((chef: ChefAttributes, index: number) => (
        <Card.Root
          key={index}
          className="w-[20rem] space-y-4"
          data-testid="chef-item"
        >
          <Card.Img
            className="w-full h-full"
            src={`${chef.img}`}
            alt={`${chef.alt}`}
          />
          <Card.Title className="text-2xl text-left" title={chef.name} />
          <span className="block capitalize">{chef.role}</span>
          <SocialNetwork
            facebookLink={chef.facebook}
            instagramLink={chef.instagram}
            twitterLink={chef.twitter}
          />
        </Card.Root>
      ))}
    </>
  );
}
