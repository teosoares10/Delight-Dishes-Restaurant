import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function OurPostList() {
  return (
    <ul className="flex justify-center gap-2 flex-wrap">
      <li>
        <Link href={``}>
          <Card.Root className="relative w-[70rem] h-[15rem]">
            <Card.Img
              src={``}
              // src={`${recentPost?.attributes?.image}`}
              className="w-full h-full"
            />
            <div className="absolute z-10 left-8 bottom-8 w-[15rem] space-y-2">
              <Card.Category
                category="desserts"
                className="text-orange-600 text-lg font-bold"
              />
              <Card.Title
                title="Make something huge"
                className="text-left text-xl text-white"
              />
              <Card.Description
                description="Lorem ipsom is incredible thing"
                className="text-left text-white/90"
              />
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href={``}>
          <Card.Root className="relative w-[35rem] h-[10rem]">
            <Card.Img
              src={``}
              // src={`${recentPost?.attributes?.image}`}
              className="w-full h-full"
            />
            <div className="absolute z-10 left-8 bottom-8 w-[15rem] space-y-2">
              <Card.Category
                category="desserts"
                className="text-orange-600 text-lg font-bold"
              />
              <Card.Title
                title="Make something huge"
                className="text-left text-xl text-white"
              />
              <Card.Description
                description="Lorem ipsom is incredible thing"
                className="text-left text-white/90"
              />
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href={``}>
          <Card.Root className="relative w-[35rem] h-[10rem]">
            <Card.Img
              src={``}
              // src={`${recentPost?.attributes?.image}`}
              className="w-full h-full"
            />
            <div className="absolute z-10 left-8 bottom-8 w-[15rem] space-y-2">
              <Card.Category
                category="desserts"
                className="text-orange-600 text-lg font-bold"
              />
              <Card.Title
                title="Make something huge"
                className="text-left text-xl text-white"
              />
              <Card.Description
                description="Lorem ipsom is incredible thing"
                className="text-left text-white/90"
              />
            </div>
          </Card.Root>
        </Link>
      </li>
    </ul>
  );
}
