export const mobileMockupTypesCode = `// mobile-mockup.types.ts
type Size = "small" | "medium" | "large";

type EdgeSize = "small" | "large";

type EdgeRounded = "small" | "large" | "none";

type TopVariant =
  | "pill"
  | "small_ears"
  | "large_ears"
  | "one_dot_center"
  | "two_dot_center"
  | "one_dot_left"
  | "drop_of_water"
  | "invisible";

type BottomVariant = "home_bar" | "navigate_shape" | "navigate_icon" | "none";

export interface MobileMockupProps {
  showBackground?: boolean;
  size?: Size;
  edgeSize?: EdgeSize;
  edgeRounded?: EdgeRounded;
  topVariant?: TopVariant;
  bottomVariant?: BottomVariant;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}
`;

export const mobileMockupComponentCode = `// mobile-mockup.component.tsx
import clsx from "clsx";
import { ChevronLeftIcon, MenuIcon, SquircleIcon } from "lucide-react";
import { MobileMockupProps } from "./mobile-mockup.types";

const MobileMockup: React.FC<MobileMockupProps> = ({
  showBackground,
  size = "medium",
  edgeSize = "small",
  edgeRounded = "small",
  topVariant = "invisible",
  bottomVariant = "none",
  className,
  contentClassName,
  children,
}) => {
  return (
    <div
      className={clsx(
        "relative h-[78em] w-[36em] bg-neutral-50",
        {
          "shadow-[0em_0em_0em_0.9em_#1f1f1f,_0em_0em_0em_1.1em_#191919,_0em_0em_0em_1.4em_#111]":
            edgeSize === "small",
          "shadow-[0em_0em_0em_1.1em_#1f1f1f,_0em_0em_0em_1.3em_#191919,_0em_0em_0em_2em_#111]":
            edgeSize === "large",
        },
        {
          "rounded-[3em]": edgeRounded === "small",
          "rounded-[4em]": edgeRounded === "large",
        },
        {
          "text-[8px]": size === "small",
          "text-[9px]": size === "medium",
          "text-[10px]": size === "large",
        },
        {
          "bg-[linear-gradient(60deg,#7371ee_1%,#a1d9d6_100%)]": showBackground,
        },
        className,
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center",
          contentClassName,
        )}
      >
        {children}
      </div>
      {bottomVariant === "home_bar" ? (
        <div
          id="home_indicator"
          className={clsx(
            "absolute bottom-[0.7em] left-1/2 h-[0.4em] w-[14em] -translate-x-1/2 rounded-[1em]",
            showBackground ? "bg-neutral-200" : "bg-neutral-500",
          )}
        />
      ) : bottomVariant === "navigate_shape" ? (
        <div className="absolute inset-x-0 bottom-[1.5em] flex items-center justify-evenly">
          <div
            className={clsx(
              "h-[1.6em] w-[1.6em] rounded-[0.3em]",
              showBackground ? "bg-neutral-200" : "bg-neutral-500",
            )}
          />
          <div
            className={clsx(
              "h-[1.6em] w-[1.6em] rounded-full",
              showBackground ? "bg-neutral-200" : "bg-neutral-500",
            )}
          />
          <div
            className={clsx(
              "h-0 w-0 border-y-[0.8em] border-r-[1.6em] border-y-transparent",
              showBackground ? "border-r-neutral-200" : "border-r-neutral-500",
            )}
          />
        </div>
      ) : bottomVariant === "navigate_icon" ? (
        <div className="absolute inset-x-0 bottom-[1.5em] flex items-center justify-evenly">
          <MenuIcon
            className={clsx(
              "h-[1.6em] w-[1.6em]",
              showBackground ? "text-neutral-200" : "text-neutral-500",
            )}
          />
          <SquircleIcon
            className={clsx(
              "h-[1.6em] w-[1.6em]",
              showBackground ? "text-neutral-200" : "text-neutral-500",
            )}
          />
          <ChevronLeftIcon
            className={clsx(
              "h-[1.6em] w-[1.6em]",
              showBackground ? "text-neutral-200" : "text-neutral-500",
            )}
          />
        </div>
      ) : null}
      {topVariant !== "invisible" && (
        <div
          id="front_top_frame"
          className={clsx("absolute left-1/2 -translate-x-1/2 bg-[#1f1f1f]", {
            "top-0 h-[3em] w-[56%] rounded-b-[4em]":
              topVariant === "large_ears",
            "top-0 h-[3em] w-[40%] rounded-b-[2em]":
              topVariant === "small_ears",
            "top-[0.8em] h-[3em] w-[30%] rounded-[2em]": topVariant === "pill",
            "top-0 h-[2em] w-[3em] rounded-b-full":
              topVariant === "drop_of_water",
          })}
        />
      )}
      {(topVariant === "small_ears" || topVariant === "large_ears") && (
        <div
          id="speaker"
          className={clsx(
            "absolute left-1/2 top-0 h-[0.8em] w-[15%] -translate-x-1/2 translate-y-[0.6em] rounded-[0.8em] bg-[#101010] shadow-[inset_0em_-0.3em_0.3em_0em_rgba(256,256,256,0.2)]",
          )}
        />
      )}
      {topVariant !== "invisible" && (
        <>
          <div
            id="camera"
            className={clsx(
              "absolute rounded-[1.2em] bg-[#101010] shadow-[inset_0em_-0.3em_0.2em_0em_rgba(256,256,256,0.2)]",
              "flex items-center justify-center",
              {
                "translate-y-[0.4em]": topVariant !== "drop_of_water",
              },
              {
                "left-1/2 top-0 h-[1.2em] w-[1.2em] translate-x-[4em]":
                  topVariant === "small_ears" || topVariant === "large_ears",
                "left-1/2 top-[1.3em] h-[1.2em] w-[1.2em] translate-x-[3em]":
                  topVariant === "pill",
                "left-1/2 top-[0.4em] h-[1.6em] w-[1.6em] -translate-x-1/2":
                  topVariant === "one_dot_center",
                "left-1/2 top-[0.4em] h-[1.6em] w-[1.6em] translate-x-[0.2em]":
                  topVariant === "two_dot_center",
                "left-[1.8em] top-[0.8em] h-[1.6em] w-[1.6em]":
                  topVariant === "one_dot_left",
                "left-1/2 top-0 h-[1.6em] w-[1.6em] -translate-x-1/2":
                  topVariant === "drop_of_water",
              },
            )}
          >
            <div
              className={clsx(
                "rounded-full bg-[#2d4d76] shadow-[inset_0em_-0.2em_0.2em_rgba(0,0,0,0.5)]",
                topVariant === "one_dot_center"
                  ? "h-[0.8em] w-[0.8em]"
                  : "h-[0.6em] w-[0.6em]",
              )}
            />
          </div>
          {topVariant === "two_dot_center" && (
            <div
              id="sub_camera"
              className={clsx(
                "absolute top-0 translate-y-[0.4em] rounded-[1.2em] bg-[#101010] shadow-[inset_0em_-0.3em_0.2em_0em_rgba(256,256,256,0.2)]",
                "left-1/2 top-[0.4em] h-[1.6em] w-[1.6em] -translate-x-[1.8em]",
                "flex items-center justify-center",
              )}
            >
              <div className="h-[0.8em] w-[0.8em] rounded-full bg-[#2d4d76] shadow-[inset_0em_-0.2em_0.2em_rgba(0,0,0,0.5)]" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MobileMockup;
`;
