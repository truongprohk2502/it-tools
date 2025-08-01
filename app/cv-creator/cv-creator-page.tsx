"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { BaselineIcon, MoveVerticalIcon } from "lucide-react";
import { useState } from "react";
import ColorItem from "./_components/color-item";
import CvWrapper from "./_components/cv-wrapper";
import FlagItem from "./_components/flag-item";
import HeaderItem from "./_components/header-item";
import SizeItem from "./_components/size-item";
import ProfessionalTheme from "./_themes/professional-theme";
import {
  ARRAY_KEY_REGEX,
  Color,
  COLORS,
  CV_WRAPPER_ID,
  DEFAULT_CV_INFORMATION,
  Font,
  FONT_SIZES,
  FONTS,
  Language,
  LANGUAGES,
  LINE_HEIGHTS,
  Size,
} from "./constants";
import type { CvInformation } from "./types";

const CvCreatorPage: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [color, setColor] = useState<Color>(Color.BLUE);
  const [fontFamily, setFontFamily] = useState<Font>(Font.Roboto);
  const [fontSize, setFontSize] = useState<Size>(Size.Medium);
  const [lineHeight, setLineHeight] = useState<Size>(Size.Medium);
  const [cvInformation, setCvInformation] = useState<CvInformation>(
    DEFAULT_CV_INFORMATION,
  );

  const SelectedTheme = ProfessionalTheme;

  const exportPdf = async () => {
    const element = document.getElementById(CV_WRAPPER_ID);
    if (!element) return;
    const input = document.getElementById(CV_WRAPPER_ID) as HTMLElement;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.width,
      pdf.internal.pageSize.height,
    );
    pdf.save("cv.pdf");
  };

  const handleChangeCvInformation = (key: string, value: unknown) => {
    if (ARRAY_KEY_REGEX.test(key)) {
      const match = key.match(/(\w+)\[(\d+)\]\.(\w+)/)!;
      const keyName = match[1];
      const index = +match[2];
      const field = match[3];

      setCvInformation((prev) => ({
        ...prev,
        [keyName]: (
          prev[keyName as keyof CvInformation] as Array<{ id: number }>
        ).map((item) =>
          item.id === index ? { ...item, [field]: value } : item,
        ),
      }));
    } else {
      setCvInformation((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  const handleAddNew = (key: string, value: Array<unknown>) => {
    setCvInformation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="-mx-6 -my-8 min-w-[60rem]">
      <div className="flex h-[4.5rem] justify-center border-b border-neutral-200 dark:border-neutral-800">
        <HeaderItem title="Export CV" className="flex gap-3">
          <Button onClick={exportPdf} size="sm">
            Export PDF
          </Button>
        </HeaderItem>
        <HeaderItem title="Language" className="flex gap-3">
          {LANGUAGES.map((item) => (
            <FlagItem
              {...item}
              key={item.lang}
              active={language}
              onClick={setLanguage}
            />
          ))}
        </HeaderItem>
        <HeaderItem title="Color" className="flex gap-2">
          {COLORS.map((item) => (
            <ColorItem
              key={item}
              colorHex={item}
              active={color}
              onClick={setColor}
            />
          ))}
        </HeaderItem>
        <HeaderItem title="Font family">
          <Select
            value={fontFamily}
            onValueChange={(font) => setFontFamily(font as Font)}
          >
            <SelectTrigger className="h-[1.6rem] w-[120px] px-1.5 py-0.5">
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              {FONTS.map((font) => (
                <SelectItem key={font} value={font}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </HeaderItem>
        <HeaderItem title="Font size" className="flex items-center gap-2">
          {FONT_SIZES.map((item) => (
            <SizeItem
              {...item}
              key={item.size}
              icon={BaselineIcon}
              active={fontSize}
              onClick={setFontSize}
            />
          ))}
        </HeaderItem>
        <HeaderItem title="Line height" className="flex items-center gap-2">
          {LINE_HEIGHTS.map((item) => (
            <SizeItem
              {...item}
              key={item.size}
              icon={MoveVerticalIcon}
              active={lineHeight}
              onClick={setLineHeight}
            />
          ))}
        </HeaderItem>
      </div>
      <CvWrapper
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
      >
        <SelectedTheme
          color={color}
          language={language}
          cvInformation={cvInformation}
          onChangeCvInformation={handleChangeCvInformation}
          onAddNew={handleAddNew}
        />
      </CvWrapper>
    </div>
  );
};

export default CvCreatorPage;
