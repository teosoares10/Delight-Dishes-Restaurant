import { cn } from '@/lib/utils';

export default function InputError({
  className,
  error,
  id
}: {
  className?: string;
  error: string;
  id: string;
}) {
  return (
    <span id={id} className={cn('text-white', className)}>
      {error}
    </span>
  );
}
