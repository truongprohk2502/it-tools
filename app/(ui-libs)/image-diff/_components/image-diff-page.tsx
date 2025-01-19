"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { ImageDiff, type ImageDiffProps } from "@/components/ui-lib/image-diff";
import { useState } from "react";
import { imageDiffProperties } from "./constant";

const generateCode = (props: ImageDiffProps) => `<ImageDiff
  imgSrcLeft="${props.imgSrcLeft}"
  imgSrcRight="${props.imgSrcRight}"
  resizePosition={${props.resizePosition}}
  size={{ width: 580, height: 320 }}
/>
`;

export default function ImageDiffPage() {
  const [imageDiffProps, setImageDiffProps] = useState<ImageDiffProps>({
    imgSrcLeft: "/image-diff/flower-blur.webp",
    imgSrcRight: "/image-diff/flower-sharp.webp",
    resizePosition: 50,
    size: { width: 580, height: 320 },
  });

  return (
    <div>
      <UIComponent title="ImageDiff" code={generateCode(imageDiffProps)}>
        <ImageDiff {...imageDiffProps} className="mx-auto" />
      </UIComponent>
      <UIDocs<ImageDiffProps>
        fields={imageDiffProperties}
        fieldState={imageDiffProps}
        onChange={setImageDiffProps}
      />
    </div>
  );
}
