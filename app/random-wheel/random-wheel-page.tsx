"use client";

import WheelIcon from "@/assets/icons/wheel.icon";
import MonacoEditor from "@/components/shared/monaco-editor";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { getRandomHexColor } from "@/utils/get-colors";
import { CircleXIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import EndWheelDialog from "./_components/end-wheel-dialog";
import Wheel from "./_components/wheel";
import { DEFAULT_RANDOM_NAMES } from "./constants";
import { getOptionsFromListText } from "./helpers";

const RandomWheelPage: React.FC = () => {
  const [listText, setListText] = useState<string>(
    DEFAULT_RANDOM_NAMES.join("\n"),
  );
  const [groupText, setGroupText] = useState<string>("");
  const [colorList, setColorList] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const wheelRef = useRef<HTMLDivElement>(null);

  const { options, totalOptions } = getOptionsFromListText(listText);

  useEffect(() => {
    if (colorList.length === totalOptions) return;

    if (colorList.length > totalOptions) {
      setColorList(colorList.slice(0, totalOptions));
      return;
    }

    setColorList([...colorList, getRandomHexColor()]);
  }, [totalOptions, colorList]);

  const setWheelRotation = (rotate: number) => {
    if (!wheelRef.current) return;
    const wheelElement =
      wheelRef.current.getElementsByTagName("canvas")[0].parentElement!;

    wheelElement.style.transform = `rotate(${rotate}deg)`;
  };

  const handleResetResult = () => {
    const results = groupText.split("\n").filter((item) => item.trim());
    setGroupText("");
    setListText(options.concat(results).join("\n"));
  };

  const handleCloseDialog = () => {
    setWheelRotation(0);
    setSelectedOption(null);
  };

  const handleRemoveOption = (option: string) => {
    setGroupText((groupText + "\n" + option).trim());
    const newListText = options.filter((item) => item !== option).join("\n");
    setListText(newListText);
  };

  const handleFinishedWheel = (option: string) => {
    setSelectedOption(option);
  };

  const handleChangeListText = (value: string | undefined) => {
    setListText(value || "");
  };

  return (
    <div className="mx-auto min-w-[45rem] max-w-[80rem]">
      <ToolHeader
        title="Random Wheel"
        description="Free and easy to use spinner. Enter names and spin the wheel to pick a random winner. Customize look and feel, save and share wheels."
        href={Route.RandomWheel}
        icon={WheelIcon}
      />
      <div
        ref={wheelRef}
        className="flex flex-col px-6 xl:flex-row xl:gap-20 2xl:gap-20"
      >
        <div className="flex h-[850px] w-[600px] flex-col items-center">
          <Wheel
            segments={options}
            segColors={colorList}
            onFinished={handleFinishedWheel}
          />
        </div>
        <div className="mb-16 grid w-full grid-cols-2 gap-4 xl:max-w-[30rem] xl:grid-cols-1 2xl:max-w-[50rem] 2xl:grid-cols-2">
          <div>
            <div className="flex h-8 items-center justify-between">
              <h3 className="font-semibold">List</h3>
            </div>
            <div className="rounded-md border border-neutral-300 dark:border-neutral-600">
              <MonacoEditor
                value={listText}
                onChange={handleChangeListText}
                height="24rem"
                asSimple={false}
                hideMinimap
              />
            </div>
          </div>
          <div>
            <div className="flex h-8 items-center justify-between">
              <h3 className="font-semibold">Result</h3>
              <CircleXIcon
                className="h-4 w-4 cursor-pointer text-neutral-500 hover:text-neutral-700"
                onClick={handleResetResult}
              />
            </div>
            <div className="rounded-md border border-neutral-300 dark:border-neutral-600">
              <MonacoEditor
                value={groupText}
                height="24rem"
                asSimple={false}
                hideMinimap
                options={{
                  readOnly: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <EndWheelDialog
        option={selectedOption}
        onClose={handleCloseDialog}
        onRemove={handleRemoveOption}
      />
    </div>
  );
};

export default RandomWheelPage;
