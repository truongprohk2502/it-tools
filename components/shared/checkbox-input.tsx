import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef, useId } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface Props
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string;
}

const CheckboxInput = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Props
>(({ id, label, ...props }, ref) => {
  const generateId = useId();

  return (
    <div className="flex w-full items-center">
      <Checkbox ref={ref} id={id || generateId} {...props} />
      <Label
        htmlFor={id || generateId}
        className="ml-2 text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  );
});

CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;
