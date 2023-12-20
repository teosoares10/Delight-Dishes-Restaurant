import { cn } from '@/lib/utils';

export default function InputError({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={cn('text-white', className)}>{children}</span>;
}
