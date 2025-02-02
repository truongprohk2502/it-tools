export const circleComponentCode = `// circle.tsx
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

const variants = cva(
  "flex justify-center items-center w-12 h-12 rounded-full text-lg font-bold",
  {
    variants: {
      color: {
        primary: [
          "data-[completed=true]:bg-blue-500 data-[completed=true]:text-white",
          "data-[current=true]:border-blue-500 data-[current=true]:bg-blue-200 data-[current=true]:text-blue-700",
        ],
        secondary: [
          "data-[completed=true]:bg-neutral-500 data-[completed=true]:text-white",
          "data-[current=true]:border-neutral-500 data-[current=true]:bg-neutral-200 data-[current=true]:text-neutral-700",
        ],
        success: [
          "data-[completed=true]:bg-green-500 data-[completed=true]:text-white",
          "data-[current=true]:border-green-500 data-[current=true]:bg-green-200 data-[current=true]:text-green-700",
        ],
        danger: [
          "data-[completed=true]:bg-red-500 data-[completed=true]:text-white",
          "data-[current=true]:border-red-500 data-[current=true]:bg-red-200 data-[current=true]:text-red-700",
        ],
        warning: [
          "data-[completed=true]:bg-yellow-500 data-[completed=true]:text-white",
          "data-[current=true]:border-yellow-500 data-[current=true]:bg-yellow-200 data-[current=true]:text-yellow-700",
        ],
        info: [
          "data-[completed=true]:bg-cyan-500 data-[completed=true]:text-white",
          "data-[current=true]:border-cyan-500 data-[current=true]:bg-cyan-200 data-[current=true]:text-cyan-700",
        ],
        light: [
          "data-[completed=true]:bg-neutral-300 data-[completed=true]:text-white",
          "data-[current=true]:border-neutral-300 data-[current=true]:bg-neutral-100 data-[current=true]:text-neutral-400",
        ],
        dark: [
          "data-[completed=true]:bg-neutral-900 data-[completed=true]:text-white",
          "data-[current=true]:border-neutral-900 data-[current=true]:bg-neutral-200 data-[current=true]:text-neutral-700",
        ],
      },
    },
  },
);

export type Color = VariantProps<typeof variants>["color"];

interface Props {
  index: number;
  icon?: React.ReactNode;
  variant: "upcoming" | "current" | "completed";
  color: Color;
}

const Circle: React.FC<Props> = ({ index, icon, variant, color }) => {
  return (
    <div
      data-completed={variant === "completed"}
      data-current={variant === "current"}
      className={clsx(variants({ color }), {
        "border-2": variant !== "completed",
      })}
    >
      {variant === "completed" ? (
        <CheckIcon width={16} height={16} />
      ) : (
        icon || <span>{index + 1}</span>
      )}
    </div>
  );
};

export default Circle;
`;

export const infoComponentCode = `// info.tsx
interface Props {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const Info: React.FC<Props> = ({ title, description, className }) => {
  return (
    <div className={className}>
      {title && <div className="font-semibold">{title}</div>}
      {description && (
        <div className="text-sm text-neutral-500">{description}</div>
      )}
    </div>
  );
};

export default Info;
`;

export const lineComponentCode = `// line.tsx
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva(
  "h-0.5 mx-2 data-[active=false]:bg-neutral-300 dark:data-[active=false]:bg-neutral-600",
  {
    variants: {
      color: {
        primary: "data-[active=true]:bg-blue-500",
        secondary: "data-[active=true]:bg-neutral-500",
        success: "data-[active=true]:bg-green-500",
        danger: "data-[active=true]:bg-red-500",
        warning: "data-[active=true]:bg-yellow-500",
        info: "data-[active=true]:bg-cyan-500",
        light: "data-[active=true]:bg-neutral-400",
        dark: "data-[active=true]:bg-neutral-900",
      },
    },
  },
);

interface Props extends VariantProps<typeof variants> {
  display: "active" | "inactive" | "hidden";
}

const Line: React.FC<Props> = ({ display, color }) => {
  return (
    <div
      data-active={display === "active"}
      className={clsx(
        variants({ color }),
        display === "hidden" ? "flex-[1] opacity-0" : "flex-[2]",
      )}
    />
  );
};

export default Line;
`;

export const stepsComponentCode = `// steps.component.tsx
import clsx from "clsx";
import { Fragment } from "react";
import Circle, { Color } from "./circle";
import Info from "./info";
import Line from "./line";

export interface Step {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface StepsProps {
  current: number;
  steps: Step[];
  color?: Color;
  position?: "inline" | "break-line";
  className?: string;
}

const Steps: React.FC<StepsProps> = ({
  current,
  steps,
  color = "primary",
  position = "inline",
  className,
}) => {
  return (
    <div className={clsx("flex items-center", className)}>
      {position === "inline" ? (
        steps.map((step, index) => (
          <Fragment key={index}>
            {index !== 0 && (
              <Line
                color={color}
                display={current >= index + 1 ? "active" : "inactive"}
              />
            )}
            <div className="flex items-center">
              <Circle
                color={color}
                index={index}
                icon={step.icon}
                variant={
                  current === index + 1
                    ? "current"
                    : current > index + 1
                      ? "completed"
                      : "upcoming"
                }
              />
              {(step.title || step.description) && (
                <Info
                  title={step.title}
                  description={step.description}
                  className="ml-4"
                />
              )}
            </div>
          </Fragment>
        ))
      ) : (
        <div className="w-full">
          <div className="flex w-full items-center">
            <Line display="hidden" />
            {steps.map((step, index) => (
              <Fragment key={index}>
                {index !== 0 && (
                  <Line
                    color={color}
                    display={current >= index + 1 ? "active" : "inactive"}
                  />
                )}
                <Circle
                  color={color}
                  index={index}
                  icon={step.icon}
                  variant={
                    current === index + 1
                      ? "current"
                      : current > index + 1
                        ? "completed"
                        : "upcoming"
                  }
                />
              </Fragment>
            ))}
            <Line display="hidden" />
          </div>
          <div className="flex">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center px-4"
              >
                {(step.title || step.description) && (
                  <Info
                    title={step.title}
                    description={step.description}
                    className="mt-2 flex flex-col items-center"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
`;
