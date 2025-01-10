"use client";

import TextIcon from "@/assets/icons/text.icon";
import NumberInput from "@/components/shared/number-input";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import { copyToClipboard } from "@/utils/copy-to-clipboard";
import { TextNoneIcon } from "@radix-ui/react-icons";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import { LOREM_IPSUM_TEXTS } from "./constants";

const GenerateTextPage: React.FC = () => {
  const [language, setLanguage] = useState<string>("English");
  const [totalParagraphs, setTotalParagraphs] = useState<string>("1");
  const [totalWords, setTotalWords] = useState<string>("20");
  const [text, setText] = useState<string>();

  const languages = LOREM_IPSUM_TEXTS.map((item) => item.language);

  const generateWords = () => {
    const numWords = +totalWords;

    let loremIpsumText = LOREM_IPSUM_TEXTS.find(
      (item) => item.language === language,
    )!.loremIpsum;

    const separateChar = loremIpsumText.includes(" ") ? " " : "";
    const dotChar = loremIpsumText.includes(" ") ? "." : "。";

    const words = loremIpsumText!.split(separateChar);
    const paragraphCount = Math.floor(numWords / words.length);

    if (paragraphCount) {
      loremIpsumText = Array(paragraphCount)
        .fill(loremIpsumText)
        .join(separateChar);
    }

    const genText = loremIpsumText!
      .split(separateChar)
      .slice(0, numWords)
      .join(separateChar);
    return genText.endsWith(dotChar) ? genText : genText + dotChar;
  };

  const handleGenerateText = () => {
    const paragraph = generateWords();
    const genText = Array(+totalParagraphs).fill(paragraph).join("\n");
    setText(genText);
  };

  return (
    <div className="mx-auto min-w-[45rem] max-w-[60rem] px-6">
      <ToolHeader
        title="Generate Texts"
        description="Generate random text using various text generators and supporting various languages."
        href={Route.GenerateText}
        icon={TextIcon}
      />
      <div className="flex items-center justify-center gap-6">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center">
          <p className="mr-2 text-sm font-bold">Paragraphs:</p>
          <NumberInput
            value={totalParagraphs}
            min={1}
            max={100}
            className="w-20"
            onChangeNumber={setTotalParagraphs}
          />
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-sm font-bold">Words per Paragraph:</p>
          <NumberInput
            value={totalWords}
            min={1}
            max={10000}
            className="w-20"
            onChangeNumber={setTotalWords}
          />
        </div>
        <Button onClick={handleGenerateText}>Generate</Button>
      </div>
      {text ? (
        <div className="mb-16 mt-8">
          <div
            className="mb-4 ml-auto flex w-fit cursor-pointer items-center"
            onClick={() => copyToClipboard(text)}
          >
            <CopyIcon width={16} height={16} />
            <p className="ml-2">Copy</p>
          </div>
          <div className="grid grid-cols-1 gap-2 rounded-lg border border-neutral-400 px-4 py-6">
            {text.split("\n").map((item, index) => (
              <p key={index} className="whitespace-pre-wrap">
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-16 mt-8 flex items-center justify-center rounded-lg border border-neutral-400 px-4 py-24">
          <TextNoneIcon width={30} height={30} />
          <p className="ml-4 text-lg font-semibold italic">The text is empty</p>
        </div>
      )}
    </div>
  );
};

export default GenerateTextPage;
