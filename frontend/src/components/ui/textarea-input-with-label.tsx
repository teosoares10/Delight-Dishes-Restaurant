import { cn } from '@/lib/utils';
import Label from '@/components/ui/label';
import TextareaInput from '@/components/ui/textarea-input';
import { forwardRef } from 'react';

type InputWithLabelProps = {
  label: string;
  className?: string;
  placeholder: string;
};

const TextareaInputWithLabel = forwardRef<
  HTMLTextAreaElement,
  InputWithLabelProps
>(({ label, className, placeholder }, ref) => {
  return (
    <div className={cn('', className)}>
      <Label text={label} />
      <TextareaInput
        ref={ref}
        placeholder={placeholder}
        className="h-[10rem] border border-gray-400 p-1"
      />
    </div>
  );
});

TextareaInputWithLabel.displayName = 'TextareaInputWithLabel';

export default TextareaInputWithLabel;
