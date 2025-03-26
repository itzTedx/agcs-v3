"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { PRODUCT_QUERYResult } from "../../../sanity.types";
import { contactSchema } from "./contact-schema";
import { useFormStorage } from "./use-form-storage";

export function ContactForm({ data }: { data: PRODUCT_QUERYResult }) {
  const { updateFormData, formData } = useFormStorage();
  const message = `I'm interested in this product can we discuss more about it
  
Product: ${data?.title}
  `;
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: formData.name ?? "",
      email: formData.email ?? "",
      phone: formData.phone ?? "",
      company: formData.company ?? "",

      message: data ? message : "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    updateFormData(values);
    toast.success(JSON.stringify(values));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact No.</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+973 9876 5432"
                    type="text"
                    inputMode="numeric"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@company.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="field-sizing-content min-h-[9rem]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CardFooter className="px-0">
          <Button type="submit" className="w-full">
            Send
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
}
