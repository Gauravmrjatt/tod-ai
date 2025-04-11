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
    userType: z.enum(['parent', 'child']),
    parentId: z.string().optional()
}).refine(data =>
    !(data.userType === 'child' && !data.parentId), {
    message: "Parent ID is required for child accounts",
    path: ["parentId"]
});