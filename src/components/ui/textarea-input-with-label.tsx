import { cn } from '@/lib/utils';
import Label from '@/components/ui/label';
import TextareaInput from '@/components/ui/textarea-input';

type InputWithLabelProps = {
  label: string;
  className?: string;
  placeholder: string;
};

export function TextareaInputWithLabel({
  label,
  className,
  placeholder
}: InputWithLabelProps) {
  return (
    <div className={cn('', className)}>
      <Label text={label} />
      <TextareaInput placeholder={placeholder} />
    </div>
  );
}
