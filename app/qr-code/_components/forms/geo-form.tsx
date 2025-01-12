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
  latitude: z.coerce.number({
    required_error: "Please enter latitude number.",
    invalid_type_error: "Latitude must be a number!",
  }),
  longitude: z.coerce.number({
    required_error: "Please enter longitude number.",
    invalid_type_error: "Longitude must be a number!",
  }),
});

type Inputs = {
  latitude: string | number;
  longitude: string | number;
};

interface Props {
  onChange: (val: string) => void;
}

const GeoForm: React.FC<Props> = ({ onChange }) => {
  const form = useForm<Inputs>({
    defaultValues: {
      longitude: "",
      latitude: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { latitude, longitude } = data;
    const formatString = `geo:${latitude},${longitude}`;
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
          name="latitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Latitude</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="longitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Longitude</FormLabel>
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

export default GeoForm;
