"use client";

import { cn } from "@/lib/utils";
import { QR_FORMATS, QRFormatType } from "../constants";

interface Props {
  selectedType: QRFormatType;
  setSelectedType: React.Dispatch<React.SetStateAction<QRFormatType>>;
}

const QrFormSelection: React.FC<Props> = ({
  selectedType,
  setSelectedType,
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-t-md border-b border-neutral-400 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900 xl:grid-cols-4">
      {QR_FORMATS.map((item) => (
        <div
          key={item.id}
          className={cn(
            "flex cursor-pointer items-center border-b-2 px-1 py-1 text-sm font-bold",
            selectedType === item.id
              ? "border-neutral-700 text-neutral-700 dark:border-neutral-300 dark:text-neutral-300"
              : "border-neutral-400 text-neutral-400 dark:border-neutral-600 dark:text-neutral-600",
          )}
          onClick={() => setSelectedType(item.id)}
        >
          {<item.icon width={16} height={16} className="mr-2" />}
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default QrFormSelection;
