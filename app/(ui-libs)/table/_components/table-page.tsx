"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Table, type TableProps } from "@/components/ui-lib/table";
import { useEffect, useState } from "react";
import { tableProperties } from "./constant";

const generateCode = (props: TableProps) => `<Table
  variant="${props.variant}"
  color="${props.color}"
  selectionMode="${props.selectionMode}"
  keyField="${props.keyField}"
  stickyHeader={${props.stickyHeader}}
  selections={selectedIds}
  onChangeSelections={setSelectedIds}
  header={[
    { key: "name", label: "NAME", sorter: true },
    { key: "role", label: "ROLE", sorter: true },
    { key: "status", label: "STATUS" },
  ]}
  data={[
    { id: 1, name: "John Doe", role: "Developer", status: "Active" },
    { id: 2, name: "Mary Jane", role: "Designer", status: "Inactive" },
    { id: 3, name: "Bob Smith", role: "Manager", status: "Active" },
    { id: 4, name: "Bob Smith", role: "Supporter", status: "Active" },
    { id: 5, name: "Peter Parker", role: "CEO", status: "Active" },
    { id: 6, name: "Anna Frank", role: "Worker", status: "Active" },
    { id: 7, name: "Charlie Brown", role: "Secretary", status: "Active" },
    { id: 8, name: "Wendy White", role: "Secretary", status: "Active" },
    { id: 9, name: "Lionel Messi", role: "Secretary", status: "Active" },
  ]}
/>
`;

export default function TablePage() {
  const [tableProps, setTableProps] = useState<TableProps>({
    variant: "outline",
    color: "primary",
    stickyHeader: true,
    selectionMode: "multiple",
    keyField: "id",
    header: [
      { key: "name", label: "NAME", sorter: true },
      { key: "role", label: "ROLE", sorter: true },
      { key: "status", label: "STATUS" },
    ],
    data: [
      {
        id: 1,
        name: "John Doe",
        role: "Developer",
        status: "Active",
      },
      {
        id: 2,
        name: "Mary Jane",
        role: "Designer",
        status: "Inactive",
      },
      { id: 3, name: "Bob Smith", role: "Manager", status: "Active" },
      {
        id: 4,
        name: "Bob Smith",
        role: "Supporter",
        status: "Active",
      },
      { id: 5, name: "Peter Parker", role: "CEO", status: "Active" },
      { id: 6, name: "Anna Frank", role: "Worker", status: "Active" },
      {
        id: 7,
        name: "Charlie Brown",
        role: "Secretary",
        status: "Active",
      },
      {
        id: 8,
        name: "Wendy White",
        role: "Secretary",
        status: "Active",
      },
      {
        id: 9,
        name: "Lionel Messi",
        role: "Secretary",
        status: "Active",
      },
    ],
    selections: [],
    onChangeSelections: () => {},
  });

  useEffect(() => {
    setTableProps((prevProps) => ({ ...prevProps, selections: [] }));
  }, [tableProps.selectionMode]);

  const handleChangeSelections = (selections: string[]) => {
    setTableProps((prevProps) => ({ ...prevProps, selections }));
  };

  return (
    <div>
      <UIComponent title="Table" code={generateCode(tableProps)}>
        <Table
          {...tableProps}
          onChangeSelections={handleChangeSelections}
          className="h-[20rem]"
        />
      </UIComponent>
      <UIDocs<TableProps>
        fields={tableProperties}
        fieldState={tableProps}
        onChange={setTableProps}
      />
    </div>
  );
}
