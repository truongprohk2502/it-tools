import { VariantProps } from "class-variance-authority";
import { breadcrumbVariants, separatorVariants } from "./breadcrumb-helpers";

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
