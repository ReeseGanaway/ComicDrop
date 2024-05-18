import { z } from "zod"

export const SingupValidation = z.object({
    email: z.string().email(),
    username: z.string().min(1, "Username cannot be blank").max(20, 'Username cannot exceed 20 characters'),
    password: z.string().min(8, "Password must be at least 8 characters")
  })