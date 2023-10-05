import Dishes from '@/components/Dishes';
import Chef from '@/components/Chefs';
import RestaurantServices from '@/components/RestaurantServices';
import OurStory from '@/components/OurStory';
import Banner from '@/components/Banner';
import Posts from '@/components/Posts';

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
