"use client";

import CheckboxInput from "@/components/shared/checkbox-input";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleHelp } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { EncriptionType } from "../../constants";

const formSchema = z.object({
  ssid: z.string({ required_error: "Please enter network name." }),
  password: z.string().optional(),
  encryption: z.string(),
  hidden: z.boolean(),
});

type Inputs = {
  ssid: string;
  password: string;
  encryption: EncriptionType;
  hidden: boolean;
};

interface Props {
  onChange: (val: string) => void;
}

const WifiForm: React.FC<Props> = ({ onChange }) => {
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ssid: "",
      password: "",
      encryption: EncriptionType.WPA,
      hidden: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { ssid, password, encryption, hidden } = data;
    const formatString = `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden.toString()};;`;
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
          name="ssid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Network name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="encryption"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="flex items-center">
                <span>Encryption</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp width={20} height={20} className="ml-2" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-neutral-700 text-xs font-medium text-white"
                    >
                      The type of security protocol on your network.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-8"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={EncriptionType.BLANK} />
                    </FormControl>
                    <FormLabel className="font-normal">None</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={EncriptionType.WPA} />
                    </FormControl>
                    <FormLabel className="font-normal">WPA/WPA2</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={EncriptionType.WEP} />
                    </FormControl>
                    <FormLabel className="font-normal">WEP</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hidden"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="flex items-center">
                <span>Is this a hidden Wifi network?</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp width={20} height={20} className="ml-2" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-neutral-700 text-xs font-medium text-white"
                    >
                      The type of security protocol on your network.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormControl>
                <CheckboxInput
                  label="Hidden"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
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

export default WifiForm;
