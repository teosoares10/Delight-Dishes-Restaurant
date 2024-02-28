import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import bookTableFormSchema from '@/validation/book-table-form-schema';
import { forwardRef } from 'react';
import InputError from '@/components/ui/input-error';
import { NumberOfGuest } from './number-of-guest';
import Label from './label';
import Input from './input';

type BookTableFormProps = z.infer<typeof bookTableFormSchema>;

const BookTableForm = forwardRef<HTMLFormElement, object>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BookTableFormProps>({
    resolver: zodResolver(bookTableFormSchema)
  });

  const handleOnSubmit: SubmitHandler<BookTableFormProps> = (data) =>
    console.log(data);

  return (
    <div className="bg-white text-orange-500 px-16 py-12">
      <form
        ref={ref}
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-[30rem] grid gap-4 justify-center items-center"
      >
        <Label text="fullname" />
        <Input
          placeholder="Enter your fullname"
          aria-describedby="fullname-errors"
          {...register('fullname')}
        />
        {errors.fullname ? (
          <InputError
            id="fullname-errors"
            error={`${errors.fullname.message}`}
          />
        ) : null}

        <Label text="e-mail" />
        <Input
          type="email"
          placeholder="Enter your e-mail"
          aria-describedby="email-errors"
          {...register('email')}
        />
        {errors.email ? (
          <InputError id="email-errors" error={`${errors.email.message}`} />
        ) : null}

        <div className="flex gap-4 capitalize">
          <div className="grid">
            <label htmlFor="nº of guest">
              nº of guest <span className="lowercase">(s)</span>
            </label>
            <select
              name="nº of guest"
              id="nº of guest"
              className="p-1 focus:outline-orange-600"
            >
              <NumberOfGuest value="1 Person" />
              <NumberOfGuest value="2 Person" />
              <NumberOfGuest value="3 Person" />
            </select>
          </div>

          <Label text="time" />
          <Input
            type="time"
            placeholder="Enter your time"
            aria-describedby="time-errors"
            {...register('time')}
          />

          <Label text="date" />
          <Input
            type="date"
            placeholder="Enter your date"
            aria-describedby="date-erros"
            {...register('date')}
          />
        </div>

        <div className="flex ml-auto">
          {errors.time ? (
            <InputError
              id="time-errors"
              className="pr-[2.1rem]"
              error={`${errors.time.message}`}
            />
          ) : null}

          {errors.date ? (
            <InputError
              id="date-errors"
              className="pr-16"
              error={`${errors.date.message}`}
            />
          ) : null}
        </div>

        <button
          type="submit"
          className="mx-auto mt-4 py-2 px-4 text-orange-600 border border-orange-600 capitalize hover:bg-orange-600 hover:text-white"
        >
          book a table
        </button>
      </form>
    </div>
  );
});

BookTableForm.displayName = 'BookTableForm';

export default BookTableForm;
