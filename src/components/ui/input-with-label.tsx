import { cn } from 'src/lib/utils';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';

type InputWithLabelProps = {
  label: string;
  type: string;
  className?: string;
  placeholder: string;
};

export function InputWithLabel({
  label,
  type,
  className,
  placeholder
}: InputWithLabelProps) {
  return (
    <div className={cn('', className)}>
      <Label text={label} />
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
