"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Skeleton, type SkeletonProps } from "@/components/ui-lib/skeleton";
import { useState } from "react";
import { skeletonProperties } from "./constant";

const generateCode = (props: SkeletonProps) => `<Skeleton
  shape="${props.shape}"
  width="${props.width}"
  height="${props.height}"
/>
`;

export default function SkeletonPage() {
  const [skeletonProps, setSkeletonProps] = useState<SkeletonProps>({
    shape: "square",
    width: "20rem",
    height: "20rem",
  });

  return (
    <div>
      <UIComponent title="Skeleton" code={generateCode(skeletonProps)}>
        <Skeleton {...skeletonProps} className="mx-auto my-6" />
      </UIComponent>
      <UIDocs<SkeletonProps>
        fields={skeletonProperties}
        fieldState={skeletonProps}
        onChange={setSkeletonProps}
      />
    </div>
  );
}
