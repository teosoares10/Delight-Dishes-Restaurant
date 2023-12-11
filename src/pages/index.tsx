import Posts from '@/components/ui/Post';
import RestaurantServices from '@/components/ui/RestaurantService';
import Hero from '@/components/ui/Hero';
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
        <Hero />
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

export async function getStaticProps() {
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
    props: { attributes },
    revalidate: 1
  };
}
