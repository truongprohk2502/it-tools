export const scrollAreaComponentCode = `// scroll-area.tsx
import clsx from "clsx";
import debounce from "lodash/debounce";
import { forwardRef, useCallback, useEffect, useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClassname?: string;
}

const ScrollArea = forwardRef<HTMLDivElement, Props>(
  ({ className, wrapperClassname, children, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);
    const observer = useRef<ResizeObserver | null>(null);

    const thumbHeight = useRef<number>(20);
    const scrollStartPosition = useRef<number>(0);
    const initialScrollTop = useRef<number>(0);
    const isDragging = useRef<boolean>(false);
    const isHovering = useRef<boolean>(false);

    const handleResize = (ref: HTMLDivElement, trackSize: number) => {
      const { clientHeight, scrollHeight } = ref;
      thumbHeight.current = Math.max(
        (clientHeight / scrollHeight) * trackSize,
        20,
      );
      scrollThumbRef.current!.style.height = \`\${thumbHeight.current}px\`;
    };

    const handleTrackClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        const { clientY } = e;
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        const thumbOffset = thumbHeight.current / 2;
        const clickRatio =
          (clientY - trackTop - thumbOffset) /
          scrollTrackRef.current!.clientHeight;
        const scrollAmount = Math.floor(
          clickRatio * contentRef.current!.scrollHeight,
        );
        contentRef.current!.scrollTo({
          top: scrollAmount,
          behavior: "smooth",
        });
      },
      [],
    );

    const handleThumbMousedown = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      e.preventDefault();
      e.stopPropagation();

      scrollStartPosition.current = e.clientY;
      initialScrollTop.current = contentRef.current!.scrollTop;
      isDragging.current = true;
    };

    useEffect(() => {
      const handleThumbMouseup = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.current = false;
      };

      const handleThumbMousemove = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isDragging.current) return;

        const {
          scrollHeight: contentScrollHeight,
          offsetHeight: contentOffsetHeight,
        } = contentRef.current!;

        const deltaY =
          (e.clientY - scrollStartPosition.current) *
          (contentOffsetHeight / thumbHeight.current);
        const newScrollTop = Math.min(
          initialScrollTop.current + deltaY,
          contentScrollHeight - contentOffsetHeight,
        );

        contentRef.current!.scrollTop = newScrollTop;
      };

      document.addEventListener("mousemove", handleThumbMousemove);
      document.addEventListener("mouseup", handleThumbMouseup);
      document.addEventListener("mouseleave", handleThumbMouseup);

      return () => {
        document.removeEventListener("mousemove", handleThumbMousemove);
        document.removeEventListener("mouseup", handleThumbMouseup);
        document.removeEventListener("mouseleave", handleThumbMouseup);
      };
    }, []);

    useEffect(() => {
      const ref = contentRef.current!;
      const { clientHeight: trackSize } = scrollTrackRef.current!;

      handleResize(ref, trackSize);

      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });

      observer.current.observe(ref);

      return () => {
        observer.current?.unobserve(ref);
      };
    }, []);

    useEffect(() => {
      const ref = contentRef.current!;

      const handleThumbPosition = () => {
        const { scrollTop: contentTop, scrollHeight: contentHeight } =
          contentRef.current!;
        const { clientHeight: trackHeight } = scrollTrackRef.current!;
        let newTop = (+contentTop / +contentHeight) * trackHeight;
        newTop = Math.min(newTop, trackHeight - thumbHeight.current);
        const thumb = scrollThumbRef.current!;
        thumb.style.top = \`\${newTop}px\`;
      };

      ref.addEventListener("scroll", handleThumbPosition);

      return () => {
        ref.removeEventListener("scroll", handleThumbPosition);
      };
    }, []);

    useEffect(() => {
      const ref = contentRef.current!;

      const handleMouseLeaveDebounce = debounce(() => {
        if (isDragging.current || isHovering.current) return;
        scrollbarRef.current!.style.visibility = "hidden";
      }, 1000);

      const handleMouseEnter = () => {
        isHovering.current = true;
        const element = contentRef.current!;
        if (element.scrollHeight > element.offsetHeight)
          scrollbarRef.current!.style.visibility = "visible";
      };

      const handleMouseLeave = () => {
        isHovering.current = false;
      };

      ref.addEventListener("mouseleave", handleMouseLeaveDebounce);
      ref.addEventListener("mouseleave", handleMouseLeave);
      ref.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseup", handleMouseLeaveDebounce);
      document.addEventListener("mouseleave", handleMouseLeaveDebounce);

      return () => {
        ref.removeEventListener("mouseleave", handleMouseLeaveDebounce);
        ref.removeEventListener("mouseleave", handleMouseLeave);
        ref.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseup", handleMouseLeaveDebounce);
        document.removeEventListener("mouseleave", handleMouseLeaveDebounce);
      };
    }, []);

    return (
      <div
        ref={ref}
        className={clsx("relative h-full w-full", className)}
        {...props}
      >
        <div
          ref={contentRef}
          className={clsx(
            "h-full w-full overflow-auto scrollbar-hide",
            wrapperClassname,
          )}
        >
          {children}
        </div>
        <div
          ref={scrollbarRef}
          className="absolute inset-y-0 right-0 w-2 rounded-md"
        >
          <div
            ref={scrollTrackRef}
            className="absolute inset-0 rounded-md bg-neutral-200"
            onClick={handleTrackClick}
          />
          <div
            ref={scrollThumbRef}
            className="absolute inset-x-0 rounded-md bg-neutral-400"
            onMouseDown={handleThumbMousedown}
          />
        </div>
      </div>
    );
  },
);

ScrollArea.displayName = "ScrollArea";

export default ScrollArea;
`;

export const checkboxComponentCode = `// checkbox.tsx
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";
import { CheckIcon, MinusIcon } from "lucide-react";

const colorVariants = cva("", {
  variants: {
    color: {
      primary: "border-blue-500 bg-blue-500 text-white",
      secondary: "border-gray-300 bg-gray-300 text-neutral-700",
      success: "border-green-500 bg-green-500 text-white",
      danger: "border-red-500 bg-red-500 text-white",
      warning: "border-yellow-500 bg-yellow-500 text-white",
      info: "border-cyan-500 bg-cyan-500 text-white",
      light: "border-background bg-background text-foreground",
      dark: "border-neutral-900 bg-neutral-900 text-white",
    },
  },
});

type ColorVariant = VariantProps<typeof colorVariants>;

interface Props {
  color: ColorVariant["color"];
  type: "checked" | "indeterminate" | "unchecked";
  disabled?: boolean;
  onClick?: () => void;
}

const Checkbox: React.FC<Props> = ({ color, type, disabled, onClick }) => {
  return (
    <div
      className={clsx(
        "mx-2 flex h-5 w-5 select-none items-center justify-center rounded-md border border-neutral-300",
        type !== "unchecked" && colorVariants({ color }),
        { "cursor-pointer": !disabled },
      )}
      onClick={!disabled ? onClick : undefined}
    >
      {type === "checked" ? (
        <CheckIcon className="h-4 w-4" />
      ) : type === "indeterminate" ? (
        <MinusIcon className="h-4 w-4" />
      ) : null}
    </div>
  );
};

export default Checkbox;
`;

export const tableHelpersCode = `// table.helpers.ts
import { cva } from "class-variance-authority";

export const tableVariants = cva("w-full", {
  variants: {
    color: {
      primary: "bg-blue-100",
      secondary: "bg-gray-100",
      success: "bg-green-100",
      danger: "bg-red-100",
      warning: "bg-yellow-100",
      info: "bg-cyan-100",
      light: "bg-background",
      dark: "bg-neutral-700",
    },
  },
});

export const headerVariants = cva("", {
  variants: {
    color: {
      primary: "bg-blue-500 text-blue-100",
      secondary: "bg-gray-500 text-gray-100",
      success: "bg-green-500 text-green-100",
      danger: "bg-red-500 text-red-100",
      warning: "bg-yellow-500 text-yellow-100",
      info: "bg-cyan-500 text-cyan-100",
      light: "bg-background text-foreground",
      dark: "bg-neutral-900 text-white",
    },
  },
});

export const unHoverRowVariants = cva("", {
  variants: {
    color: {
      primary: "bg-blue-200 text-blue-700",
      secondary: "bg-gray-200 text-gray-700",
      success: "bg-green-200 text-green-700",
      danger: "bg-red-200 text-red-700",
      warning: "bg-yellow-200 text-yellow-700",
      info: "bg-cyan-200 text-cyan-700",
      light: "bg-neutral-100 text-foreground",
      dark: "bg-neutral-900 text-white",
    },
  },
});

export const hoverRowVariants = cva("rounded", {
  variants: {
    color: {
      primary: "hover:bg-blue-100",
      secondary: "hover:bg-gray-100",
      success: "hover:bg-green-100",
      danger: "hover:bg-red-100",
      warning: "hover:bg-yellow-100",
      info: "hover:bg-cyan-100",
      light: "hover:bg-neutral-100",
      dark: "hover:bg-neutral-500",
    },
  },
});

export const borderVariants = cva("", {
  variants: {
    color: {
      primary: "border-blue-300",
      secondary: "border-gray-300",
      success: "border-green-300",
      danger: "border-red-300",
      warning: "border-yellow-300",
      info: "border-cyan-300",
      light: "border-neutral-300",
      dark: "border-neutral-700",
    },
  },
});
`;

export const tableTypesCode = `// table.types.ts
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
`;

export const tableComponentCode = `// table.component.tsx
import clsx from "clsx";
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
      className={clsx(
        "rounded-md",
        variant === "bordered" && ["border", borderVariants({ color })],
        className,
      )}
      wrapperClassname="rounded-md"
    >
      <table className={clsx(tableVariants({ color }))}>
        <thead>
          <tr
            className={clsx(headerVariants({ color }), {
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
                className={clsx(
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
                      className={clsx(
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
          className={clsx(
            "text-sm before:block before:leading-[0.5rem] before:opacity-0 before:content-['\\\\200C']",
            color === "dark" ? "text-neutral-200" : "text-neutral-600",
          )}
        >
          {sortedData.map((item) => (
            <tr
              key={item[keyField] as string}
              className={clsx(
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
                  className={clsx("px-3 py-2 text-left", {
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
`;
