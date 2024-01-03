import { z } from 'zod';

const formSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phone: z.string(),
  numbersOfGuests: z.number().int().positive().max(50),
  date: z.coerce
    .date()
    .refine((date) => date >= new Date(), { message: 'Data inválida' }),
  time: z.string().refine(
    (time) => {
      const timeNow = new Date().getHours();

      if (timeNow <= Number.parseInt(time)) return true;
    },
    {
      message: 'Hora invalida'
    }
  ),
  specialRequest: z.string()
});

export default formSchema;
