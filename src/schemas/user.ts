import { z } from 'zod';

export const UserCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserCreateInput = z.infer<typeof UserCreateSchema>;
