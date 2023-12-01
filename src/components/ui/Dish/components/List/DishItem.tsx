import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../../../ui/button';

type DishItemProps = {
  className?: string;
  img: JSX.Element;
  price: string;
  title: string;
};

export default function DishItem({
  className,
  img,
  price = '20',
  title
}: DishItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 justify-center items-center w-[20rem] h-[28rem] bg-black px-4 py-14',
        className
      )}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-[10rem] h-[10rem] relative text-center">
          {img}
          <span className="flex justify-center items-center w-10 h-10 p-4 bg-green-600 absolute bottom-4 right-2 rounded-full">
            ${price}
          </span>
        </div>
        <Button asChild>
          <Link href={''}>
            <h2 className="font-bold capitalize hover:text-orange-600">
              {title}
            </h2>
          </Link>
        </Button>
      </div>

      <div className="mt-auto">
        <Button className="bg-orange-600 block" variant={'link'} asChild>
          <Link href={''}>Order Now!</Link>
        </Button>
      </div>
    </div>
  );
}
