"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { Color } from "../constants";
import type { CvInformation, Skill } from "../types";
import EditableText from "./editable-text";
import HoveringAction from "./hovering-action";

interface Props {
  id: number;
  placeholder: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "right";
  bgColor?: Color;
  value: CvInformation;
  onChange: (key: string, value: string | number) => void;
  onChangeList: (newSkills: Skill[]) => void;
}

const SkillItem: React.FC<Props> = ({
  id,
  placeholder,
  size,
  align,
  bgColor,
  value,
  onChange,
  onChangeList,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const currentSkill = useMemo(
    () => value.skills.find((skill) => skill.id === id),
    [id, value.skills],
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <EditableText
        id={`skills[${id}].value`}
        placeholder={placeholder}
        size={size}
        align={align}
        bgColor={bgColor}
        value={value}
        onChange={onChange}
      />
      <div className="mt-2 grid h-1.5 w-full grid-cols-5 bg-gray-300">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            onClick={() => onChange(`skills[${id}].level`, index + 1)}
            className={cn({
              "bg-gray-100": currentSkill && index < currentSkill.level,
            })}
          />
        ))}
      </div>
      {isHovering && (
        <HoveringAction
          id={id}
          values={value.skills}
          defaultValue={{
            id: Date.now(),
            value: "",
            level: 0,
            order: 0,
          }}
          onChange={(values) => onChangeList(values as Skill[])}
        />
      )}
    </div>
  );
};

export default SkillItem;
