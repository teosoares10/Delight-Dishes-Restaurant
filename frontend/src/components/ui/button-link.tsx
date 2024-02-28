import Link from 'next/link';
import { Button } from './button';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  shortDescription: React.ReactNode;
  href: string;
  className?: string;
  as?: string;
};

export default function ButtonLink({
  shortDescription,
  href,
  className,
  as
}: ButtonLinkProps) {
  return (
    <Button
      className={cn(
        'hover:bg-orange-600 hover:text-white text-orange-600 border border-orange-600 capitalize',
        className
      )}
    >
      <Link href={href} as={as}>
        {shortDescription}
      </Link>
    </Button>
  );
}
