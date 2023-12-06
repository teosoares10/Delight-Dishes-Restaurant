import Img from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import { ChefApiResponse, ChefAttributes } from '@/@types/type';
import SocialMedia from '@/components/ui/Icons/SocialMedia';

export default function Chef({ attributes }: ChefApiResponse) {
  return (
    <div className="space-y-16 py-36 px-12">
      <Title className="text-4xl">our masters chefs</Title>
      <div className="h-[20rem] flex gap-4">
        {attributes?.map((chef: ChefAttributes, index: number) => (
          <div
            key={index}
            className="w-[20rem] space-y-4"
            data-testid="chef-item"
          >
            <Img
              className="w-full h-full"
              src={`${chef.img}`}
              alt={`${chef.alt}`}
              width={200}
              height={250}
            />
            <Title className="text-2xl text-left">{chef.name}</Title>
            <span className="block capitalize">{chef.role}</span>
            <SocialMedia
              facebook={chef.facebook}
              instagram={chef.instagram}
              twitter={chef.twitter}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
