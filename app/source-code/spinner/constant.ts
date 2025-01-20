export const spinnerTailwindCode = `// tailwind.config.js
module.exports = {
  ...
  theme: {
    ...
    extend: {
      ...
      keyframes: {
        pulse: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
        },
        bounce: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10px)" },
        },
        fade: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        scale: {
          "0%": {
            transform: "scaleY(0.4)",
          },
          "20%": {
            transform: "scaleY(1)",
          },
          "40%": {
            transform: "scaleY(0.4)",
          },
          "100%": {
            transform: "scaleY(0.4)",
          },
        },
        "clip-loader": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "clip-circle": {
          "0%": {
            strokeDasharray: "1,200",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "90,200",
            strokeDashoffset: "-35px",
          },
          "100%": {
            strokeDashoffset: "-125px",
          },
        },
      },
      animation: {
        pulse: "pulse 1.111s ease-in-out infinite",
        bounce: "bounce 0.5s ease-in infinite alternate",
        fade: "fade 1s infinite linear",
        scale: "scale 0.9s ease-in-out infinite",
        "clip-loader": "clip-loader 2s linear infinite",
        "clip-circle": "clip-circle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")]
};
`;

export const spinnerClipCode = `// clip.tsx
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("animate-clip-loader", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Clip: React.FC<Props> = ({ color, size, className }) => {
  return (
    <svg
      viewBox="25 25 50 50"
      className={clsx(sizeVariants({ size }), className)}
    >
      <circle
        r="20"
        cy="50"
        cx="50"
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeDasharray="1,200"
        strokeDashoffset={0}
        strokeLinecap="round"
        className="animate-clip-circle"
      ></circle>
    </svg>
  );
};

export default Clip; 
`;

export const spinnerBounceCode = `// bounce.tsx
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("grid grid-cols-4", {
  variants: {
    size: {
      small: "w-[2.25rem] h-6 gap-1",
      medium: "w-[2.875rem] h-8 gap-1.5",
      large: "w-[4.5rem] h-12 gap-2",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Bounce: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={clsx(sizeVariants({ size }), className)}>
      {new Array(4).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: \`\${index * 0.16}s\`,
          }}
          className="my-auto aspect-square flex-shrink-0 animate-bounce rounded-full first-letter:flex-grow-0"
        />
      ))}
    </div>
  );
};

export default Bounce;
`;

export const spinnerFadeCode = `// fade.tsx
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("relative inline-block w-[1em] h-[1em]", {
  variants: {
    size: {
      small: "text-[1.5rem]",
      medium: "text-[2rem]",
      large: "text-[3rem]",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Fade: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={clsx(sizeVariants({ size }), className)}>
      {new Array(12).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: \`\${index * 0.083}s\`,
            transform: \`rotate(\${index * 30}deg)\`,
          }}
          className="animate-fade absolute bottom-0 left-[0.4629em] h-[0.2777em] w-[0.074em] origin-[center_-0.2222em] rounded-[0.0555em]"
        />
      ))}
    </div>
  );
};

export default Fade;
`;

export const spinnerPulseCode = `// pulse.tsx
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("relative flex items-center", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Pulse: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={clsx(sizeVariants({ size }), className)}>
      {new Array(8).fill(null).map((_, index) => (
        <div
          key={index}
          style={{ transform: \`rotate(\${index * 45}deg)\` }}
          className="absolute left-0 top-0 flex h-full w-full items-center"
        >
          <div
            style={{
              backgroundColor: color,
              animationDelay: \`\${(8 - index) * 0.125}s\`,
            }}
            className="h-1/5 w-1/5 scale-0 animate-pulse rounded-full opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default Pulse;
`;

export const spinnerScaleCode = `// scale.tsx
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("flex justify-center items-center gap-1.5", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
});

const barVariants = cva("flex-shrink-0 h-full animate-scale", {
  variants: {
    size: {
      small: "w-[2px]",
      medium: "w-[3px]",
      large: "w-[4px]",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
  className?: string;
}

const Scale: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div className={clsx(sizeVariants({ size }), className)}>
      {new Array(5).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: \`-\${index ? 0.9 - index * 0.1 : 0}s\`,
            transform: \`rotate(\${index * 30}deg)\`,
          }}
          className={barVariants({ size })}
        />
      ))}
    </div>
  );
};

export default Scale;
`;

export const spinnerComponentCode = `// spinner.component.tsx
import { cva, type VariantProps } from "class-variance-authority";
import Bounce from "./bounce";
import Clip from "./clip";
import Fade from "./fade";
import Pulse from "./pulse";
import Scale from "./scale";

const colorVariants = cva("", {
  variants: {
    color: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      success: "#22c55e",
      danger: "#ef4444",
      warning: "#eab308",
      info: "#06b6d4",
      light: "#d1d5db",
      dark: "#000000",
    },
  },
});

export interface SpinnerProps extends VariantProps<typeof colorVariants> {
  variant?: "clip" | "fade" | "scale" | "bounce" | "pulse";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  variant = "clip",
  color = "primary",
  size = "medium",
  className,
}) => {
  const colorValue = colorVariants({ color });

  return variant === "clip" ? (
    <Clip size={size} color={colorValue} className={className} />
  ) : variant === "fade" ? (
    <Fade size={size} color={colorValue} className={className} />
  ) : variant === "scale" ? (
    <Scale size={size} color={colorValue} className={className} />
  ) : variant === "bounce" ? (
    <Bounce size={size} color={colorValue} className={className} />
  ) : variant === "pulse" ? (
    <Pulse size={size} color={colorValue} className={className} />
  ) : null;
};

export default Spinner;
`;
