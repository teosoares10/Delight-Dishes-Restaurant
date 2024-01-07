import { z } from 'zod';
import InputWithLabel from './input-with-label';
import TextareaInputWithLabel from './textarea-input-with-label';
import getInTouchformSchema from '@/validation/get-in-touch-form-schema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputError from './input-error';
import { forwardRef } from 'react';

type GetInTouchFormProps = z.infer<typeof getInTouchformSchema>;

const GetInTouchForm = forwardRef<HTMLFormElement, object>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<GetInTouchFormProps>({
    resolver: zodResolver(getInTouchformSchema)
  });

  const handleOnSubmit: SubmitHandler<GetInTouchFormProps> = (data) =>
    console.log(data);

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(handleOnSubmit)}
      className="space-y-4"
    >
      <InputWithLabel
        label="Name"
        placeholder="Enter your name"
        className="space-y-1"
        aria-describedby="name-errors"
        {...register('name')}
      />
      {errors.name ? (
        <InputError id="name-errors" error={`${errors.name.message}`} />
      ) : null}

      <InputWithLabel
        type="email"
        label="E-mail"
        placeholder="Enter your name"
        className="space-y-1"
        aria-describedby="email-errors"
        {...register('name')}
      />
      {errors.email ? (
        <InputError id="email-errors" error={`${errors.email.message}`} />
      ) : null}

      <TextareaInputWithLabel
        label="Message"
        placeholder="Enter your message"
        className="flex flex-col space-y-1"
        {...register('message')}
      />
      <button
        type="submit"
        className="text-orange-600 border border-orange-600 capitalize hover:bg-orange-600 hover:text-white px-4 py-2"
      >
        send message
      </button>
    </form>
  );
});

GetInTouchForm.displayName = 'GetInTouchForm';

export default GetInTouchForm;
