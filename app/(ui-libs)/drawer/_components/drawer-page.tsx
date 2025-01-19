"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Button } from "@/components/ui-lib/button";
import { Drawer, type DrawerProps } from "@/components/ui-lib/drawer";
import { useState } from "react";
import { drawerProperties } from "./constant";

const generateCode = (props: DrawerProps) => `<Drawer
  open={${props.open}}
  title="${props.title}"
  position="${props.position}"
  overlayCancel={${props.overlayCancel}}
  hideHeaderClose={${props.hideHeaderClose}}
  hasFooterCancel={${props.hasFooterCancel}}
  hasFooterConfirm={${props.hasFooterConfirm}}
  confirmTitle="${props.confirmTitle}"
  onClose={closeDrawer}
  onConfirm={handleConfirm}
>
  Body content
</Drawer>
`;

export default function DrawerPage() {
  const [drawerProps, setDrawerProps] = useState<DrawerProps>({
    open: false,
    title: "IT-Tools application",
    position: "right",
    overlayCancel: true,
    hideHeaderClose: false,
    hasFooterCancel: true,
    hasFooterConfirm: true,
    confirmTitle: "OK",
    children: null,
    onClose: () => {},
  });

  const handleShow = () => {
    setDrawerProps({ ...drawerProps, open: true });
  };

  const handleClose = () => {
    setDrawerProps({ ...drawerProps, open: false });
  };

  const handleConfirm = () => {
    handleClose();
  };

  return (
    <div>
      <UIComponent title="Drawer" code={generateCode(drawerProps)}>
        <Button onClick={handleShow}>Show drawer</Button>
        <Drawer
          {...drawerProps}
          onClose={handleClose}
          onConfirm={handleConfirm}
          wrapperClassName="p-4"
        >
          Body content
        </Drawer>
      </UIComponent>
      <UIDocs<DrawerProps>
        fields={drawerProperties}
        fieldState={drawerProps}
        onChange={setDrawerProps}
      />
    </div>
  );
}
