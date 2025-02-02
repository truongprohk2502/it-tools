import { cn } from "@/lib/utils";
import { GripIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface DataType {
  id: string;
  [key: string]: any;
}

export interface SortableListProps {
  className?: string;
  data: DataType[];
  renderItem: (item: DataType) => React.ReactNode;
  onChange?: (orderedIds: string[]) => void;
}

const SortableList: React.FC<SortableListProps> = ({
  data,
  className,
  renderItem,
  onChange,
}) => {
  const sortableListRef = useRef<HTMLUListElement>(null);
  const orderedIds = useRef<string[]>(data.map((item) => item.id));

  useEffect(() => {
    const sortableList = sortableListRef.current!;
    const items = sortableList.querySelectorAll("li");

    const handleDragStart = (item: HTMLLIElement) => {
      setTimeout(() => {
        item.classList.add("dragging");
        const child = item.querySelector("div")!;
        child.style.opacity = "0";
      }, 0);
    };

    const handleDragEnd = (item: HTMLLIElement) => {
      item.classList.remove("dragging");
      const child = item.querySelector("div")!;
      child.style.opacity = "1";
    };

    items.forEach((item) => {
      item.ondragstart = () => handleDragStart(item);
      item.ondragend = () => handleDragEnd(item);
    });

    return () => {
      items.forEach((item) => {
        item.ondragstart = null;
        item.ondragend = null;
      });
    };
  }, []);

  useEffect(() => {
    const sortableList = sortableListRef.current!;

    const initSortableList = (e: DragEvent) => {
      e.preventDefault();

      const listItems = Array.from(sortableList.querySelectorAll("li"));
      const orderedList = listItems
        .map((item) => {
          const id = item.getAttribute("data-id") as string;
          return id;
        })
        .filter((item) => item !== undefined);

      const draggingItem = sortableList.querySelector(".dragging");

      if (!draggingItem) return;

      const siblings = Array.from(
        sortableList.querySelectorAll("li:not(.dragging)"),
      );

      const nextSibling = siblings.find((sibling) => {
        const rect = sibling.getBoundingClientRect();
        return e.clientY <= rect.top + rect.height / 2;
      });

      sortableList.insertBefore(draggingItem, nextSibling || null);

      if (orderedIds.current.join(",") !== orderedList.join(",")) {
        orderedIds.current = orderedList;
        onChange?.(orderedList);
      }
    };

    const preventDragEnter = (e: DragEvent) => {
      e.preventDefault();
    };

    sortableList.addEventListener("dragover", initSortableList);
    sortableList.addEventListener("dragenter", preventDragEnter);

    return () => {
      sortableList.removeEventListener("dragover", initSortableList);
      sortableList.removeEventListener("dragenter", preventDragEnter);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul
      ref={sortableListRef}
      className={cn("grid grid-cols-1 gap-3", className)}
    >
      {data.map((item) => (
        <li
          key={item.id}
          data-id={item.id}
          draggable
          className="flex cursor-move list-none items-center justify-between rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-600 dark:bg-neutral-600"
        >
          <div className="flex w-full items-center">
            <div className="mr-2 flex-auto">{renderItem(item)}</div>
            <GripIcon width={16} height={16} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SortableList;
