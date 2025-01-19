type Position = "right" | "left";

export interface DrawerProps {
  open: boolean;
  position?: Position;
  hideHeaderClose?: boolean;
  overlayCancel?: boolean;
  title?: string;
  hasFooterCancel?: boolean;
  hasFooterConfirm?: boolean;
  confirmTitle?: string;
  className?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onClose: () => void;
}
