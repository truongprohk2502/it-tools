"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Tabs, type TabsProps } from "@/components/ui-lib/tabs";
import { useState } from "react";
import { tabsProperties } from "./constant";

const generateCode = (props: TabsProps) => `<Tabs
  variant="${props.variant}"
  radius="${props.radius}"
  size="${props.size}"
  disabled={${props.disabled}}
  tabs={[
    {
      title: "Photos",
    },
    {
      title: "Music",
    },
    {
      title: "Videos",
    },
    {
      title: "Disabled",
      disabled: true,
    },
  ]}
  selectedIndex={activeIndex}
  onChange={setActiveIndex}
/>
`;

export default function TabsPage() {
  const [tabsProps, setTabsProps] = useState<TabsProps>({
    variant: "solid",
    radius: "medium",
    size: "medium",
    tabs: [
      {
        title: "Photos",
      },
      {
        title: "Music",
      },
      {
        title: "Videos",
      },
      {
        title: "Disabled",
        disabled: true,
      },
    ],
    selectedIndex: 1,
    onChange: () => {},
  });

  const handleChangeTab = (selectedIndex: number) => {
    setTabsProps({ ...tabsProps, selectedIndex });
  };

  return (
    <div>
      <UIComponent title="Tabs" code={generateCode(tabsProps)}>
        <Tabs {...tabsProps} className="w-fit" onChange={handleChangeTab} />
      </UIComponent>
      <UIDocs<TabsProps>
        fields={tabsProperties}
        fieldState={tabsProps}
        onChange={setTabsProps}
      />
    </div>
  );
}
