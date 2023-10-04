import SocialMedia from '@/components/Icons/SocialMedia';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ChefItemProps = {
  className?: string;
  img: JSX.Element;
  name: string;
  role: string;
};

export default function ChefItem({
  className,
  img,
  name,
  role
}: ChefItemProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {img}
      <Button
        className="text-2xl px-0 font-bold capitalize hover:text-orange-600"
        asChild
      >
        <Link href="">{name}</Link>
      </Button>
      <span className="block capitalize">{role}</span>
      <SocialMedia />
    </div>
  );
}
