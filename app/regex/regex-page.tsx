"use client";

import RegexIcon from "@/assets/icons/regex.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Input } from "@/components/ui/input";
import { Route } from "@/constants/routes";
import { useEffect, useState } from "react";
import { parseRegExpLiteral } from "regexpp";
import type { RegExpLiteral } from "regexpp/ast";
import RegexExplanation from "./_components/regex-explanation";
import RegexTextarea from "./_components/regex-textarea";
import { DEFAULT_REGEX_PARAGRAPH } from "./constants";

const RegexPage: React.FC = () => {
  const [regex, setRegex] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const [astTree, setAstTree] = useState<RegExpLiteral | null>(null);

  const handleChangeRegex = (regex: string) => {
    setRegex(regex);
    try {
      const astTree = parseRegExpLiteral(regex);
      setInvalid(false);
      setAstTree(astTree);
    } catch {
      setInvalid(true);
      setAstTree(null);
    }
  };

  useEffect(() => {
    setParagraph(DEFAULT_REGEX_PARAGRAPH);
    handleChangeRegex("/([A-Z])\\w+/g");
  }, []);

  return (
    <div className="mx-auto min-w-[45rem] max-w-[80rem] px-8">
      <ToolHeader
        title="Regular Expression"
        description="Learn, build and test Regular Expressions (Regex)"
        href={Route.Regex}
        icon={RegexIcon}
      />
      <div>
        <p className="mb-1 font-semibold">Regex</p>
        <Input
          value={regex}
          onChange={(e) => handleChangeRegex(e.target.value)}
          className="font-bold"
        />
      </div>
      <div className="mt-4">
        <p className="mb-1 font-semibold">Paragraph</p>
        <RegexTextarea
          invalid={invalid}
          regex={regex}
          value={paragraph}
          onChange={setParagraph}
        />
      </div>
      <div className="mb-12 mt-4">
        <p className="mb-1 font-semibold">Explanation</p>
        <RegexExplanation invalid={invalid} astTree={astTree} />
      </div>
    </div>
  );
};

export default RegexPage;
