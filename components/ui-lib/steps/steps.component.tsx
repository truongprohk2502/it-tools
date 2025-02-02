import { cn } from "@/lib/utils";
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
    <div className={cn("flex items-center", className)}>
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
