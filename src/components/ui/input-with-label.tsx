import { cn } from '@/lib/utils';
import Input from './FormInput';
import Label from './FormLabel';

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
