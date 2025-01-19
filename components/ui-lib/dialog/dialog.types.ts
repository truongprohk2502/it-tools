export interface DialogProps {
  open: boolean;
  hideHeaderClose?: boolean;
  overlayCancel?: boolean;
  disabledAnimation?: boolean;
  title?: string;
  hasFooterCancel?: boolean;
  hasFooterConfirm?: boolean;
  confirmTitle?: string;
  className?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onClose: () => void;
}
