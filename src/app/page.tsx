import Dishes from '@/components/Dish';
import Chef from '@/components/Chef';
import RestaurantServices from '@/components/RestaurantService';
import OurStory from '@/components/OurStory';
import Banner from '@/components/Banner';
import Posts from '@/components/Post';

export default function Home() {
  return (
    <main>
      <Banner />

      <OurStory />

      <RestaurantServices />

      <Dishes />

      <Chef />

      <Posts />
    </main>
  );
}
