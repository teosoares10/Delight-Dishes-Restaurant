import { PostApiResponse } from '@/@types/type';
import { Card } from '@/components/ui/card';
// import Title from '@/components/ui/Typography/Title';
import Link from 'next/link';

export default function Blog({ data }: PostApiResponse) {
  const recentPost = data?.find((post) => {
    return post.id === 1;
  });

  return (
    <>
      <header>
        <Link href={``}>
          <Card.Root className="relative h-[30rem]">
            <Card.Img
              src={``}
              // src={`${recentPost?.attributes?.image}`}
              className="w-full h-full"
            />
            <div className="absolute z-10 left-16 bottom-16 w-[45rem] space-y-4">
              <Card.Category
                category={`${recentPost?.attributes?.category}`}
                className="text-orange-600 text-lg font-bold"
              />
              <Card.Title
                title={`${recentPost?.attributes?.title}`}
                className="text-left text-5xl text-white"
              />
              <Card.Description
                description={`${recentPost?.attributes.description}`}
                className="text-left text-white/90"
              />
            </div>
          </Card.Root>
        </Link>
      </header>

      <main>
        <ul className="flex flex-wrap gap-8 w-[74rem] mx-auto my-8">
          {data
            .filter((post) => {
              return post.id !== 1;
            })
            .map((post) => (
              <li key={post.id} className="w-64 group">
                <Link href={``}>
                  <Card.Root>
                    {/* <Card.Img src={post.attributes.image} /> */}
                    <Card.Img src={``} className="w-full h-40" />
                    <div className="mt-2 space-y-2">
                      <Card.Category
                        category={post.attributes.category}
                        className="text-orange-600"
                      />
                      <Card.Title
                        title={post.attributes.title}
                        className="text-left text-xl group-hover:underline"
                      />
                      <Card.Description
                        description={post.attributes.description}
                        className=""
                      />
                    </div>
                  </Card.Root>
                </Link>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?populate=*`
  );

  const data = await res.json();
  return {
    props: data
  };
}
