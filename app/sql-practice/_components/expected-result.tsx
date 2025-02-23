import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { QueryExecResult } from "sql.js";

interface Props {
  data: QueryExecResult;
}

const ExpectedResult: React.FC<Props> = ({ data }) => {
  return (
    <Table
      withScrollable
      wrapperClassName="h-[16rem] w-[18.4375rem] mt-4 border border-neutral-200 dark:border-neutral-800"
    >
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
  );
};

export default ExpectedResult;
