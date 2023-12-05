import Posts from '@/components/Post';
import RestaurantServices from '@/components/RestaurantService';
import Banner from '@/components/ui/Banner';
import BookTable from '@/components/ui/BookTable';
import Chef from '@/components/ui/Chef';
import Dishes from '@/components/ui/Dish';
import OurStory from '@/components/ui/OurStory';
import Head from 'next/head';
import { ChefApiResponse, ChefAttributes } from '@/@types/type';

export default function Home({ attributes }: ChefApiResponse) {
  return (
    <div>
      <Head>
        <title>Teodoro Eliesel Pedro - Restaurant</title>
      </Head>
      <main>
        <Banner />
        <OurStory />
        <RestaurantServices />
        <Dishes />
        <Chef attributes={attributes} />
        <BookTable />
        <Posts />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/chefs?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    }
  );

  const chefs = await res.json();
  const attributes: ChefAttributes[] = chefs.data.map(
    ({ attributes }: ChefApiResponse) => attributes
  );
  return {
    props: { attributes }
  };
}
