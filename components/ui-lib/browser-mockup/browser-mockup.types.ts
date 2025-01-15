export interface BrowserMockupProps {
  variant?: "compact" | "full";
  href: string;
  title?: string;
  hasButtonColor?: boolean;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}
