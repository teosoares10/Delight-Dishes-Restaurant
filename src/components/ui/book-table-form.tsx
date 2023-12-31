import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import formSchema from '@/validation/FormSchema';
import { Button } from '@/components/ui/button';
import { forwardRef } from 'react';
import { InputWithLabel } from '@/components/ui/input-with-label';
import FormInputError from '@/components/ui/input-error';
import { Option } from './option';

type FormProps = z.infer<typeof formSchema>;

const BookTableForm = forwardRef<HTMLFormElement, object>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ resolver: zodResolver(formSchema) });

  const handleOnSubmit: SubmitHandler<FormProps> = (data) => console.log(data);

  return (
    <div className="bg-white text-orange-500 px-16 py-12">
      <form
        ref={ref}
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-[20rem] grid gap-4 justify-center items-center"
      >
        <div className="w-36 grid space-y-2 capitalize">
          <label htmlFor="">
            nº of guest <span className="lowercase">(s)</span>{' '}
          </label>
          <select name="" id="" className="p-1 focus:outline-orange-600">
            <Option value="1 Person" />
            <Option value="2 Person" />
            <Option value="3 Person" />
          </select>
        </div>

        <InputWithLabel
          label="time"
          type="time"
          placeholder="Enter your time"
          {...register('time')}
        />
        {errors.time ? (
          <FormInputError error={`${errors.time.message}`} />
        ) : null}

        <InputWithLabel
          label="date"
          type="date"
          placeholder="Enter your date"
          {...register('date')}
        />
        {errors.date ? (
          <FormInputError error={`${errors.date.message}`} />
        ) : null}

        <Button className="text-orange-600 border border-orange-600 capitalize hover:bg-orange-600 hover:text-white">
          book a table
        </Button>
      </form>
    </div>
    //     <InputWithLabel
    //       label="fullname"
    //       placeholder="Enter your fullname"
    //       {...register('fullName')}
    //     />
    //     {errors.fullName && (
    //       <FormInputError>{errors.fullName.message}</FormInputError>
    //     )}

    //     <div className="flex gap-4 mt-4">
    //       <InputWithLabel
    //         label="email"
    //         type="mail"
    //         placeholder="Enter your e-mail"
    //         {...register('email')}
    //       />

    //       <InputWithLabel
    //         label="phone number"
    //         type="text"
    //         className="w-[16rem]"
    //         placeholder="Enter your phone number"
    //         {...register('phone')}
    //       />
    //     </div>
    //     {errors.email && (
    //       <FormInputError className="block">
    //         {errors.email.message}
    //       </FormInputError>
    //     )}
    //     {errors.phone && (
    //       <FormInputError className="block">
    //         {errors.phone.message}
    //       </FormInputError>
    //     )}

    //     <div className="flex items-center gap-4 mt-4">
    //       <InputWithLabel
    //         label="nº of guest"
    //         placeholder="Enter nº of guests"
    //         className="  placeholder:text-white"
    //         {...register('numbersOfGuests')}
    //       />

    //       <InputWithLabel
    //         label="date"
    //         type="date"
    //         placeholder="Enter date"
    //         {...register('date')}
    //       />

    //       <InputWithLabel
    //         label="time"
    //         type="time"
    //         placeholder="Enter time"
    //         {...register('time')}
    //       />
    //     </div>
    //     {errors.numbersOfGuests && (
    //       <FormInputError className="block">
    //         {errors.numbersOfGuests.message}
    //       </FormInputError>
    //     )}
    //     {errors.date && <FormInputError>{errors.date.message}</FormInputError>}
    //     {errors.time && <FormInputError>{errors.time.message}</FormInputError>}

    //     <TextareaInputWithLabel
    //       label="special requests"
    //       placeholder="Enter special requests"
    //       {...register('specialRequest')}
    //     />
    //     {errors.specialRequest && (
    //       <FormInputError>{errors.specialRequest.message}</FormInputError>
    //     )}

    //     <InputWithLabel
    //       label="allergies or dietary restrictions"
    //       placeholder="Enter your Allergies or Dietary Restrictions"
    //       {...register('allergiesOrDietaryRestrictions')}
    //     />
    //     {errors.allergiesOrDietaryRestrictions && (
    //       <FormInputError>
    //         {errors.allergiesOrDietaryRestrictions.message}
    //       </FormInputError>
    //     )}

    //     <InputWithLabel
    //       label="promo code"
    //       placeholder="Enter your Promo Code"
    //       {...register('promoCode')}
    //     />
    //     {errors.promoCode && (
    //       <FormInputError>{errors.promoCode.message}</FormInputError>
    //     )}

    //     <Button
    //       type="submit"
    //       className="w-24 bg-white text-orange-500 hover:text-white hover:border hover:border-white capitalize mt-4"
    //     >
    //       send
    //     </Button>
    //   </form>
    // </div>
  );
});

BookTableForm.displayName = 'BookTableForm';

export default BookTableForm;
