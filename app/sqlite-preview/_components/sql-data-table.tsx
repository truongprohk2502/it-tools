"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { saveAs } from "file-saver";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { formatBytes } from "../helpers";
import type { Column, DatabaseRecord, RecordValue } from "../types";

interface Props {
  columns: Column[];
  data: DatabaseRecord[];
}

const RECORDS_PER_PAGE = 30;

const SqlDataTable: React.FC<Props> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(data.length / RECORDS_PER_PAGE);

  const goNext = () => setCurrentPage(currentPage + 1);
  const goPrev = () => setCurrentPage(currentPage - 1);

  return (
    <div className="relative mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.name}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="pr-8 font-bold">{col.name}</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-neutral-700 text-xs font-medium text-white"
                    >
                      {col.type}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            .slice(
              RECORDS_PER_PAGE * (currentPage - 1),
              RECORDS_PER_PAGE * currentPage,
            )
            .map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.entries(row).map(([key, record]) => {
                  const { type, value } = record as RecordValue;
                  return (
                    <TableCell key={key}>
                      {type === "null" ? (
                        <span className="italic">null</span>
                      ) : type === "string" ? (
                        <span>{value as string}</span>
                      ) : (
                        <a
                          href="javascript:void(0)"
                          className="text-blue-500 hover:underline"
                          onClick={() =>
                            saveAs(new Blob([value] as BlobPart[]), "blob")
                          }
                        >
                          {`Download (${formatBytes((value as BlobPart[]).length)})`}
                        </a>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <div className="sticky bottom-0 flex w-full items-center justify-center pb-4 pt-12">
          <div className="flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 shadow-md dark:border-neutral-600 dark:bg-neutral-800">
            <button
              disabled={currentPage <= 1}
              className="text-neutral-800 disabled:text-neutral-300 dark:text-neutral-300 dark:disabled:text-neutral-600"
              onClick={goPrev}
            >
              <CircleChevronLeft className="h-8 w-8" />
            </button>
            <span className="mx-4 text-lg font-bold text-blue-500">{`${currentPage} / ${totalPages}`}</span>
            <button
              disabled={currentPage >= totalPages}
              className="dark:disabled:text-neutral-60 text-neutral-800 disabled:text-neutral-300 dark:text-neutral-300"
              onClick={goNext}
            >
              <CircleChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SqlDataTable;
