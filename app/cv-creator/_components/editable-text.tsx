"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import ContentEditable from "react-contenteditable";
import { ARRAY_KEY_REGEX, Color } from "../constants";
import type { CvInformation } from "../types";

interface Props {
  id: string;
  label?: string;
  placeholder: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "right";
  bgColor?: Color;
  value: CvInformation;
  onChange: (key: string, value: string) => void;
}

const EditableText: React.FC<Props> = ({
  id,
  label,
  placeholder,
  bgColor,
  className,
  size = "md",
  align = "left",
  value,
  onChange,
}) => {
  const innerRef = useRef<HTMLElement>(null);

  const getTextValue = () => {
    if (ARRAY_KEY_REGEX.test(id)) {
      const match = id.match(/(\w+)\[(\d+)\]\.(\w+)/)!;
      const key = match[1];
      const index = +match[2];
      const field = match[3];

      const items = value[key as keyof CvInformation] as Array<{ id: number }>;
      const item = items.find((item) => item.id === index);
      return item && field in item ? item[field as keyof typeof item] : "";
    }

    return value[id as keyof CvInformation] as string;
  };

  const text = getTextValue();

  const clickPlaceholder = () => {
    if (!innerRef.current) return;
    innerRef.current.focus();
  };

  return (
    <div>
      {label && (
        <p
          className={cn(
            "mb-1",
            {
              "text-[0.8em]": size === "sm",
              "text-[1em]": size === "md",
              "text-[1.5em]": size === "lg",
            },
            {
              "text-neutral-400": !bgColor,
              "text-neutral-300": bgColor,
            },
          )}
        >
          {label}
        </p>
      )}
      <div
        className={cn(
          "relative",
          {
            "text-[0.8em]": size === "sm",
            "text-[1em]": size === "md",
            "text-[1.5em]": size === "lg",
          },
          className,
        )}
      >
        <ContentEditable
          innerRef={innerRef as React.RefObject<HTMLElement>}
          html={text as string}
          onChange={(e) => onChange(id, e.target.value)}
          className={cn(
            "w-full break-all rounded-md border border-dashed px-2 py-1",
            {
              "text-left": align === "left",
              "text-right": align === "right",
            },
            {
              "border-white hover:border-neutral-500": !bgColor,
              "border-[#548ca8] text-white hover:border-white":
                bgColor === Color.BLUE,
              "border-[#00b14f] text-white hover:border-white":
                bgColor === Color.GREEN,
              "border-[#f58634] text-white hover:border-white":
                bgColor === Color.ORANGE,
              "border-[#e97878] text-white hover:border-white":
                bgColor === Color.RED,
            },
          )}
        />
        {typeof text === "string" &&
          (text.trim().length === 0 || text === "<br>") && (
            <p
              className={cn(
                "absolute top-0 px-2 py-1 italic",
                {
                  "left-0": align === "left",
                  "right-0": align === "right",
                },
                {
                  "text-neutral-400": !bgColor,
                  "text-neutral-300": bgColor,
                },
              )}
              onClick={clickPlaceholder}
            >
              {placeholder}
            </p>
          )}
      </div>
    </div>
  );
};

export default EditableText;
