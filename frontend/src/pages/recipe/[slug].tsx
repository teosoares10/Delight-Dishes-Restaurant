import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Img from '@/components/ui/image';
import { Ingredients } from '@/components/ui/ingredients';
import { OtherRecipeList } from '@/components/ui/other-recipe-list';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';
import { ForkKnife, Timer } from '@phosphor-icons/react';

export default function Recipe() {
  return (
    <div className="mx-4">
      <header className="flex justify-between items-center p-[10rem]">
        <Card.Root className="space-y-4">
          <Card.Category category="desserts" className="uppercase" />
          <Card.Title
            title="strawberry parfait"
            className="text-left text-5xl"
          />
          <Card.Description
            description="lorem ipsum dolor sit amet consectetur. Praesent mattis nibh vestibulum eusimod morbi ullamcorper rutrum. Orci cras in phasellus ultricies."
            className="w-[38rem]"
          />
          <Button className="border border-orange-600 text-orange-600" asChild>
            <a href="">jump to recipe</a>
          </Button>
        </Card.Root>

        <div className="w-[0.2rem] h-[8rem] bg-slate-400"></div>

        <ul className="w-[10rem] space-y-4 text-gray-500">
          <li className="flex gap-2">
            <Timer size={20} className="mt-1" />
            <div>
              <Text className="capitalize font-bold">total</Text>
              <Text>10 minutes</Text>
            </div>
          </li>

          <li className="flex gap-2">
            <ForkKnife size={20} className="mt-1" />
            <div>
              <Text className="capitalize font-bold">serves</Text>
              <Text>2 people</Text>
            </div>
          </li>
        </ul>
      </header>

      <main className="space-y-8">
        <Img src="" className="w-full h-[30rem]" />

        <div className="flex justify-center items-center">
          <div className="w-[70rem] flex gap-8">
            <div className="flex-1 space-y-8">
              <Ingredients className="p-8 bg-slate-300" />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                eum corporis ex sit dolores accusamus odit, expedita, rem ab,
                temporibus dolorem distinctio ullam hic quis cupiditate ad
                deserunt? Dolore, sed!
              </Text>
            </div>
            <aside className="w-[20rem] space-y-4">
              <Title className="text-left text-2xl">other recipes</Title>
              <OtherRecipeList />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
