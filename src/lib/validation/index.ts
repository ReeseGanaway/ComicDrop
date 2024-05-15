import { z } from "zod"

export const SingupValidation = z.object({
    email: z.string().email(),
    username: z.string().min(1, {message: "Username cannot be blank"}).max(20),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
  })