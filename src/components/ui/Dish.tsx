import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DishList from './DishList';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

export default function Dishes() {
  return (
    <div className="bg-orange-900 py-36 px-12 space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-8">
          <Title className="text-4xl text-white text-left">
            most popular dishes
          </Title>
          <Text className="w-[40rem] text-white/80">
            Discover our culinary stars at the &apos;Most Popular Dishes&apos;.
            Savor the essence of our kitchen&apos;s triumphs with a curated
            selection of crowd-favorites that have won hearts and palates alike.
            From signature dishes to time-tested classics, these culinary gems
            are sure to tantalize your taste buds and leave you craving for
            more. Join us in celebrating the essence of flavor that has made
            these dishes the talk of the town.
          </Text>
        </div>
        <Button
          className="bg-orange-600 hover:bg-transparent hover:border hover:border-white text-white capitalize px-12 rounded-full"
          variant="link"
          asChild
        >
          <Link href="/ourMenu" className="text-base py-4">
            full menu
          </Link>
        </Button>
      </div>
      <div>
        <Tabs defaultValue="breakfasts">
          <div className="mb-8 border-b border-orange-400 pb-0">
            <TabsList className="space-x-4 text-white pb-0">
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
