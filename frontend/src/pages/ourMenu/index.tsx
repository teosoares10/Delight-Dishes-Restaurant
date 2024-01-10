import { Card } from '@/components/ui/card';
import { FoodMenuCard } from '@/components/ui/food-menu-card';
import { FoodMenuList } from '@/components/ui/food-menu-list';
import Img from '@/components/ui/image';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';

export default function OurMenu() {
  return (
    <div>
      <header className="flex justify-between">
        <div>
          <Text>best of town</Text>
        </div>
        <Title className="uppercase">
          <span className="block">the</span>menus
        </Title>
        <div>open hour 10 am/pm</div>
      </header>

      <main>
        <div>
          <FoodMenuCard title="main course" menuList={<FoodMenuList />} />

          <Card.Root>
            <Card.Img src="" />
            <div className="flex justify-between">
              <Card.Title title="prime sirloin steak" />
              <span>$3</span>
            </div>
            <Card.Content
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem amet ab magnam unde fugit sed."
            />
          </Card.Root>

          <FoodMenuCard title="food appetizer" menuList={<FoodMenuList />} />
        </div>

        <div>
          <FoodMenuCard
            img={<Img src="" />}
            title="pasta"
            menuList={<FoodMenuList />}
          />

          <div>
            <FoodMenuCard title="food category" menuList={<FoodMenuList />} />
            <FoodMenuCard title="fresh drink" menuList={<FoodMenuList />} />
            <div>
              <FoodMenuCard title="delivery" />
              <Text>lorem ipsum</Text>
              <Text>lorem ipsum</Text>
            </div>
          </div>

          <FoodMenuCard
            img={<Img src="" />}
            title="coffee"
            menuList={<FoodMenuList />}
          />
        </div>
      </main>
    </div>
  );
}
