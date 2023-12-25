import { cn } from '@/lib/utils';

type TitleProps = {
  children: string;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={cn(
        ' text-center text-gray-700 font-bold capitalize',
        className
      )}
    >
      {children}
    </h1>
  );
}
