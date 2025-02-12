"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  disabledExportByQuery: boolean;
  onExportAll: () => void;
  onExportBySelectedTable: () => void;
  onExportByQuery: () => void;
}

const ExportButton: React.FC<Props> = ({
  disabledExportByQuery,
  onExportAll,
  onExportBySelectedTable,
  onExportByQuery,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Export to CSV</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side="bottom" align="end">
        <DropdownMenuItem onClick={onExportAll}>
          <span>All tables</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onExportBySelectedTable}>
          <span>Selected table</span>
        </DropdownMenuItem>
        {!disabledExportByQuery && (
          <DropdownMenuItem onClick={onExportByQuery}>
            <span>Query data</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportButton;
