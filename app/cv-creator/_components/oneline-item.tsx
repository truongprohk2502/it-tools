"use client";

import { useState } from "react";
import { I18N, Language } from "../constants";
import type { CvInformation, SingleItem } from "../types";
import EditableText from "./editable-text";
import HoveringAction, { type ValueType } from "./hovering-action";

interface Props {
  id: number;
  name: keyof CvInformation;
  language: Language;
  placeholder: string;
  value: CvInformation;
  onChange: (key: string, value: unknown) => void;
  onChangeList: (items: SingleItem[]) => void;
}

const OneLineItem: React.FC<Props> = ({
  id,
  name,
  language,
  placeholder,
  value,
  onChange,
  onChangeList,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-start gap-2">
        <div className="flex-auto">
          <EditableText
            id={`${name}[${id}].value`}
            placeholder={placeholder}
            className="min-w-40"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-shrink-0 items-center">
          <EditableText
            id={`${name}[${id}].year`}
            size="sm"
            align="right"
            placeholder={I18N[language].time}
            className={language === Language.EN ? "min-w-10" : "min-w-16"}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
      {isHovering && (
        <HoveringAction
          id={id}
          values={value[name] as ValueType[]}
          defaultValue={{
            id: Date.now(),
            value: "",
            year: "",
            order: 0,
          }}
          onChange={(values) => onChangeList(values as SingleItem[])}
        />
      )}
    </div>
  );
};

export default OneLineItem;
