import { contactSchema } from "../contact-schema";
import { ErrorResponse, SuccessResponse } from "../types";
import { rateLimit } from "./rate-limiter";

import DOMPurify from "isomorphic-dompurify";
import nodemailer from "nodemailer";

export async function sendEmail(
    formData: FormData
  ): Promise<SuccessResponse | ErrorResponse> {
    try {
      // Rate limiting check
      const rateLimitResult = await rateLimit();
      if (!rateLimitResult.success) {
        return {
          success: false,
          message: "Too many requests. Please try again later.",
        };
      }
  
      // Sanitize and validate inputs
      const rawData = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        message: String(formData.get("message") || ""),
      };
  
      const validation = contactSchema.safeParse(rawData);
      if (!validation.success) {
        return {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        };
      }
  
      const { name, email, message } = validation.data;
  
      // Sanitize HTML content
      const sanitizedMessage = DOMPurify.sanitize(message);
  
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const emailTemplate = {
        from: `${name} <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${DOMPurify.sanitize(name)}</p>
            <p><strong>Email:</strong> ${DOMPurify.sanitize(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${sanitizedMessage}</p>
          </div>
        `,
      };
  
      await transporter.sendMail(emailTemplate);
      return { success: true };
    } catch (error) {
      console.error("Email send error:", error);
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      };
    }
  }