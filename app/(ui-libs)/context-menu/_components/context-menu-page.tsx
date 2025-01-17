"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  ContextMenu,
  type ContextMenuProps,
} from "@/components/ui-lib/context-menu";
import { ArrowBigLeft, ArrowBigRight, Printer } from "lucide-react";
import { useState } from "react";
import { contextMenuProperties } from "./constant";

const generateCode = () => `<ContextMenu
  items={[
    {
      label: 'Back',
      onClick: handleBack,
      subLabel: <ArrowBigLeftIcon />,
      type: 'action'
    },
    {
      disabled: true,
      label: 'Forward',
      onClick: handleForward,
      subLabel: <ArrowBigRightIcon />,
      type: 'action'
    },
    {
      icon: <PrinterIcon />,
      label: 'Print',
      onClick: handlePrint,
      type: 'action'
    },
    {
      type: 'divider'
    },
    {
      checked: true,
      label: 'Dark mode',
      onChange: changeDarkMode,
      type: 'checkbox'
    },
    {
      checked: false,
      label: 'Auto scroll',
      onChange: changeAutoScroll,
      type: 'checkbox'
    },
    {
      type: 'divider'
    },
    {
      label: 'People',
      type: 'label'
    },
    {
      type: 'divider'
    },
    {
      label: 'ReactJS',
      name: 'framework',
      onSelect: selectFramework,
      selected: true,
      type: 'radio'
    },
    {
      label: 'VueJS',
      name: 'framework',
      onSelect: selectFramework,
      selected: false,
      type: 'radio'
    }
  ]}
>
  <span>Right-click Context</span>
</ContextMenu>
`;

export default function ContextMenuPage() {
  const [contextMenuProps, setContextMenuProps] = useState<ContextMenuProps>({
    children: null,
    items: [
      {
        label: "Back",
        onClick: () => {},
        subLabel: <ArrowBigLeft height={14} width={14} />,
        type: "action",
      },
      {
        disabled: true,
        label: "Forward",
        onClick: () => {},
        subLabel: <ArrowBigRight height={14} width={14} />,
        type: "action",
      },
      {
        icon: <Printer height={14} width={14} />,
        label: "Print",
        onClick: () => {},
        type: "action",
      },
      {
        type: "divider",
      },
      {
        checked: true,
        label: "Dark mode",
        onChange: () => {},
        type: "checkbox",
      },
      {
        checked: false,
        label: "Auto scroll",
        onChange: () => {},
        type: "checkbox",
      },
      {
        type: "divider",
      },
      {
        label: "People",
        type: "label",
      },
      {
        type: "divider",
      },
      {
        label: "ReactJS",
        name: "framework",
        onSelect: () => {},
        selected: true,
        type: "radio",
      },
      {
        label: "VueJS",
        name: "framework",
        onSelect: () => {},
        selected: false,
        type: "radio",
      },
    ],
  });

  return (
    <div>
      <UIComponent title="ContextMenu" code={generateCode()}>
        <ContextMenu
          {...contextMenuProps}
          wrapperClassName="flex w-full h-96 items-center justify-center rounded-lg border border-dashed border-neutral-400 dark:border-neutral-600"
        >
          <span className="text-lg font-bold">Right-click Context</span>
        </ContextMenu>
      </UIComponent>
      <UIDocs<ContextMenuProps>
        fields={contextMenuProperties}
        fieldState={contextMenuProps}
        onChange={setContextMenuProps}
      />
    </div>
  );
}
