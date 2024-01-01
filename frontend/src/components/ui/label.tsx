import { cn } from '@/lib/utils';

type LabelProps = {
  text: string;
  className?: string;
};

export default function Label({ text, className }: LabelProps) {
  return (
    <label htmlFor={text} className={cn('', className)}>
      {text}
    </label>
  );
}
