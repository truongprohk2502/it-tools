"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { SettingsIcon } from "lucide-react";

type ConfigType = {
  label: string;
  initValue: boolean;
  value: boolean;
};

export type Configs = [string, ConfigType][];

interface Props {
  settingTitle?: string;
  configs: Configs;
  setConfigs: (configs: Configs) => void;
}

const SettingDialog: React.FC<Props> = ({
  settingTitle,
  configs,
  setConfigs,
}) => {
  const handleToggleSetting = (field: string, checked: boolean) => {
    setConfigs(
      configs.map((item) => {
        if (item[0] === field) {
          item[1].value = checked;
        }
        return item;
      }),
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <SettingsIcon />
          <span>Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[40rem] max-sm:w-full">
        <DialogHeader>
          <DialogTitle>{settingTitle || "Setting"}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[32rem] overflow-auto px-4">
          <div className="grid grid-cols-1 gap-2">
            {Array.from(configs).map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between gap-2"
              >
                <p className="text-sm">{item[1].label}</p>
                <Switch
                  checked={item[1].value}
                  onCheckedChange={(checked) =>
                    handleToggleSetting(item[0], checked)
                  }
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SettingDialog;
