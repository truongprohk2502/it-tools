import UISourceCode from "../_components/ui-source-code";
import { avatarComponentCode, avatarHelpersCode } from "./constant";

export default function AvatarSource() {
  return (
    <UISourceCode
      component="Avatar"
      dependencies={["tinycolor2"]}
      steps={[
        {
          title: "Step 1: Create helper functions",
          sourceCode: avatarHelpersCode,
        },
        {
          title: "Step 2: Create Avatar component",
          sourceCode: avatarComponentCode,
        },
      ]}
    />
  );
}
