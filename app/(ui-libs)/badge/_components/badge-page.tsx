"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Avatar } from "@/components/ui-lib/avatar";
import { Badge, type BadgeProps } from "@/components/ui-lib/badge";
import { useState } from "react";
import { badgeProperties } from "./constant";

const generateCode = (props: BadgeProps) => `<Badge
  title="${props.title}"
  shape="${props.shape}"
  size="${props.size}"
  color="${props.color}"
  showOutline={${props.showOutline}}
  hidden={${props.hidden}}
>
  <Avatar
    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    name="Jane"
    radius="small"
  />
</Badge>
`;

export default function BadgePage() {
  const [badgeProps, setBadgeProps] = useState<BadgeProps>({
    title: "7",
    shape: "square",
    size: "medium",
    color: "primary",
    showOutline: false,
    hidden: false,
    children: null,
  });

  return (
    <div>
      <UIComponent title="Badge" code={generateCode(badgeProps)} hasNpmLink>
        <Badge {...badgeProps}>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Jane"
            radius="small"
          />
        </Badge>
      </UIComponent>
      <UIDocs<BadgeProps>
        fields={badgeProperties}
        fieldState={badgeProps}
        onChange={setBadgeProps}
      />
    </div>
  );
}
