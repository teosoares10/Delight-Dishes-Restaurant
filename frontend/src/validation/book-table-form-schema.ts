import { z } from 'zod';

const bookTableFormSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  phone: z.string(),
  number_of_guests: z.number().int().positive().max(50),
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
  special_request: z.string()
});

export default bookTableFormSchema;
