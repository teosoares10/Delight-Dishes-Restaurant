import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DishList from './components/List';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Dishes() {
  return (
    <div className="bg-yellow-800 py-36 px-12 space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold capitalize">most popular dishes</h1>
          <p className="w-[40rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            quaerat, placeat molestiae provident voluptas enim delectus nulla a?
            Laudantium odio possimus, a itaque nam in corporis doloribus quis
            sed nihil!
          </p>
        </div>
        <Button className="bg-orange-600 capitalize" variant="link" asChild>
          <Link href="">full menu</Link>
        </Button>
      </div>
      <div>
        <Tabs defaultValue="breakfasts">
          <div className="mb-8 border-b-4">
            <TabsList>
              <TabsTrigger value="breakfasts">breakfast</TabsTrigger>
              <TabsTrigger value="lunchs">lunchs</TabsTrigger>
              <TabsTrigger value="dinners">dinner</TabsTrigger>
              <TabsTrigger value="drinks">drinks</TabsTrigger>
              <TabsTrigger value="fastfoods">fastfood</TabsTrigger>
            </TabsList>
          </div>

          <div className="text-center">
            <TabsContent value="breakfasts">
              <div className="flex gap-4">
                <DishList category="breakfasts" />
              </div>
            </TabsContent>

            <TabsContent value="lunchs">
              <div className="flex gap-4">
                <DishList category="lunchs" />
              </div>
            </TabsContent>

            <TabsContent value="dinners">
              <div className="flex gap-4">
                <DishList category="dinners" />
              </div>
            </TabsContent>

            <TabsContent value="drinks">
              <div className="flex gap-4">
                <DishList category="drinks" />
              </div>
            </TabsContent>

            <TabsContent value="fastfoods">
              <div className="flex gap-4">
                <DishList category="fastfoods" />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
