import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name cannot exceed 50 characters.",
    })
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, { message: "Email is required" })
    .trim(),
  phone: z
    .string()
    .regex(/^\+?[\d\s-()]{9,}$/, {
      message: "Please enter a valid phone number. Example: +1 (123) 456-7890",
    })
    .min(8, { message: "Phone number must be at least 8 digits" })
    .max(20, { message: "Phone number cannot exceed 20 characters" })
    .optional(),
  company: z
    .string()
    .max(100, { message: "Company name cannot exceed 100 characters" })
    .trim()
    .optional(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(1024, { message: "Message cannot exceed 1024 characters" })
    .trim(),
});
