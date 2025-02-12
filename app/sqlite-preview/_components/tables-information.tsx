import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { KeyRoundIcon } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { TableInfo } from "../types";

interface Props {
  open: boolean;
  data: TableInfo[];
}

const TablesInformation: React.FC<Props> = ({ open, data }) => {
  return (
    <Collapsible open={open} className="mb-4">
      <CollapsibleContent>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {data.map((table) => (
              <div
                key={table.name}
                className="w-full rounded-md border border-blue-800 bg-blue-500"
              >
                <p className="px-2 py-1 text-lg font-semibold text-white">
                  {table.name}
                </p>
                <div className="p-1">
                  <div className="grid grid-cols-1 gap-1 rounded-md bg-white p-4 text-neutral-700 dark:bg-gray-700">
                    {table.columns.map((col) => (
                      <div key={col.name} className="flex">
                        <div className="w-6 flex-shrink-0">
                          {col.type.includes("PRIMARY KEY") && (
                            <KeyRoundIcon className="mt-1 h-4 w-4 text-black dark:text-white" />
                          )}
                        </div>
                        <div className="flex-auto">
                          <div className="font-semibold">
                            <span className="text-neutral-800 dark:text-neutral-200">
                              {col.name}
                            </span>
                            {col.type.includes("NOT NULL") && (
                              <span className="text-red-500"> *</span>
                            )}
                          </div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400">
                            {col.type.split(" ")[0]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TablesInformation;
