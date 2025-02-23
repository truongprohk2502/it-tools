"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { KeyRoundIcon, KeySquareIcon } from "lucide-react";
import type { DatabaseTable } from "../types";

interface Props {
  data: DatabaseTable;
}

const TableAccordion: React.FC<Props> = ({ data }) => {
  return (
    <AccordionItem
      value={data.tableName}
      className="border-b border-gray-200 dark:border-[#1c1c1c]"
    >
      <AccordionTrigger className="px-2">
        <span className="font-medium">{data.tableName}</span>
      </AccordionTrigger>
      <AccordionContent className="border-l-2 border-blue-500 px-2 py-2">
        <table className="w-full text-neutral-600 dark:text-neutral-400">
          <tbody>
            {data.columns.map((col) => (
              <tr key={col.name}>
                <td className="w-4">
                  {col.type.includes("FOREIGN KEY") ? (
                    <KeySquareIcon className="mt-1 h-2 w-2 text-orange-500" />
                  ) : col.type.includes("PRIMARY KEY") ? (
                    <KeyRoundIcon className="mt-1 h-2 w-2 text-black dark:text-white" />
                  ) : null}
                </td>
                <td className="text-sm">{col.name}</td>
                <td className="text-right text-xs">{col.type.split(" ")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AccordionContent>
    </AccordionItem>
  );
};

export default TableAccordion;
