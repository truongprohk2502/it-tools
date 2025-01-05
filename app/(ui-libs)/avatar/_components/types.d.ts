export interface AvatarProps {
  src: string;
  name: string;
  size: "small" | "medium" | "large";
  radius: "small" | "large" | "full";
  bordered: boolean;
  disabled: boolean;
  randomFallbackColor: boolean;
}
