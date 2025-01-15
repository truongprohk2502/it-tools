"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Button, type ButtonProps } from "@/components/ui-lib/button";
import { useState } from "react";
import { buttonProperties } from "./constant";

const generateCode = (props: ButtonProps) => `<Button
  buttonColor="${props.buttonColor}"
  radius="${props.radius}"
  size="${props.size}"
  variant="${props.variant}"
  disabled={${Boolean(props.disabled).toString()}}
  onClick={() => {}}
>
  ${props.children}
</Button>
`;

export default function ButtonPage() {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    buttonColor: "primary",
    radius: "large",
    size: "medium",
    variant: "solid",
    disabled: false,
    children: "Click me",
  });

  return (
    <div>
      <UIComponent title="Button" code={generateCode(buttonProps)} hasNpmLink>
        <Button {...buttonProps}>{buttonProps.children}</Button>
      </UIComponent>
      <UIDocs<ButtonProps>
        fields={buttonProperties}
        fieldState={buttonProps}
        onChange={setButtonProps}
      />
    </div>
  );
}
