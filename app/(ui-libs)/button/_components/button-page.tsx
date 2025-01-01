"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { useState } from "react";
import Button from "./component";
import { buttonProperties } from "./constant";
import type { ButtonProps } from "./types";

const generateCode = (props: ButtonProps) => `<Button
  buttonColor="${props.buttonColor}"
  radius="${props.radius}"
  size="${props.size}"
  variant="${props.variant}"
  disabled={${props.disabled.toString()}}
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
      <UIComponent title="Button" code={generateCode(buttonProps)}>
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
