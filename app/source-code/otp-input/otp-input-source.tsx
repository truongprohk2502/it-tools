import UISourceCode from "../_components/ui-source-code";
import { otpInputComponentCode } from "./constant";

export default function OtpInputSource() {
  return (
    <UISourceCode
      component="OtpInput"
      steps={[
        {
          title: "Step 1: Create OtpInput component",
          sourceCode: otpInputComponentCode,
        },
      ]}
    />
  );
}
