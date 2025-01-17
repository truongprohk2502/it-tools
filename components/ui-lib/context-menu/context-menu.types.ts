type ActionItem = {
  type: "action";
  label: string;
  icon?: React.ReactNode;
  subLabel?: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

type DividerItem = {
  type: "divider";
};

type LabelItem = {
  type: "label";
  label: string;
};

type CheckboxItem = {
  type: "checkbox";
  label: string;
  subLabel?: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

type RadioItem = {
  type: "radio";
  name: string;
  label: string;
  subLabel?: React.ReactNode;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
};

export type ItemType =
  | ActionItem
  | DividerItem
  | LabelItem
  | CheckboxItem
  | RadioItem;

export interface ContextMenuProps {
  items: ItemType[];
  className?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
}
