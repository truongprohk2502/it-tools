"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { useState } from "react";
import Breadcrumb from "./breadcrumb-component";
import { breadcrumbProperties } from "./constant";
import type { BreadcrumbProps } from "./types";

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
  });

  return (
    <div>
      <UIComponent title="Breadcrumb" code={generateCode(breadcrumbProps)}>
        <Breadcrumb
          {...breadcrumbProps}
          items={[
            { label: "Home", value: "/home" },
            { label: "Music", value: "/music" },
            { label: "Genre", value: "/genre" },
            { label: "Album", value: "/album" },
            { label: "Song", value: "/song" },
          ]}
        />
      </UIComponent>
      <UIDocs<BreadcrumbProps>
        fields={breadcrumbProperties}
        fieldState={breadcrumbProps}
        onChange={setBreadcrumbProps}
      />
    </div>
  );
}
