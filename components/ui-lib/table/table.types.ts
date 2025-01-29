import type { VariantProps } from "class-variance-authority";
import { tableVariants } from "./table.helpers";

type ColorVariant = VariantProps<typeof tableVariants>;

export interface TableColumn {
  key: string;
  label: string;
  width?: string | number;
  sorter?: boolean;
}

interface TableData {
  [key: string]: React.ReactNode;
}

type SelectionProps =
  | {
      selectionMode?: "single" | "multiple";
      selections: string[];
      onChangeSelections: (selections: string[]) => void;
    }
  | {
      selectionMode?: "none";
      selections?: string[];
      onChangeSelections?: (selections: string[]) => void;
    };

export type TableProps = {
  keyField: string;
  header: TableColumn[];
  data: TableData[];
  stickyHeader?: boolean;
  variant?: "outline" | "underline" | "bordered";
  color?: ColorVariant["color"];
  className?: string;
} & SelectionProps;
