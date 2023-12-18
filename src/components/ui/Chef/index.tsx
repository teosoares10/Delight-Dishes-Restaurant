import Title from '@/components/ui/Typography/Title';
import { ChefApiResponse, ChefAttributes } from '@/@types/type';
import SocialMedia from '@/components/ui/Icons/SocialMedia';
import { Card } from '../Card';

export default function Chef({ attributes }: ChefApiResponse) {
  return (
    <div className="space-y-16 py-36 px-12">
      <Title className="text-4xl">our masters chefs</Title>
      <div className="h-[20rem] flex gap-4">
        {attributes?.map((chef: ChefAttributes, index: number) => (
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
            <SocialMedia
              facebook={chef.facebook}
              instagram={chef.instagram}
              twitter={chef.twitter}
            />
          </Card.Root>
        ))}
      </div>
    </div>
  );
}
