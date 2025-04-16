"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LinkIcon, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  defaultValue: string;
  active: boolean;
  disabled: boolean;
  onChangeLink: (url: string) => void;
}

const AnchorPopover: React.FC<Props> = ({
  defaultValue,
  active,
  disabled,
  onChangeLink,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(defaultValue);

  useEffect(() => {
    setUrl(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (!open) onChangeLink(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, open]);

  useEffect(() => {
    if (!focus) return;

    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setOpen(false);
        setFocus(false);
      }
    };

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [focus]);

  const handleClear = () => {
    setUrl("");
    setOpen(false);
    setFocus(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={disabled}
          className={active ? "bg-accent text-accent-foreground" : ""}
        >
          <LinkIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit rounded-lg p-1">
        <div className="flex gap-2 p-1">
          <input
            placeholder="Enter URL"
            className="flex-auto bg-transparent text-sm focus:outline-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TrashIcon
            width={16}
            height={16}
            className="cursor-pointer"
            onClick={handleClear}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AnchorPopover;
