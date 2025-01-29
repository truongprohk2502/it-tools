"use client";

import { cn } from "@/lib/utils";
import orderBy from "lodash/orderBy";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ScrollArea } from "../scroll-area";
import Checkbox from "./checkbox";
import {
  borderVariants,
  headerVariants,
  hoverRowVariants,
  tableVariants,
  unHoverRowVariants,
} from "./table.helpers";
import type { TableProps } from "./table.types";

const Table: React.FC<TableProps> = ({
  keyField,
  header,
  data,
  stickyHeader,
  variant = "outline",
  selectionMode = "none",
  color = "primary",
  className,
  selections = [],
  onChangeSelections = () => {},
}) => {
  const [sortKey, setSortKey] = useState<{
    [key: string]: "asc" | "desc" | "none";
  }>({});

  const sortedData = useMemo(() => {
    const sortedKey = Object.keys(sortKey).reduce(
      (acc: { [key: string]: "asc" | "desc" }, key) => {
        if (sortKey[key] !== "none") acc[key] = sortKey[key];
        return acc;
      },
      {},
    );

    return Object.keys(sortedKey).length
      ? orderBy(data, Object.keys(sortedKey), Object.values(sortedKey))
      : data;
  }, [data, sortKey]);

  useEffect(() => {
    const sortKey: { [key: string]: "asc" | "desc" | "none" } = {};
    header.forEach((item) => {
      if (item.sorter) sortKey[item.key] = "none";
    });
    setSortKey(sortKey);
  }, [header]);

  const handleClickRow = (key: string) => {
    if (selectionMode === "none") return;

    if (selectionMode === "single") {
      onChangeSelections([key]);
    } else {
      if (selections.includes(key)) {
        onChangeSelections(selections.filter((item) => item !== key));
      } else {
        onChangeSelections([...selections, key]);
      }
    }
  };

  const handleClickAll = () => {
    if (selections.length === data.length) onChangeSelections([]);
    else onChangeSelections(data.map((item) => item[keyField] as string));
  };

  const handleSort = (key: string) => {
    if (sortKey[key] === "none") {
      setSortKey({ ...sortKey, [key]: "asc" });
    } else if (sortKey[key] === "asc") {
      setSortKey({ ...sortKey, [key]: "desc" });
    } else {
      setSortKey({ ...sortKey, [key]: "none" });
    }
  };

  return (
    <ScrollArea
      className={cn(
        "rounded-md",
        variant === "bordered" && ["border", borderVariants({ color })],
        className,
      )}
      wrapperClassname="rounded-md"
    >
      <table className={cn(tableVariants({ color }))}>
        <thead>
          <tr
            className={cn(headerVariants({ color }), {
              "sticky top-0": stickyHeader,
            })}
          >
            {selectionMode === "multiple" && (
              <th>
                <Checkbox
                  color={color}
                  type={
                    selections.length === data.length
                      ? "checked"
                      : selections.length
                        ? "indeterminate"
                        : "unchecked"
                  }
                  onClick={handleClickAll}
                />
              </th>
            )}
            {header.map((column) => (
              <th
                key={column.key}
                style={{ width: column.width || "auto" }}
                className={cn(
                  "group px-3 py-2 text-left",
                  variant === "bordered"
                    ? "first:rounded-tl-md last:rounded-tr-md"
                    : "first:rounded-l-md last:rounded-r-md",
                  { "cursor-pointer": column.sorter },
                )}
                onClick={() => column.sorter && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  <span className="select-none">{column.label}</span>
                  {column.sorter && (
                    <span
                      className={cn(
                        "invisible ml-1 group-hover:visible",
                        color === "light"
                          ? "text-neutral-700"
                          : "text-neutral-100",
                      )}
                    >
                      {sortKey[column.key] === "asc" ? (
                        <ChevronDownIcon className="h-4 w-4" />
                      ) : sortKey[column.key] === "desc" ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronsUpDownIcon className="h-4 w-4" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={cn(
            "text-sm before:block before:leading-[0.5rem] before:opacity-0 before:content-['\\\\200C']",
            color === "dark" ? "text-neutral-200" : "text-neutral-600",
          )}
        >
          {sortedData.map((item) => (
            <tr
              key={item[keyField] as string}
              className={cn(
                variant !== "outline" && [
                  "[&:not(:last-child)]:border-b",
                  borderVariants({ color }),
                ],
                selectionMode !== "none" && [
                  "cursor-default",
                  selections.includes(item[keyField] as string)
                    ? unHoverRowVariants({ color })
                    : hoverRowVariants({ color }),
                ],
              )}
              onClick={() => handleClickRow(item[keyField] as string)}
            >
              {selectionMode === "multiple" && (
                <th>
                  <Checkbox
                    color={color}
                    type={
                      selections.includes(item[keyField] as string)
                        ? "checked"
                        : "unchecked"
                    }
                  />
                </th>
              )}
              {header.map((column) => (
                <td
                  key={column.key}
                  className={cn("px-3 py-2 text-left", {
                    "first:rounded-l-md last:rounded-r-md":
                      variant === "outline" && selectionMode !== "multiple",
                  })}
                >
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  );
};

export default Table;
