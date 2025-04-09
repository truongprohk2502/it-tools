import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackageOpenIcon } from "lucide-react";
import type { QueryExecResult } from "sql.js";

interface Props {
  queried: boolean;
  data: QueryExecResult | null;
}

const SqlResult: React.FC<Props> = ({ queried, data }) => {
  return (
    <div className="h-[16rem]">
      {queried ? (
        data ? (
          <ScrollArea>
            <Table withScrollable wrapperClassName="h-[16rem]">
              <TableHeader className="sticky top-0">
                <TableRow>
                  {data.columns.map((col) => (
                    <TableHead key={col}>{col}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.values.length ? (
                  data.values.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((col, colIndex) => (
                        <TableCell key={colIndex}>{col}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={data.columns.length}>
                      <div className="flex h-40 items-center justify-center">
                        <span>No data</span>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-neutral-600 dark:text-neutral-400">
            <div className="mt-4 flex justify-center rounded-md border border-neutral-400 px-4 py-2 text-center dark:border-neutral-700">
              <PackageOpenIcon className="mr-2 h-6 w-6" />
              <span>No row to display.</span>
            </div>
          </div>
        )
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center text-neutral-600 dark:text-neutral-400">
          <span className="text-2xl font-bold">SQL Practice</span>
          <div className="mt-4 max-w-[40rem] rounded-md border border-neutral-400 px-8 py-2 text-center dark:border-neutral-700">
            Query results are outputted here.
            <br />
            Click the run button to execute the query.
          </div>
        </div>
      )}
    </div>
  );
};

export default SqlResult;
