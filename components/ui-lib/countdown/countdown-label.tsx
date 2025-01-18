import { cn } from "@/lib/utils";
import { labelVariant, wrapperVariant } from "./countdown.helpers";
import type { CountdownLabelProps } from "./countdown.types";

const CountdownLabel: React.FC<CountdownLabelProps> = ({
  variant,
  type,
  size,
  hidden,
  children,
}) => {
  const getLabel = () => {
    switch (type) {
      case "day": {
        if (variant === "colon_label") return ":";
        if (variant === "abbreviated_label") return "d";
        return "days";
      }
      case "hour": {
        if (variant === "colon_label") return ":";
        if (variant === "abbreviated_label") return "h";
        return "hours";
      }
      case "minute": {
        if (variant === "colon_label") return ":";
        if (variant === "line_label") return "minutes";
        if (variant === "abbreviated_label") return "m";
        return "min";
      }
      case "second": {
        if (variant === "colon_label") return "";
        if (variant === "line_label") return "seconds";
        if (variant === "abbreviated_label") return "s";
        return "sec";
      }
      default:
        return "";
    }
  };

  return (
    <div className={cn(wrapperVariant({ variant, size }), { hidden })}>
      {children}
      <div className={labelVariant({ variant, size })}>{getLabel()}</div>
    </div>
  );
};

CountdownLabel.displayName = "CountdownLabel";

export default CountdownLabel;
