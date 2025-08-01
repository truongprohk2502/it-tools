"use client";

import { Language } from "../constants";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  active: Language;
  lang: Language;
  onClick: React.Dispatch<React.SetStateAction<Language>>;
}

const FlagItem: React.FC<Props> = ({ icon: Icon, lang, active, onClick }) => {
  return (
    <div
      className="relative h-7 w-7 cursor-pointer"
      onClick={() => onClick(lang)}
    >
      <Icon width={28} height={28} />
      {active === lang && (
        <div className="absolute -right-1.5 bottom-0 h-3 w-3 rounded-full bg-green-600" />
      )}
    </div>
  );
};

export default FlagItem;
