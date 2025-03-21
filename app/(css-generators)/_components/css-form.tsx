"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CommonCssOption = {
  name: string;
  value: string;
  type: "color" | "color-with-percent";
};

type SlideCssOption = {
  name: string;
  value: string;
  type: "slide";
  min: number;
  max: number;
  step?: number;
  unit: string;
};

type SelectCssOption = {
  name: string;
  value: string;
  type: "select";
  options: string[];
};

export type CssOption = CommonCssOption | SlideCssOption | SelectCssOption;

interface Props {
  options: CssOption[];
  setOptions: (options: CssOption[]) => void;
}

const CssForm: React.FC<Props> = ({ options, setOptions }) => {
  const handleOptionChange = (option: CssOption, value: string) => {
    const updatedOptions = options.map((item) => {
      if (item.name === option.name) {
        return { ...item, value };
      }
      return item;
    });
    setOptions(updatedOptions);
  };

  const getColorFromColorAndPercentage = (value: string) => {
    return value.split(" ")[0];
  };

  const getPercentageFromColorAndPercentage = (value: string) => {
    const percentage = value.split(" ")[1];
    return Number(percentage.slice(0, percentage.length - 1));
  };

  return (
    <div className="mt-8 rounded-md bg-neutral-200 px-4 py-6 dark:bg-neutral-700">
      <p className="text-lg font-semibold">Options</p>
      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-3">
        {options.map((item) => (
          <div key={item.name}>
            {item.type === "select" && (
              <>
                <p className="mb-1 font-medium">{item.name}</p>
                <Select
                  value={item.value}
                  onValueChange={(val) => handleOptionChange(item, val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {item.options.map((value) => (
                        <SelectItem key={value} value={value}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </>
            )}
            {item.type === "slide" && (
              <>
                <p className="mb-1 font-medium">{`${item.name} (${item.value}${item.unit})`}</p>
                <Input
                  type="range"
                  min={item.min}
                  max={item.max}
                  step={item.step || 1}
                  value={item.value}
                  onChange={(e) => handleOptionChange(item, e.target.value)}
                  className="w-full"
                />
              </>
            )}
            {item.type === "color" && (
              <>
                <p className="mb-1 font-medium">{`color (${item.value})`}</p>
                <Input
                  type="color"
                  value={item.value}
                  onChange={(e) => handleOptionChange(item, e.target.value)}
                  className="w-full"
                />
              </>
            )}
            {item.type === "color-with-percent" && (
              <div className="flex gap-2">
                <div className="flex-auto">
                  <p className="mb-1 font-medium">
                    {`color (${getColorFromColorAndPercentage(item.value)})`}
                  </p>
                  <Input
                    type="color"
                    value={getColorFromColorAndPercentage(item.value)}
                    onChange={(e) =>
                      handleOptionChange(
                        item,
                        `${e.target.value} ${getPercentageFromColorAndPercentage(item.value)}%`,
                      )
                    }
                    className="w-full"
                  />
                </div>
                <div className="w-16 flex-shrink-0">
                  <p className="mb-1 font-medium">%</p>
                  <Input
                    type="number"
                    value={getPercentageFromColorAndPercentage(item.value)}
                    onChange={(e) =>
                      handleOptionChange(
                        item,
                        `${getColorFromColorAndPercentage(item.value)} ${e.target.value}%`,
                      )
                    }
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssForm;
