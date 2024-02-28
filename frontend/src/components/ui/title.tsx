import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

type TitleProps = JSX.IntrinsicElements['h1'] & {
  asChild?: boolean;
};

export default function Title({ children, className, asChild }: TitleProps) {
  const Comp = asChild ? Slot : 'h1';
  return (
    <Comp
      className={cn(
        ' text-center text-gray-700 font-bold capitalize',
        className
      )}
    >
      {children}
    </Comp>
  );
}
