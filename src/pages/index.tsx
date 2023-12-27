import Service from '@/components/ui/service';
import Hero from '@/components/ui/hero';
import BookTable from '@/components/ui/book-table';
import Chef from '@/components/ui/chef';
import Dishes from '@/components/ui/dish';
import OurStory from '@/components/ui/our-story';
import Head from 'next/head';
import { ChefApiResponse, ChefAttributes } from '@/@types/type';
import OurPost from '@/components/ui/our-post';

export default function Home({ attributes }: ChefApiResponse) {
  return (
    <div>
      <Head>
        <title>Delight Dishes - Restaurant</title>
      </Head>
      <main>
        <Hero />
        <OurStory />
        <Service />
        <Dishes />
        <Chef attributes={attributes} />
        <BookTable />
        <OurPost />
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
