"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  BrowserMockup,
  type BrowserMockupProps,
} from "@/components/ui-lib/browser-mockup";
import { useState } from "react";
import { browserMockupProperties } from "./constant";

const generateCode = (props: BrowserMockupProps) => `<BrowserMockup
  variant="${props.variant}"
  hasButtonColor={${props.hasButtonColor}}
  title="${props.title}"
  href="${props.href}"
>
  <h1 className="text-red-500">Hello world</h1>
</BrowserMockup>
`;

export default function BrowserMockupPage() {
  const [browserMockupProps, setBrowserMockup] = useState<BrowserMockupProps>({
    variant: "full",
    href: "https://google.com",
    title: "Google!",
    hasButtonColor: true,
  });

  return (
    <div>
      <UIComponent
        title="BrowserMockup"
        code={generateCode(browserMockupProps)}
        hasNpmLink
      >
        <BrowserMockup {...browserMockupProps}>
          <h1 className="p-2 text-red-500">Hello world</h1>
        </BrowserMockup>
      </UIComponent>
      <UIDocs<BrowserMockupProps>
        fields={browserMockupProperties}
        fieldState={browserMockupProps}
        onChange={setBrowserMockup}
      />
    </div>
  );
}
