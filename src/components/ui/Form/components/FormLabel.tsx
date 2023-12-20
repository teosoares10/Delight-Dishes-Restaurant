import { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ htmlFor, children, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}
