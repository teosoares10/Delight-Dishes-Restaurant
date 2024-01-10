import Link from 'next/link';
import { Card } from './card';

export function OtherRecipeList() {
  return (
    <ul className="space-y-8">
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-full h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <Card.Category category="sides" className="" />
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-full h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <Card.Category category="sides" className="" />
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-full h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <Card.Category category="sides" className="" />
            </div>
          </Card.Root>
        </Link>
      </li>
    </ul>
  );
}
