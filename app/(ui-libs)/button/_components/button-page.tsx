"use client";

import UIComponent from "@/components/ui-libs/ui-component";
import UIDocs from "@/components/ui-libs/ui-docs";
import Head from "next/head";
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
    <>
      <Head>
        <title>UI Button - IT Tools</title>
        <meta
          name="description"
          content="IT Tools - Button component with ReactJS and TailwindCSS"
        />
      </Head>
      <div className="mx-auto max-w-[64rem]">
        <UIComponent title="Button" code={generateCode(buttonProps)}>
          <Button {...buttonProps}>{buttonProps.children}</Button>
        </UIComponent>
        <UIDocs<ButtonProps>
          fields={buttonProperties}
          fieldState={buttonProps}
          onChange={setButtonProps}
        />
      </div>
    </>
  );
}
