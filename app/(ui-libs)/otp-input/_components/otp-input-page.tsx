"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { OtpInput, type OtpInputProps } from "@/components/ui-lib/otp-input";
import { AsteriskIcon } from "lucide-react";
import { useState } from "react";
import { otpInputProperties } from "./constant";

const generateCode = (props: OtpInputProps) => `<OtpInput
  total={${props.total}}
  separator={<AsteriskIcon />}
  onFinish={handleFinish}
/>
`;

export default function OtpInputPage() {
  const [otpInputProps, setOtpInputProps] = useState<OtpInputProps>({
    total: 5,
  });

  return (
    <div>
      <UIComponent title="OtpInput" code={generateCode(otpInputProps)}>
        <OtpInput {...otpInputProps} separator={<AsteriskIcon />} />
      </UIComponent>
      <UIDocs<OtpInputProps>
        fields={otpInputProperties}
        fieldState={otpInputProps}
        onChange={setOtpInputProps}
      />
    </div>
  );
}
