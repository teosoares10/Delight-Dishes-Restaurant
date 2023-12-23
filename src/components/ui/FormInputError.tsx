import { cn } from '@/lib/utils';

export default function InputError({
  className,
  error
}: {
  className?: string;
  error: string;
}) {
  return <span className={cn('text-white', className)}>{error}</span>;
}
