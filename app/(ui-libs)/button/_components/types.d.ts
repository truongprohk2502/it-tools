export interface ButtonProps {
  buttonColor:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  radius: "none" | "large" | "full";
  size: "small" | "medium" | "large";
  variant: "solid" | "soft" | "outline";
  disabled: boolean;
  children: string;
}
