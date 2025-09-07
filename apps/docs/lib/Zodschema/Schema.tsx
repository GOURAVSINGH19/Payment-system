import { z } from 'zod';

export const signupSchema = z
    .object({
        email: z.string().email({ message: 'Invalid email address' }),
        password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
        confirmPassword: z.string(),
        name: z.string().min(2, { message: 'Name must be at least 2 characters' }).optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export type SignUpSchema = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

export type SigninSchema = z.infer<typeof signinSchema>;
