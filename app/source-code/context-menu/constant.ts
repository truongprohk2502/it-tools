export const contextMenuTypesCode = `// context-menu.types.ts
type ActionItem = {
  type: "action";
  label: string;
  icon?: React.ReactNode;
  subLabel?: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

type DividerItem = {
  type: "divider";
};

type LabelItem = {
  type: "label";
  label: string;
};

type CheckboxItem = {
  type: "checkbox";
  label: string;
  subLabel?: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

type RadioItem = {
  type: "radio";
  name: string;
  label: string;
  subLabel?: React.ReactNode;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
};

export type ItemType =
  | ActionItem
  | DividerItem
  | LabelItem
  | CheckboxItem
  | RadioItem;

export interface ContextMenuProps {
  items: ItemType[];
  className?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
}
`;

export const contextMenuUseClickAwayCode = `// use-click-away.ts
import { RefObject, useEffect } from "react";

const defaultEvents = ["mousedown", "touchstart"];
type DefaultEventType = "mousedown" | "touchstart";

const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const el = ref.current!;
      el && !el.contains(event.target as HTMLElement) && onClickAway(event);
    };

    for (const eventName of defaultEvents) {
      document.addEventListener(eventName as DefaultEventType, handler);
    }

    return () => {
      for (const eventName of defaultEvents) {
        document.removeEventListener(eventName as DefaultEventType, handler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickAway;
`;

export const contextMenuComponentCode = `// context-menu.component.tsx
import useClickAway from "@/hooks/use-click-away";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import type { ContextMenuProps, ItemType } from "./context-menu.types";

const ContextMenu: React.FC<ContextMenuProps> = ({
  items: initialItems,
  className,
  wrapperClassName,
  children,
}) => {
  const [items, setItems] = useState<ItemType[]>(initialItems);
  const [opening, setOpening] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuSize = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useClickAway(menuRef, () => setOpening(false));

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        menuSize.current = {
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        };
      });
    });
    observer.observe(menuRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (item: ItemType) => {
    if (item.type === "action") {
      item.onClick();
      setOpening(false);
    } else if (item.type === "radio") {
      const newItems = items.map((i) => {
        if (i.type === "radio" && i.name === item.name) {
          return { ...i, selected: i.label === item.label };
        }
        return i;
      });
      setItems(newItems);
      item.onSelect();
      setOpening(false);
    } else if (item.type === "checkbox") {
      const newItems = items.map((i) => {
        if (i.type === "checkbox" && i.label === item.label) {
          return { ...i, checked: !i.checked };
        }
        return i;
      });
      setItems(newItems);
      item.onChange(!item.checked);
      setOpening(false);
    }
  };

  const handleRightClickMouse = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const left = wrapperRef.current!.getBoundingClientRect().left;
    const top = wrapperRef.current!.getBoundingClientRect().top;

    const right = window.innerWidth - e.clientX;
    const bottom = window.innerHeight - e.clientY;

    const extra = 30;
    const extraLeft =
      right < menuSize.current.width + extra
        ? menuSize.current.width + extra - right
        : 0;
    const extraTop =
      bottom < menuSize.current.height + extra
        ? menuSize.current.height + extra - bottom
        : 0;

    menuRef.current!.style.left = \`\${e.clientX - left - extraLeft}px\`;
    menuRef.current!.style.top = \`\${e.clientY - top - extraTop}px\`;
    setOpening(true);
  };

  return (
    <div className={clsx("relative", className)}>
      <div
        ref={wrapperRef}
        onContextMenu={handleRightClickMouse}
        className={wrapperClassName}
      >
        {children}
      </div>
      <div
        ref={menuRef}
        className={clsx(
          "absolute z-10 min-w-60 max-w-72 rounded-md border border-neutral-200 bg-white py-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-800",
          { invisible: !opening },
        )}
      >
        {items.map((item, index) => (
          <Fragment key={index}>
            {item.type === "divider" ? (
              <div className="my-1 h-[1px] bg-neutral-200 dark:bg-neutral-700" />
            ) : item.type === "label" ? (
              <div className="mx-1 flex items-center rounded-md px-2 py-1">
                <div className="mr-2 flex h-full w-4 items-center justify-center"></div>
                <div className="text-md flex-auto font-bold text-neutral-800 dark:text-neutral-300">
                  {item.label}
                </div>
              </div>
            ) : (
              <div
                className={clsx("mx-1 flex items-center rounded-md px-2 py-1", {
                  "cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-500":
                    !item.disabled,
                })}
                onClick={() => !item.disabled && handleClick(item)}
              >
                <div className="mr-2 flex h-full w-4 items-center justify-center">
                  {item.type === "checkbox" && item.checked && (
                    <CheckIcon
                      width={16}
                      height={16}
                      className={
                        item.disabled
                          ? "text-neutral-300 dark:text-neutral-500"
                          : "text-neutral-700 dark:text-neutral-300"
                      }
                    />
                  )}
                  {item.type === "radio" && item.selected && (
                    <div
                      className={clsx(
                        "h-2 w-2 rounded-full",
                        item.disabled
                          ? "bg-neutral-300 dark:bg-neutral-500"
                          : "bg-neutral-700 dark:bg-neutral-300",
                      )}
                    />
                  )}
                  {item.type === "action" && item.icon && (
                    <span
                      className={
                        item.disabled
                          ? "text-neutral-300 dark:text-neutral-500"
                          : "text-neutral-700 dark:text-neutral-300"
                      }
                    >
                      {item.icon}
                    </span>
                  )}
                </div>
                <div
                  className={clsx(
                    "flex-auto text-sm font-medium",
                    item.disabled
                      ? "text-neutral-300 dark:text-neutral-500"
                      : "text-neutral-700 dark:text-neutral-300",
                  )}
                >
                  {item.label}
                </div>
                {item.subLabel && (
                  <div
                    className={clsx(
                      "text-xs",
                      item.disabled
                        ? "text-neutral-300 dark:text-neutral-500"
                        : "text-neutral-700 dark:text-neutral-300",
                    )}
                  >
                    {item.subLabel}
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContextMenu;
`;
