"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  SortableList,
  type SortableListProps,
} from "@/components/ui-lib/sortable-list";
import { useState } from "react";
import { sortableListProperties } from "./constant";

const generateCode = () => `<SortableList
  renderItem={item => item.name}
  onChange={console.log}
  data={[
    {
      "id": "1",
      "name": "John Doe"
    },
    {
      "id": "2",
      "name": "Jane Jolly"
    },
    {
      "id": "3",
      "name": "Bob Smith"
    },
    {
      "id": "4",
      "name": "Alice Branco"
    }
  ]}
/>
`;

export default function SortableListPage() {
  const [sortableListProps, setSortableListProps] = useState<SortableListProps>(
    {
      data: [
        {
          id: "1",
          name: "John Doe",
        },
        {
          id: "2",
          name: "Jane Jolly",
        },
        {
          id: "3",
          name: "Bob Smith",
        },
        {
          id: "4",
          name: "Alice Branco",
        },
      ],
      renderItem: (item) => item.name,
      onChange: console.log,
    },
  );

  return (
    <div>
      <UIComponent title="SortableList" code={generateCode()}>
        <SortableList {...sortableListProps} />
      </UIComponent>
      <UIDocs<SortableListProps>
        fields={sortableListProperties}
        fieldState={sortableListProps}
        onChange={setSortableListProps}
      />
    </div>
  );
}
