import Img from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import { ChefApiResponse, ChefAttributes } from '@/@types/type';
import SocialMedia from '@/components/ui/Icons/SocialMedia';

export default function Chef({ attributes }: ChefApiResponse) {
  return (
    <div className="space-y-16 py-36 px-12">
      <h1
        style={cormorantInfant.style}
        className="text-4xl font-bold capitalize"
      >
        our masters chefs
      </h1>
      <div className="h-[20rem] flex justify-between">
        {chefs.map((chef) => (
          <ChefItem
            key={chef.id}
            img={
              <Img
                className="w-full h-full"
                src={chef.src}
                width={200}
                height={250}
              />
            }
            name={chef.name}
            role={chef.role}
          />
        ))}
      </div>
    </div>
  );
}
