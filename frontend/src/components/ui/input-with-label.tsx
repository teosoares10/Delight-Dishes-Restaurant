import { cn } from '@/lib/utils';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';

type InputWithLabelProps = {
  label: string;
  type?: string;
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
    <div className={cn('flex flex-col capitalize', className)}>
      <Label text={label} />
      <Input
        type={type}
        placeholder={placeholder}
        className="border border-slate-300 focus:outline-orange-600 p-1"
      />
    </div>
  );
}
