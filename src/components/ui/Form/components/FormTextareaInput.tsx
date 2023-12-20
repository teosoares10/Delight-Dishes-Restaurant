import { TextareaHTMLAttributes } from 'react';

type TextareaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextareaInput({
  placeholder,
  id,
  ...props
}: TextareaInputProps) {
  return <textarea id={id} placeholder={placeholder} {...props}></textarea>;
}
