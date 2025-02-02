"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Toast, type ToastProps, useToast } from "@/components/ui-lib/toast";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toastProperties } from "./constant";

const generateCode = (props: ToastProps) => `
const { showToast } = useToast();

return (
  <>
    <div>
      <Button
        className="bg-green-500"
        onClick={() =>
          showToast({ type: "success", message: "Toast success" })
        }
      >
        Success
      </Button>
      <Button
        className="bg-red-500"
        onClick={() => showToast({ type: "error", message: "Toast error" })}
      >
        Error
      </Button>
      <Button
        className="bg-yellow-500"
        onClick={() =>
          showToast({ type: "warning", message: "Toast warning" })
        }
      >
        Warning
      </Button>
      <Button
        className="bg-cyan-500"
        onClick={() => showToast({ type: "info", message: "Toast info" })}
      >
        Info
      </Button>
    </div>

    <Toast position="${props.position}" />
  </>
`;

export default function ToastPage() {
  const [toastProps, setToastProps] = useState<ToastProps>({
    position: "topRight",
  });

  const { showToast } = useToast();

  return (
    <div>
      <UIComponent title="Toast" code={generateCode(toastProps)}>
        <div className="flex gap-2">
          <Button
            className="bg-green-500"
            onClick={() =>
              showToast({ type: "success", message: "Toast success" })
            }
          >
            Success
          </Button>
          <Button
            className="bg-red-500"
            onClick={() => showToast({ type: "error", message: "Toast error" })}
          >
            Error
          </Button>
          <Button
            className="bg-yellow-500"
            onClick={() =>
              showToast({ type: "warning", message: "Toast warning" })
            }
          >
            Warning
          </Button>
          <Button
            className="bg-cyan-500"
            onClick={() => showToast({ type: "info", message: "Toast info" })}
          >
            Info
          </Button>
        </div>
        <Toast {...toastProps} />
      </UIComponent>
      <UIDocs<ToastProps>
        fields={toastProperties}
        fieldState={toastProps}
        onChange={setToastProps}
      />
    </div>
  );
}
