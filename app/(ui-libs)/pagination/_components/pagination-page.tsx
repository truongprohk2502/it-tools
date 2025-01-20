"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  Pagination,
  type PaginationProps,
} from "@/components/ui-lib/pagination";
import { useState } from "react";
import { paginationProperties } from "./constant";

const generateCode = (props: PaginationProps) => `<Pagination
  current={${props.current}}
  total={${props.total}}
  siblings={${props.siblings}}
  showControls={${props.showControls}}
  variant="${props.variant}"
  onChange={setCurrentPage}
/>
`;

export default function PaginationPage() {
  const [paginationProps, setPaginationProps] = useState<PaginationProps>({
    current: 1,
    total: 10,
    siblings: 1,
    showControls: true,
    variant: "solid",
    onChange: () => {},
  });

  const handleChange = (page: number) => {
    setPaginationProps({ ...paginationProps, current: page });
  };

  return (
    <div>
      <UIComponent title="Pagination" code={generateCode(paginationProps)}>
        <Pagination {...paginationProps} onChange={handleChange} />
      </UIComponent>
      <UIDocs<PaginationProps>
        fields={paginationProperties}
        fieldState={paginationProps}
        onChange={setPaginationProps}
      />
    </div>
  );
}
