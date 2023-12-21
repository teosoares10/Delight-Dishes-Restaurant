import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/Title';

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
        'flex flex-col gap-8 justify-center items-center w-[20rem] h-[28rem] bg-white/90 px-4 py-14',
        className
      )}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-[10rem] h-[10rem] relative text-center">
          {img}
          <span className="flex justify-center items-center w-10 h-10 p-4 text-white bg-gray-600 absolute bottom-4 right-2 rounded-full">
            ${price}
          </span>
        </div>
        <Button asChild>
          <Link href={''}>
            <Title className="text-base hover:text-orange-600">{title}</Title>
          </Link>
        </Button>
      </div>

      <div className="mt-auto">
        <Button
          className="bg-orange-600 block text-white hover:bg-background hover:border hover:border-orange-500 hover:text-orange-500"
          variant={'link'}
          asChild
        >
          <Link href={''}>Order Now!</Link>
        </Button>
      </div>
    </div>
  );
}
