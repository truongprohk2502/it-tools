"use client";

import NumberIcon from "@/assets/icons/number.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Route } from "@/constants/routes";
import bigInt from "big-integer";
import { useState } from "react";
import { NUMBER_FORMATS, NumberFormatType } from "./constants";

const NumberConverterPage: React.FC = () => {
  const [fromFormat, setFromFormat] = useState<NumberFormatType>(
    NumberFormatType.Binary,
  );
  const [toFormat, setToFormat] = useState<NumberFormatType>(
    NumberFormatType.Decimal,
  );
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const fromLabel = NUMBER_FORMATS.find(
    (item) => item.value === fromFormat,
  )!.label;
  const toLabel = NUMBER_FORMATS.find((item) => item.value === toFormat)!.label;

  const handleChangeFrom = (format: NumberFormatType) => {
    if (format === toFormat) setToFormat(fromFormat);
    setFromFormat(format);
  };

  const handleChangeTo = (format: NumberFormatType) => {
    setToFormat(format);
    setToValue("");
  };

  const handleSwap = () => {
    handleChangeFrom(toFormat);
    setFromValue("");
    setToValue("");
  };

  const handleConvert = () => {
    setError(null);
    if (!fromValue.trim()) {
      setError("Please enter number.");
      setToValue("");
      return;
    }
    try {
      const fromNum = bigInt(fromValue.trim(), fromFormat);
      const toNum = fromNum.toString(+toFormat);
      setToValue(toNum);
    } catch {
      setError("Please enter valid number.");
      setToValue("");
    }
  };

  return (
    <div className="mx-auto w-[35rem] px-6">
      <ToolHeader
        title="Number Converter"
        description="Number converters and conversions."
        href={Route.NumberConverter}
        icon={NumberIcon}
      />
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="mb-1 font-semibold">From</p>
          <Select
            value={fromFormat}
            onValueChange={(val) => handleChangeFrom(val as NumberFormatType)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {NUMBER_FORMATS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="mb-1 font-semibold">To</p>
          <Select
            value={toFormat}
            onValueChange={(val) => handleChangeTo(val as NumberFormatType)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {NUMBER_FORMATS.filter((item) => item.value !== fromFormat).map(
                  (item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ),
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className="mb-1 mt-4 font-semibold">
        Enter {fromLabel.toLowerCase()} number
      </p>
      <Input value={fromValue} onChange={(e) => setFromValue(e.target.value)} />
      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">{error}</p>
      )}
      <div className="my-8 flex gap-4">
        <Button className="w-24" onClick={handleConvert}>
          Convert
        </Button>
        <Button variant="outline" className="w-24" onClick={handleSwap}>
          Swap
        </Button>
      </div>
      <p className="mb-1 mt-6 font-semibold">{toLabel} number</p>
      <Textarea value={toValue} disabled className="h-[15rem] resize-none" />
    </div>
  );
};

export default NumberConverterPage;
