export const breadcrumbVariantCode = `// breadcrumb.helpers.ts
import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva(
  [
    "cursor-pointer text-neutral-400 dark:text-neutral-500 data-[disabled=true]:cursor-default",
    "data-[last=false]:data-[disabled=true]:text-neutral-300 dark:data-[last=false]:data-[disabled=true]:text-neutral-600",
    "data-[last=true]:text-neutral-700 dark:data-[last=true]:text-neutral-300 data-[last=true]:font-semibold",
  ],
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export const separatorVariants = cva(
  "text-neutral-500 dark:text-neutral-300 data-[disabled=true]:text-neutral-400 dark:data-[disabled=true]:text-neutral-700",
  {
    variants: {
      size: {
        small: "text-base mx-2",
        medium: "text-lg mx-2",
        large: "text-2xl mx-4",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);
`;

export const breadcrumbComponentCode = `// breadcrumb.component.tsx
import { VariantProps } from "class-variance-authority";
import { breadcrumbVariants, separatorVariants } from "./breadcrumb.helpers";

interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants> {
  items: Array<{ label: string; value: string }>;
  separator?: "slash" | "arrow";
  disabled?: boolean;
  hasCollapse?: boolean;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  onClick?: (val: string | null) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "arrow",
  disabled,
  hasCollapse,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
  size,
  onClick,
}) => {
  const getItems = () => {
    if (!hasCollapse) return items;
    if (items.length < itemsBeforeCollapse + itemsAfterCollapse + 2)
      return items;
    return [
      ...items.slice(0, itemsBeforeCollapse),
      { label: null, value: null },
      ...items.slice(items.length - itemsAfterCollapse),
    ];
  };

  const renderItems = getItems();

  return (
    <div className="flex flex-wrap items-center">
      {renderItems.map((item, index) => (
        <div key={item.value} className="flex items-center">
          <p
            data-last={index === renderItems.length - 1}
            data-disabled={Boolean(disabled)}
            className={breadcrumbVariants({ size })}
            onClick={() => onClick && onClick(item.value)}
          >
            {item.label || "..."}
          </p>
          {index !== renderItems.length - 1 && (
            <p
              data-disabled={Boolean(disabled)}
              className={separatorVariants({ size })}
            >
              {separator === "arrow" ? ">" : "/"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
`;
