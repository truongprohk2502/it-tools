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
  url: z
    .string({ required_error: "Please enter website url." })
    .refine(validator.isURL, "Please enter a valid website url."),
});

type Inputs = {
  url: string;
};

interface Props {
  onChange: (val: string) => void;
}

const UrlForm: React.FC<Props> = ({ onChange }) => {
  const form = useForm<Inputs>({
    defaultValues: {
      url: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { url } = data;
    onChange(url);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-20 mt-8 space-y-8"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
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

export default UrlForm;
