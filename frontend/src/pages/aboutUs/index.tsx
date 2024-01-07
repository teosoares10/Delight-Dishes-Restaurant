import BookTableForm from '@/components/ui/book-table-form';
import { Card } from '@/components/ui/card';
import { FoodMenuCard } from '@/components/ui/food-menu-card';
import { FoodMenuList } from '@/components/ui/food-menu-list';
import Img from '@/components/ui/image';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';

export default function AboutUs() {
  return (
    <div>
      <div className="flex h-[30rem]">
        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <Title className="text-center text-3xl">our story</Title>
          <Text className="w-[28rem] text-center">
            Born from a passion for culinary excellence, our story began with a
            dream to redefine dining. Every dish tells a tale of creativity and
            craftsmanship, inviting you on a journey through flavor. From humble
            beginnings to a gastronomic haven, our story is a celebration of the
            extraordinary in every bite. Join us in creating memories, one
            extraordinary meal at a time.
          </Text>
        </div>
        <Img src="" className="flex-1" />
      </div>

      <div className="flex h-[30rem]">
        <Img src="" className="flex-1" />

        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <Title className="text-center text-3xl">our best service</Title>

          <ul className="w-[14rem] flex flex-wrap gap-12 text-center">
            <li className="flex flex-col items-center justify-center">
              <i>icon</i>
              <span>description</span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <i>icon</i>
              <span>description</span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <i>icon</i>
              <span>description</span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <i>icon</i>
              <span>description</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex h-[30rem]">
        <div className="flex-1 flex flex-col justify-center items-center">
          <Title className="text-center text-3xl">our food menu</Title>
          <ul>
            <li>
              <FoodMenuCard title="main course" menuList={<FoodMenuList />} />
            </li>
            <li>
              <FoodMenuCard title="main course" menuList={<FoodMenuList />} />
            </li>
            <li>
              <FoodMenuCard title="main course" menuList={<FoodMenuList />} />
            </li>
          </ul>
        </div>
        <Img src="" className="flex-1" />
      </div>

      <div className="flex h-[30rem]">
        <Img src="" className="flex-1" />
        <div className="flex-1 flex flex-col justify-center items-center">
          <Title>testimonials</Title>
          <Text>Lorem ipsum</Text>
          <Card.Root>
            <Card.Img src="" className="w-36 h-36 rounded-full" />
            <Card.Title title="" />
            <Card.Description description="" />
          </Card.Root>
        </div>
      </div>

      <div className="flex h-[30rem]">
        <div className="flex-1 flex flex-col justify-center items-center">
          <Title>book a table</Title>
          <BookTableForm />
        </div>
        <Img src="" className="flex-1" />
      </div>
    </div>
  );
}
