import { z } from 'zod';

const getInTouchformSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string()
});

export default getInTouchformSchema;
