"use client";

import { Theme } from "@/constants/system";
import useSystemTheme from "@/hooks/use-system-theme";
import { cn } from "@/lib/utils";
import * as Portal from "@radix-ui/react-portal";
import Image from "next/image";
import hospitalDbDark from "../_images/hospital_db_dark.png";
import hospitalDbLight from "../_images/hospital_db_light.png";

interface Props {
  open: boolean;
  onClose: () => void;
}

const DbDiagram: React.FC<Props> = ({ open, onClose }) => {
  const theme = useSystemTheme();

  return (
    <Portal.Root>
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm",
          {
            hidden: !open,
          },
        )}
        onClick={onClose}
      >
        <div className="h-full w-full max-w-[45rem]">
          <Image
            src={hospitalDbLight}
            alt="hospital-db"
            className={cn("h-full w-full object-contain", {
              hidden: theme === Theme.Dark,
            })}
          />
          <Image
            src={hospitalDbDark}
            alt="hospital-db"
            className={cn("h-full w-full object-contain", {
              hidden: theme === Theme.Light,
            })}
          />
        </div>
      </div>
    </Portal.Root>
  );
};

export default DbDiagram;
