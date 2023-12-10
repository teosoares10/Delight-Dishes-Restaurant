import Label from '../Label';
import TextareaInput from '../TextareaInput';

type TextareaInputWithLabel = {
  label: string;
  placeholder: string;
};

export default function TextareaInputWithLabel({
  label,
  placeholder
}: TextareaInputWithLabel) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={label} className="capitalize font-bold text-white">
        {label}
      </Label>
      <TextareaInput
        id={label}
        placeholder={placeholder}
        className="h-40 p-2 text-orange-500 placeholder:text-orange-500 mt-1 resize-none"
      />
    </div>
  );
}
