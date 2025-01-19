"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Button } from "@/components/ui-lib/button";
import { Dialog, type DialogProps } from "@/components/ui-lib/dialog";
import { useState } from "react";
import { dialogProperties } from "./constant";

const generateCode = (props: DialogProps) => `<Dialog
  open={${props.open}}
  title="${props.title}"
  overlayCancel={${props.overlayCancel}}
  disabledAnimation={${props.disabledAnimation}}
  hideHeaderClose={${props.hideHeaderClose}}
  hasFooterCancel={${props.hasFooterCancel}}
  hasFooterConfirm={${props.hasFooterConfirm}}
  confirmTitle="${props.confirmTitle}"
  onClose={closeDialog}
  onConfirm={handleConfirm}
>
  Body content
</Dialog>
`;

export default function DialogPage() {
  const [dialogProps, setDialogProps] = useState<DialogProps>({
    open: false,
    title: "IT-Tools application",
    overlayCancel: true,
    disabledAnimation: false,
    hideHeaderClose: false,
    hasFooterCancel: true,
    hasFooterConfirm: true,
    confirmTitle: "OK",
    children: null,
    onClose: () => {},
  });

  const handleShow = () => {
    setDialogProps({ ...dialogProps, open: true });
  };

  const handleClose = () => {
    setDialogProps({ ...dialogProps, open: false });
  };

  const handleConfirm = () => {
    handleClose();
  };

  return (
    <div>
      <UIComponent title="Dialog" code={generateCode(dialogProps)}>
        <Button onClick={handleShow}>Show dialog</Button>
        <Dialog
          {...dialogProps}
          onClose={handleClose}
          onConfirm={handleConfirm}
        >
          Body content
        </Dialog>
      </UIComponent>
      <UIDocs<DialogProps>
        fields={dialogProperties}
        fieldState={dialogProps}
        onChange={setDialogProps}
      />
    </div>
  );
}
