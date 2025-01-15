"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  Breadcrumb,
  type BreadcrumbProps,
} from "@/components/ui-lib/breadcrumb";
import { useState } from "react";
import { breadcrumbProperties } from "./constant";

const generateCode = (props: BreadcrumbProps) => `<Breadcrumb
  separator="${props.separator}"
  items={[
    { label: "Home", value: "/home" },
    { label: "Music", value: "/music" },
    { label: "Genre", value: "/genre" },
    { label: "Album", value: "/album" },
    { label: "Song", value: "/song" },
  ]}
  itemsBeforeCollapse={${props.itemsBeforeCollapse}}
  itemsAfterCollapse={${props.itemsAfterCollapse}}
  hasCollapse={${props.hasCollapse}}
  disabled={${props.disabled}}
  onClick={handleClick}
/>
`;

export default function BreadcrumbPage() {
  const [breadcrumbProps, setBreadcrumbProps] = useState<BreadcrumbProps>({
    separator: "arrow",
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2,
    hasCollapse: true,
    disabled: false,
    items: [
      { label: "Home", value: "/home" },
      { label: "Music", value: "/music" },
      { label: "Genre", value: "/genre" },
      { label: "Album", value: "/album" },
      { label: "Song", value: "/song" },
    ],
  });

  return (
    <div>
      <UIComponent
        title="Breadcrumb"
        code={generateCode(breadcrumbProps)}
        hasNpmLink
      >
        <Breadcrumb {...breadcrumbProps} />
      </UIComponent>
      <UIDocs<BreadcrumbProps>
        fields={breadcrumbProperties}
        fieldState={breadcrumbProps}
        onChange={setBreadcrumbProps}
      />
    </div>
  );
}
