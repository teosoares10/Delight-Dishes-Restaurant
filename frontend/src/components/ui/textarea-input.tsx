import { Ref, TextareaHTMLAttributes, forwardRef } from 'react';

type TextareaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaInput = forwardRef(
  (
    { placeholder, id, ...props }: TextareaInputProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        ref={ref}
        id={id}
        placeholder={placeholder}
        {...props}
      ></textarea>
    );
  }
);

TextareaInput.displayName = 'TextareaInput';

export default TextareaInput;
