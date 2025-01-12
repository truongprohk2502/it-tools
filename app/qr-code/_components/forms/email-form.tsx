"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email." })
    .email("Please enter valid email."),
  subject: z.string().optional(),
  message: z.string().optional(),
});

type Inputs = {
  email: string;
  subject: string;
  message: string;
};

interface Props {
  onChange: (val: string) => void;
}

const EmailForm: React.FC<Props> = ({ onChange }) => {
  const form = useForm<Inputs>({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, subject, message } = data;
    const formatString = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    onChange(formatString);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-20 mt-8 space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Generate</Button>
      </form>
    </Form>
  );
};

export default EmailForm;
