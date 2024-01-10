import { cn } from '@/lib/utils';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return <p className={cn('', className)}>{children}</p>;
}
