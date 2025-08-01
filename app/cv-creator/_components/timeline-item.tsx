"use client";

import { useState } from "react";
import { I18N, Language } from "../constants";
import type { CvInformation, Education, Experience } from "../types";
import EditableText from "./editable-text";
import HoveringAction from "./hovering-action";

interface Props {
  id: number;
  type: "experiences" | "educations";
  language: Language;
  value: CvInformation;
  onChange: (key: string, value: unknown) => void;
  onChangeList: (items: (Experience | Education)[]) => void;
}

const TimelineItem: React.FC<Props> = ({
  id,
  type,
  language,
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
            id={`${type}[${id}].${type === "experiences" ? "company" : "school"}`}
            placeholder={
              type === "experiences"
                ? I18N[language].company
                : I18N[language].school
            }
            className="min-w-40 font-bold"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-shrink-0 items-center">
          <EditableText
            id={`${type}[${id}].startDate`}
            size="sm"
            align="right"
            placeholder={I18N[language].start}
            className={language === Language.EN ? "min-w-12" : "min-w-16"}
            value={value}
            onChange={onChange}
          />
          <p className="mx-1">-</p>
          <EditableText
            id={`${type}[${id}].endDate`}
            size="sm"
            align="right"
            placeholder={I18N[language].end}
            className={language === Language.EN ? "min-w-10" : "min-w-16"}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
      <EditableText
        id={`${type}[${id}].${type === "experiences" ? "position" : "degree"}`}
        placeholder={
          type === "experiences"
            ? I18N[language].position
            : I18N[language].degree
        }
        className="font-bold"
        value={value}
        onChange={onChange}
      />
      <EditableText
        id={`${type}[${id}].description`}
        placeholder={
          type === "experiences"
            ? I18N[language].jobDescription
            : I18N[language].educationDescription
        }
        size="sm"
        value={value}
        onChange={onChange}
      />
      {isHovering && (
        <HoveringAction
          id={id}
          values={value[type]}
          defaultValue={{
            id: Date.now(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
            order: 0,
          }}
          onChange={(values) => onChangeList(values as Experience[])}
        />
      )}
    </div>
  );
};

export default TimelineItem;
