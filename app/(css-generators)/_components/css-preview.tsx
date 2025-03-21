"use client";

import { cn } from "@/lib/utils";

interface Props {
  wrapperClassName?: string;
  children: React.ReactNode;
}

const CssPreview: React.FC<Props> = ({ wrapperClassName, children }) => {
  return (
    <div>
      <p className="text-lg font-semibold">Preview</p>
      <div
        className={cn(
          "mt-2 h-60 w-full [&>*]:h-full [&>*]:w-full",
          wrapperClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CssPreview;
