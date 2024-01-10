import Input from '@/components/ui/input';
import Img from '@/components/ui/image';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RecipeCategoryList } from '@/components/ui/recipe-category-list';
import { LatestRecipeList } from '@/components/ui/latest-recipe-list';

export default function Recipes() {
  return (
    <div className="mx-4">
      <div className="flex flex-col justify-center items-center h-[24rem] space-y-8">
        <Title className="w-[24rem] capitalize text-5xl">
          a blog template made for food influencers
        </Title>
        <form action="">
          <Input
            placeholder="Search for a recipe"
            className="border p-2 w-[35rem]"
          />
        </form>
      </div>

      <RecipeCategoryList className="mb-16" />

      <div className="flex justify-between">
        <Img src="" className="w-[40rem] h-[30rem]" />
        <div className="flex flex-col w-[30rem] justify-center items-center space-y-4">
          <Title className="text-5xl text-left">
            Pineapple + Smoked Jackfruit Pizza
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh
            vestibulum euismod morbi ullamcorper rutrum. Orci cras in phasellus
            ultricies.
          </Text>
          <Button className="" asChild>
            <Link href="">view recipe</Link>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Title className="text-left text-3xl">latest recipe</Title>
        <LatestRecipeList />
      </div>
    </div>
  );
}
