import { cn } from "@/lib/utils";
import {
  AlignJustifyIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CircleUserRoundIcon,
  DownloadIcon,
  RotateCwIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";

export interface BrowserMockupProps {
  variant?: "compact" | "full";
  href: string;
  title?: string;
  hasButtonColor?: boolean;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const BrowserMockup: React.FC<BrowserMockupProps> = ({
  variant = "compact",
  href,
  title = "Website title",
  hasButtonColor,
  className,
  contentClassName,
  children,
}) => {
  return (
    <div
      className={cn(
        "min-w-96 overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-500",
        className,
      )}
    >
      <div
        className={cn("flex items-stretch bg-neutral-200 dark:bg-neutral-800", {
          "py-3": variant === "compact",
          "pt-2": variant === "full",
        })}
      >
        <div
          className={cn("flex flex-shrink-0 items-center gap-2 pl-6", {
            "border-b border-neutral-300 dark:border-neutral-500":
              variant === "full",
          })}
        >
          <div
            className={cn(
              "h-3 w-3 rounded-full",
              hasButtonColor ? "bg-red-500" : "bg-neutral-400",
            )}
          />
          <div
            className={cn(
              "h-3 w-3 rounded-full",
              hasButtonColor ? "bg-yellow-500" : "bg-neutral-400",
            )}
          />
          <div
            className={cn(
              "h-3 w-3 rounded-full",
              hasButtonColor ? "bg-green-500" : "bg-neutral-400",
            )}
          />
        </div>
        {variant === "compact" ? (
          <div className="flex flex-1 justify-center px-8">
            <div className="flex w-full flex-nowrap items-center rounded-lg bg-neutral-50 px-2 py-1 text-neutral-700 dark:bg-neutral-700">
              <SearchIcon className="mr-2 h-4 w-4 flex-shrink-0" />
              <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-200">
                {href}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-auto h-3 w-6 translate-x-[1px] bg-neutral-50 dark:bg-neutral-700">
              <div className="h-full w-full rounded-br-lg border-b border-r border-neutral-300 bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-800" />
            </div>
            <div className="flex h-9 w-52 items-center rounded-t-lg border-x border-t border-neutral-300 bg-neutral-50 px-4 dark:border-neutral-500 dark:bg-neutral-700">
              <div className="relative flex-1 overflow-hidden whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-200">
                {title}
                <div className="absolute inset-y-0 right-0 w-10 bg-[linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,1))] dark:bg-[linear-gradient(to_right,rgba(64,64,64,0),rgba(64,64,64,1))]" />
              </div>
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-neutral-400">
                <XIcon className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div className="mt-auto h-3 flex-1 -translate-x-[1px] bg-neutral-50 dark:bg-neutral-700">
              <div className="h-full w-full rounded-bl-lg border-b border-l border-neutral-300 bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-800" />
            </div>
          </>
        )}
      </div>
      {variant === "full" && (
        <div className="flex w-full flex-1 flex-shrink-0 flex-grow-0 items-center gap-4 bg-neutral-50 px-4 py-2 dark:bg-neutral-700">
          <div className="flex flex-shrink-0 gap-2 text-neutral-500 dark:text-neutral-200">
            <ArrowLeftIcon className="h-4 w-4" />
            <ArrowRightIcon className="h-4 w-4" />
            <RotateCwIcon className="h-4 w-4" />
          </div>
          <div className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-500 dark:border-neutral-500 dark:bg-neutral-800 dark:text-neutral-200">
            {href}
          </div>
          <div className="flex flex-shrink-0 gap-2 text-neutral-500 dark:text-neutral-200">
            <DownloadIcon className="h-4 w-4" />
            <CircleUserRoundIcon className="h-4 w-4" />
            <AlignJustifyIcon className="h-4 w-4" />
          </div>
        </div>
      )}
      <div
        className={cn(
          "min-h-32 border-t border-neutral-300 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-600",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;
