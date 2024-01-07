import { cn } from '@/lib/utils';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { forwardRef } from 'react';

type InputWithLabelProps = {
  label: string;
  type?: string;
  className?: string;
  placeholder: string;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, type, className, placeholder }, ref) => {
    return (
      <div className={cn('flex flex-col capitalize', className)}>
        <Label text={label} />
        <Input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="border border-slate-300 focus:outline-orange-600 p-1"
        />
      </div>
    );
  }
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
