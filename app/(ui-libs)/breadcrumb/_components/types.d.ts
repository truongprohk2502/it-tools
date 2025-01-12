export interface BreadcrumbProps {
  separator?: "slash" | "arrow";
  disabled?: boolean;
  hasCollapse?: boolean;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  items?: Array<{ label: string; value: string }>;
  onClick?: (val: string | null) => void;
}
