export interface BadgeProps {
  title: string;
  shape?: "square" | "circle";
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  showOutline?: boolean;
  hidden?: boolean;
}
