import { Timer } from '@phosphor-icons/react';
import { Card } from './card';
import Link from 'next/link';

export function LatestRecipeList() {
  return (
    <ul className="flex justify-between items-center">
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-[19rem] h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <div className="flex justify-between">
                <Card.Category category="sides" className="" />
                <div className="flex items-center gap-1">
                  <Timer size={20} />
                  <Card.Description description="30 minutes" />
                </div>
              </div>
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-[19rem] h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <div className="flex justify-between">
                <Card.Category category="sides" className="" />
                <div className="flex items-center gap-1">
                  <Timer size={20} />
                  <Card.Description description="30 minutes" />
                </div>
              </div>
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-[19rem] h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <div className="flex justify-between">
                <Card.Category category="sides" className="" />
                <div className="flex items-center gap-1">
                  <Timer size={20} />
                  <Card.Description description="30 minutes" />
                </div>
              </div>
            </div>
          </Card.Root>
        </Link>
      </li>
      <li>
        <Link href="">
          <Card.Root className="space-y-4 group">
            <Card.Img src="" className="w-[19rem] h-[14rem]" />
            <div className="px-4 pb-4 space-y-4">
              <Card.Title
                title="air fryer steak fries"
                className="text-left text-xl group-hover:underline"
              />
              <div className="flex justify-between">
                <Card.Category category="sides" className="" />
                <div className="flex items-center gap-1">
                  <Timer size={20} />
                  <Card.Description description="30 minutes" />
                </div>
              </div>
            </div>
          </Card.Root>
        </Link>
      </li>
    </ul>
  );
}
