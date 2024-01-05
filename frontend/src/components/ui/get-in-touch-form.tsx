import { InputWithLabel } from './input-with-label';
import { TextareaInputWithLabel } from './textarea-input-with-label';

export function GetInTouchForm() {
  return (
    <form action="" className="space-y-4">
      <InputWithLabel
        label="Name"
        placeholder="Enter your name"
        className="space-y-1"
      />
      <InputWithLabel
        type="email"
        label="E-mail"
        placeholder="Enter your name"
        className="space-y-1"
      />
      <TextareaInputWithLabel
        label="Message"
        placeholder="Enter your message"
        className="flex flex-col space-y-1"
      />
      <button
        type="submit"
        className="text-orange-600 border border-orange-600 capitalize hover:bg-orange-600 hover:text-white px-4 py-2"
      >
        send message
      </button>
    </form>
  );
}
