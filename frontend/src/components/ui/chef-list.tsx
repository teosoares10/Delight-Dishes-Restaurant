import { ChefData, ChefsAttributes } from '@/@types/chef';
import { Card } from '@/components/ui/card';
import SocialNetwork from '@/components/ui/social-network';
import { Suspense } from 'react';

export function ChefList({ data }: ChefData) {
  return (
    <>
      {data.map((chef: ChefsAttributes, index: number) => (
        <Card.Root key={index} className="w-[20rem] space-y-4">
          <Suspense fallback={<div>loading...</div>}>
            <Card.Img
              className="w-full h-full"
              src={chef.attributes.img}
              alt={`${chef.attributes.alt}`}
            />
          </Suspense>
          <Card.Title className="text-2xl text-left" asChild>
            <h2>{chef.attributes.name}</h2>
          </Card.Title>
          <span className="block capitalize">{chef.attributes.role}</span>
          <SocialNetwork
            facebookLink={chef.attributes.facebook}
            instagramLink={chef.attributes.instagram}
            twitterLink={chef.attributes.twitter}
          />
        </Card.Root>
      ))}
    </>
  );
}
