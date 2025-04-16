"use client";

import { Toggle } from "@/components/ui/toggle";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  pressed: boolean;
  onPressedChange: (checked: boolean) => void;
}

const ToolToggle: React.FC<Props> = ({
  children,
  disabled,
  pressed,
  onPressedChange,
}) => {
  return (
    <Toggle
      pressed={pressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
    >
      {children}
    </Toggle>
  );
};

export default ToolToggle;
