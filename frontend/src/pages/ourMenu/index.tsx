import { Card } from '@/components/ui/card';
import { FoodMenuCard } from '@/components/ui/food-menu-card';
import { FoodMenuList } from '@/components/ui/food-menu-list';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';

export default function OurMenu() {
  return (
    <div>
      <header className="flex justify-between border-b border-black">
        <div>
          <Text className="text-2xl uppercase">
            best <span className="block">in town</span>
          </Text>
        </div>
        <Title className="text-5xl uppercase">
          <span className="block text-xl">the</span>menus
        </Title>
        <Text className="uppercase text-center">
          <span className="block">open</span>{' '}
          <span className="block">hour</span>
          <span className="block text-5xl">10</span>{' '}
          <span className="block">am/pm</span>
        </Text>
      </header>

      <main>
        <div className="flex gap-4 justify-between">
          <FoodMenuCard
            className="w-[20rem]"
            title="main course"
            menuList={<FoodMenuList />}
          />

          <Card.Root>
            <Card.Img src="" className="w-full h-[16rem]" />
            <div className="flex justify-between">
              <Card.Title title="prime sirloin steak" />
              <span>$3</span>
            </div>
            <Card.Content
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem amet ab magnam unde fugit sed."
            />
          </Card.Root>

          <FoodMenuCard
            className="w-[20rem]"
            title="food appetizer"
            menuList={<FoodMenuList />}
          />
        </div>

        <div className="flex gap-4 justify-between">
          <Card.Root>
            <Card.Title title="pasta" className="text-5xl" />
            <Card.Img src="" className="w-full h-[16rem]" />
            <Card.Content content={<FoodMenuList />} />
          </Card.Root>

          <div className="w-[50rem] space-y-8">
            <FoodMenuCard title="food category" menuList={<FoodMenuList />} />
            <FoodMenuCard title="fresh drink" menuList={<FoodMenuList />} />
            <div>
              <FoodMenuCard title="delivery" />
              <Text>lorem ipsum</Text>
              <Text>lorem ipsum</Text>
            </div>
          </div>

          <Card.Root>
            <Card.Title title="coffee" className="text-5xl" />
            <Card.Img src="" className="w-full h-[16rem]" />
            <Card.Content content={<FoodMenuList />} />
          </Card.Root>
        </div>
      </main>
    </div>
  );
}
