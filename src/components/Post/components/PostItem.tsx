import { cn } from '@/lib/utils';
import Link from 'next/link';

type PostItem = {
  className?: string;
  img: JSX.Element;
  date: string;
  title: string;
  description?: string;
};

export default function PostItem({
  className,
  img,
  date,
  title,
  description
}: PostItem) {
  return (
    <div className={cn('space-y-4', className)}>
      {img}
      <div className="space-y-4">
        <span>{date}</span>
        <Link href="" className="block font-bold hover:text-orange-600">
          {title}
        </Link>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
