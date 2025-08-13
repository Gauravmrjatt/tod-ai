import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/\d/, "Password must contain a number")
});

export const registerSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters long")
        .trim(),
    email: z.string().email("Please enter a valid email"),
    password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/\d/, "Password must contain a number"),
   
});
export const childAccountSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/\d/, "Password must contain a number"),
    name: z.string()
      .min(2, "Name must be at least 2 characters long"),
    dateOfBirth: z.string().optional().refine((val) => {
      if (!val) return true;
      return !isNaN(Date.parse(val));
    }, {
      message: "Invalid date format",
    }),
    gender: z.enum(["male", "female", "other"]).optional(),
    school: z.string().optional(),
    class: z.string().optional(),
    interests: z.array(z.string()).optional(),
  });