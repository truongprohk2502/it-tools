"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import {
  ArrowDownUpIcon,
  ArrowLeftRightIcon,
  CheckIcon,
  CirclePlusIcon,
  CircleXIcon,
  RefreshCwIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DEFAULT_IMAGE_RATIOS } from "../constants";
import { getAspectsFromStorage, setAspectsToStorage } from "../helpers";

type Inputs = {
  width: string;
  height: string;
};

interface Props {
  aspect: string | null;
  rotate: number;
  isFlipVertical: boolean;
  isFlipHorizontal: boolean;
  onToggleFlipVertical: () => void;
  onToggleFlipHorizontal: () => void;
  onChangeAspect: (val: string) => void;
  onChangeRotate: (val: number) => void;
  onRemove: () => void;
}

const CropImageForm: React.FC<Props> = ({
  aspect,
  rotate,
  isFlipVertical,
  isFlipHorizontal,
  onToggleFlipVertical,
  onToggleFlipHorizontal,
  onChangeAspect,
  onChangeRotate,
  onRemove,
}) => {
  const [aspectOptions, setAspectOptions] = useState<string[]>(
    DEFAULT_IMAGE_RATIOS.concat(getAspectsFromStorage()),
  );
  const [openingAspectPopover, setOpeningAspectPopover] =
    useState<boolean>(false);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitAspect: SubmitHandler<Inputs> = (data) => {
    setOpeningAspectPopover(false);

    const { width, height } = data;
    const w = +width;
    const h = +height;

    if (Number.isNaN(w) || Number.isNaN(h)) return;

    const newAspectOption = `${Math.abs(w)}:${Math.abs(h)}`;

    if (aspectOptions.includes(newAspectOption)) return;

    setAspectOptions([...aspectOptions, newAspectOption]);

    const localAspects = getAspectsFromStorage();

    if (!localAspects.includes(newAspectOption)) {
      setAspectsToStorage([...localAspects, newAspectOption]);
    }
  };

  const handleRemoveAspect = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    removeAspect: string,
  ) => {
    e.stopPropagation();

    if (aspect === removeAspect) onChangeAspect(aspectOptions[0]);

    setAspectOptions(aspectOptions.filter((item) => item !== removeAspect));

    const localAspects = getAspectsFromStorage();

    if (localAspects.includes(removeAspect)) {
      setAspectsToStorage(localAspects.filter((item) => item !== removeAspect));
    }
  };

  const handleChangeRotate = () => {
    if (rotate < 90) return onChangeRotate(90);
    if (rotate < 180) return onChangeRotate(180);
    if (rotate < 270) return onChangeRotate(270);
    return onChangeRotate(rotate ? 0 : 90);
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        {aspectOptions.map((item, index) => (
          <div
            key={item}
            className={cn(
              "relative cursor-pointer rounded-md border border-neutral-400 px-2 py-1 text-sm font-medium",
              { "bg-neutral-700 text-white": item === aspect },
            )}
            onClick={() => onChangeAspect(item)}
          >
            {item || "Free"}
            {index >= 5 && (
              <CircleXIcon
                className="absolute -right-2 -top-2 h-4 w-4 cursor-pointer text-red-500"
                onClick={(e) => handleRemoveAspect(e, item as string)}
              />
            )}
          </div>
        ))}
        <Popover
          open={openingAspectPopover}
          onOpenChange={setOpeningAspectPopover}
        >
          <PopoverTrigger asChild>
            <CirclePlusIcon
              width={20}
              height={20}
              className="cursor-pointer text-neutral-700"
            />
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-72">
            <form
              className="flex items-end gap-4"
              onSubmit={handleSubmit(onSubmitAspect)}
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    type="number"
                    className="col-span-2 h-8"
                    {...register("width")}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    type="number"
                    className="col-span-2 h-8"
                    {...register("height")}
                  />
                </div>
              </div>
              <Button type="submit" className="h-[2rem] w-[4rem]" size="icon">
                <CheckIcon width={16} height={16} />
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <p className="text-sm font-semibold">Flip</p>
        <Toggle
          variant="outline"
          data-state={isFlipVertical ? "on" : "off"}
          onClick={onToggleFlipVertical}
        >
          <ArrowDownUpIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          variant="outline"
          data-state={isFlipHorizontal ? "on" : "off"}
          onClick={onToggleFlipHorizontal}
        >
          <ArrowLeftRightIcon className="h-4 w-4" />
        </Toggle>
        <p className="ml-4 text-sm font-semibold">Rotate</p>
        <Button size="sm" onClick={handleChangeRotate}>
          <RefreshCwIcon className="h-4 w-4" />
        </Button>
        <Input className="w-14 text-center" value={rotate} disabled />
        <Button variant="destructive" onClick={onRemove}>
          <TrashIcon className="mr-2 h-4 w-4 -translate-y-[1px] transform" />
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CropImageForm;
