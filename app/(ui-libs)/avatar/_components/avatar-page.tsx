"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { useState } from "react";
import Avatar from "./avatar-component";
import { avatarProperties } from "./constant";
import type { AvatarProps } from "./types";

const generateCode = (props: AvatarProps) => `<Avatar
  name="${props.name}"
  src="${props.src}"
  size="${props.size}"
  radius="${props.radius}"
  bordered="${props.bordered}"
  randomFallbackColor="${props.randomFallbackColor}"
  disabled="${props.disabled}"
/>
`;

export default function AvatarPage() {
  const [avatarProps, setAvatarProps] = useState<AvatarProps>({
    name: "Jane",
    src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    size: "medium",
    radius: "full",
    bordered: false,
    randomFallbackColor: false,
    disabled: false,
  });

  return (
    <div>
      <UIComponent title="Avatar" code={generateCode(avatarProps)}>
        <Avatar {...avatarProps} />
      </UIComponent>
      <UIDocs<AvatarProps>
        fields={avatarProperties}
        fieldState={avatarProps}
        onChange={setAvatarProps}
      />
    </div>
  );
}
