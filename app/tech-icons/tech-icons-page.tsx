"use client";

import IconListIcon from "@/assets/icons/icon-list.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useState } from "react";
import IconPreview from "./_components/icon-preview";
import SearchIconInput from "./_components/search-icon-input";
import TechIcon from "./_components/tech-icon";
import { TECH_ICONS } from "./constants";
import type { TechIconType } from "./types";

const TechIconsPage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<TechIconType | null>(null);

  return (
    <div className="mx-auto flex w-full flex-col px-6">
      <ToolHeader
        title="Tech Icons"
        description="Browse a collection of popular technology icons including programming languages, frameworks, libraries, and tools."
        href={Route.TechIcons}
        icon={IconListIcon}
      />
      <SearchIconInput value={keyword} onChange={setKeyword} />
      <div className="mb-4 mt-8 flex flex-wrap justify-center gap-4">
        {TECH_ICONS.map((icon) => (
          <TechIcon
            key={icon.id}
            icon={icon}
            display={icon.name.toLowerCase().includes(keyword.toLowerCase())}
            onClick={() => setSelectedIcon(icon)}
          />
        ))}
      </div>
      {selectedIcon && (
        <IconPreview
          icon={selectedIcon}
          onClose={() => setSelectedIcon(null)}
        />
      )}
    </div>
  );
};

export default TechIconsPage;
