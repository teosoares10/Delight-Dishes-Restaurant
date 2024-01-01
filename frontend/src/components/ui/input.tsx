import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    { type = 'text', className, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <input
      ref={ref}
      className={
        (cn('bg-background border-white border-b placeholder:text-white'),
        className)
      }
      type={type}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
