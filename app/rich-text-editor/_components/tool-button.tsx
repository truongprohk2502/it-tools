"use client";

import { Button } from "@/components/ui/button";

interface Props {
  disabled: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const ToggleButton: React.FC<Props> = ({ disabled, children, onClick }) => {
  return (
    <Button variant="ghost" size="icon" disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ToggleButton;
