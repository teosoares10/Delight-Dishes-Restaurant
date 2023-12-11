import InputWithLabel from './components/InputWithLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import formSchema from '@/validation/FormSchema';
import { Button } from '@/components/ui/button';
import { forwardRef } from 'react';
import TextareaInputWithLabel from './components/TextareaInputWithLabel';
import InputError from './components/InputError';

type FormProps = z.infer<typeof formSchema>;

const Form = forwardRef<HTMLFormElement, object>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ resolver: zodResolver(formSchema) });

  const handleOnSubmit: SubmitHandler<FormProps> = (data) => console.log(data);

  return (
    <div className="bg-orange-500 text-white px-16 py-12">
      <form
        ref={ref}
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-[30rem] flex flex-col gap-4"
        data-testid="form"
      >
        <InputWithLabel
          label="fullname"
          placeholder="Enter your fullname"
          {...register('fullName')}
        />
        {errors.fullName && <InputError>{errors.fullName.message}</InputError>}

        <div className="flex gap-4 mt-4">
          <InputWithLabel
            label="email"
            type="mail"
            placeholder="Enter your e-mail"
            {...register('email')}
          />

          <InputWithLabel
            label="phone number"
            type="text"
            className="w-[16rem]"
            placeholder="Enter your phone number"
            {...register('phone')}
          />
        </div>
        {errors.email && (
          <InputError className="block">{errors.email.message}</InputError>
        )}
        {errors.phone && (
          <InputError className="block">{errors.phone.message}</InputError>
        )}

        <div className="flex items-center gap-4 mt-4">
          <InputWithLabel
            label="nº of guest"
            placeholder="Enter nº of guests"
            className="  placeholder:text-white"
            {...register('numbersOfGuests')}
          />

          <InputWithLabel
            label="date"
            type="date"
            placeholder="Enter date"
            {...register('date')}
          />

          <InputWithLabel
            label="time"
            type="time"
            placeholder="Enter time"
            {...register('time')}
          />
        </div>
        {errors.numbersOfGuests && (
          <InputError className="block">
            {errors.numbersOfGuests.message}
          </InputError>
        )}
        {errors.date && <InputError>{errors.date.message}</InputError>}
        {errors.time && <InputError>{errors.time.message}</InputError>}

        <TextareaInputWithLabel
          label="special requests"
          placeholder="Enter special requests"
          {...register('specialRequest')}
        />
        {errors.specialRequest && (
          <InputError>{errors.specialRequest.message}</InputError>
        )}

        <InputWithLabel
          label="allergies or dietary restrictions"
          placeholder="Enter your Allergies or Dietary Restrictions"
          {...register('allergiesOrDietaryRestrictions')}
        />
        {errors.allergiesOrDietaryRestrictions && (
          <InputError>
            {errors.allergiesOrDietaryRestrictions.message}
          </InputError>
        )}

        <InputWithLabel
          label="promo code"
          placeholder="Enter your Promo Code"
          {...register('promoCode')}
        />
        {errors.promoCode && (
          <InputError>{errors.promoCode.message}</InputError>
        )}

        <Button
          type="submit"
          className="w-24 bg-white text-orange-500 hover:text-white hover:border hover:border-white capitalize mt-4"
        >
          send
        </Button>
      </form>
    </div>
  );
});

Form.displayName = 'Form';

export default Form;
