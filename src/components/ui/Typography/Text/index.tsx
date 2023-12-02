import { cn } from '@/lib/utils';

type TextProps = {
  children: string;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return (
    <p className={cn('', className)} data-testid="text">
      {children}
    </p>
  );
}
