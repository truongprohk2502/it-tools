"use client";

import { ArrowDownIcon, ArrowUpIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useMemo } from "react";

export type ValueType = { id: number; order: number; [key: string]: any };

interface Props {
  id: number;
  values: ValueType[];
  defaultValue: ValueType;
  onChange: (values: ValueType[]) => void;
}

const HoveringAction: React.FC<Props> = ({
  id,
  values,
  defaultValue,
  onChange,
}) => {
  const currentValue = useMemo(
    () => values.find((item) => item.id === id),
    [id, values],
  );

  const handleAdd = () => {
    if (!currentValue) return;
    const order = currentValue.order + 1;
    const updatedValues = values.map((item) =>
      item.order >= order ? { ...item, order: item.order + 1 } : item,
    );
    updatedValues.push({ ...defaultValue, order });
    onChange(updatedValues);
  };

  const handleRemove = () => {
    if (!currentValue) return;
    const updatedValues = values
      .filter((item) => item.id !== id)
      .map((item) =>
        item.order > currentValue.order
          ? { ...item, order: item.order - 1 }
          : item,
      );
    onChange(updatedValues.length ? updatedValues : [defaultValue]);
  };

  const handleMoveUp = () => {
    if (!currentValue || currentValue.order === 0) return;
    const updatedValues = values.map((item) => {
      if (item.id === currentValue.id) {
        return { ...item, order: item.order - 1 };
      }
      if (item.order === currentValue.order - 1) {
        return { ...item, order: item.order + 1 };
      }
      return item;
    });
    onChange(updatedValues);
  };

  const handleMoveDown = () => {
    if (!currentValue || currentValue.order === values.length - 1) return;
    const updatedValues = values.map((item) => {
      if (item.id === currentValue.id) {
        return { ...item, order: item.order + 1 };
      }
      if (item.order === currentValue.order + 1) {
        return { ...item, order: item.order - 1 };
      }
      return item;
    });
    onChange(updatedValues);
  };

  const isTopMost = currentValue && currentValue.order === 0;
  const isBottomMost = currentValue && currentValue.order === values.length - 1;

  return (
    <div className="h-[2rem]] absolute -top-[1.8em] right-0 flex gap-1 rounded-md bg-gray-200 bg-opacity-70 px-1 py-0.5 text-white">
      {!isTopMost && (
        <div
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-gray-400"
          onClick={handleMoveUp}
        >
          <ArrowUpIcon width={14} height={14} />
        </div>
      )}
      {!isBottomMost && (
        <div
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-gray-400"
          onClick={handleMoveDown}
        >
          <ArrowDownIcon width={14} height={14} />
        </div>
      )}
      <div
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-red-400"
        onClick={handleRemove}
      >
        <TrashIcon width={14} height={14} />
      </div>
      <div
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-green-600"
        onClick={handleAdd}
      >
        <PlusIcon width={14} height={14} />
      </div>
    </div>
  );
};

export default HoveringAction;
