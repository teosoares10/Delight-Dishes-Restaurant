import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DishList from './components/List';

export default function Dishes() {
  return (
    <div className="bg-yellow-800 py-24 px-12">
      <div>
        <div className="space-y-8">
          <h1 className="font-bold capitalize">most popular dishes</h1>
          <p></p>
        </div>
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
