"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  MobileMockup,
  type MobileMockupProps,
} from "@/components/ui-lib/mobile-mockup";
import { useState } from "react";
import { mobileMockupProperties } from "./constant";

const generateCode = (props: MobileMockupProps) => `<MobileMockup
  size="${props.size}"
  edgeSize="${props.edgeSize}"
  edgeRounded="${props.edgeRounded}"
  topVariant="${props.topVariant}"
  bottomVariant="${props.bottomVariant}"
  showBackground={${props.showBackground}}
>
  <h1 className="text-red-500">IT-Tools</h1>
</MobileMockup>
`;

export default function MobileMockupPage() {
  const [mobileMockupProps, setMobileMockup] = useState<MobileMockupProps>({
    size: "small",
    edgeSize: "small",
    edgeRounded: "small",
    topVariant: "pill",
    bottomVariant: "navigate_icon",
    showBackground: true,
  });

  return (
    <div>
      <UIComponent title="MobileMockup" code={generateCode(mobileMockupProps)}>
        <MobileMockup {...mobileMockupProps} className="mx-auto my-6">
          <h1 className="p-2 text-4xl text-red-500">IT-Tools</h1>
        </MobileMockup>
      </UIComponent>
      <UIDocs<MobileMockupProps>
        fields={mobileMockupProperties}
        fieldState={mobileMockupProps}
        onChange={setMobileMockup}
      />
    </div>
  );
}
