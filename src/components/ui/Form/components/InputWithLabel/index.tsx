import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Input from '../Input';
import Label from '../Label';

type InputWithIconProps = {
  className?: string;
  label: string;
  type?: string;
  placeholder: string;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, label, type, placeholder }: InputWithIconProps, ref) => {
    return (
      <div
        className={cn('border-white', className)}
        data-testid="input-with-label"
      >
        <Label htmlFor={label} className="capitalize mb-2 font-bold text-white">
          {label}
        </Label>
        <Input
          id={label}
          ref={ref}
          className="w-full border p-2 placeholder:text-orange-500 text-orange-500"
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
InputWithLabel.displayName = 'InputWithIcon';
export default InputWithLabel;
