import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import bookTableFormSchema from '@/validation/book-table-form-schema';
import { forwardRef } from 'react';
import { InputWithLabel } from '@/components/ui/input-with-label';
import FormInputError from '@/components/ui/input-error';
import { NumberOfGuest } from './number-of-guest';

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
        className="w-[20rem] grid gap-4 justify-center items-center"
      >
        <div className="w-36 grid space-y-2 capitalize">
          <label htmlFor="nº of guest">
            nº of guest <span className="lowercase">(s)</span>{' '}
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

        <InputWithLabel
          label="time"
          type="time"
          placeholder="Enter your time"
          aria-describedby="time-errors"
          {...register('time')}
        />
        {errors.time ? (
          <FormInputError id="time-errors" error={`${errors.time.message}`} />
        ) : null}

        <InputWithLabel
          label="date"
          type="date"
          placeholder="Enter your date"
          aria-describedby="date-erros"
          {...register('date')}
        />
        {errors.date ? (
          <FormInputError id="date-errors" error={`${errors.date.message}`} />
        ) : null}

        <button
          type="submit"
          className="text-orange-600 border border-orange-600 capitalize hover:bg-orange-600 hover:text-white"
        >
          book a table
        </button>
      </form>
    </div>
  );
});

BookTableForm.displayName = 'BookTableForm';

export default BookTableForm;
