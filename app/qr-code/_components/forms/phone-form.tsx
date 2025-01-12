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
import validator from "validator";
import { z } from "zod";

const formSchema = z.object({
  phone: z
    .string({ required_error: "Please enter your phone number." })
    .refine(validator.isMobilePhone, "Please enter a valid phone number."),
});

type Inputs = {
  phone: string;
};

interface Props {
  onChange: (val: string) => void;
}

const PhoneForm: React.FC<Props> = ({ onChange }) => {
  const form = useForm<Inputs>({
    defaultValues: {
      phone: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { phone } = data;
    const formatString = `tel:${phone.trim()};`;
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
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

export default PhoneForm;
