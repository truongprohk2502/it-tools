import type { Metadata } from "next";
import UISourceCode from "../_components/ui-source-code";
import { avatarComponentCode, avatarHelpersCode } from "./constant";

export const metadata: Metadata = {
  title: "UI Avatar - IT Tools",
  description: "UI Avatar component using ReactJS and TailwindCSS",
};

export default function AvatarSourcePage() {
  return (
    <UISourceCode
      component="Avatar"
      dependencies={[
        <>
          <code className="text-red-500">tinycolor2 </code>
          is a lightweight library helping get contrast text color based on
          background.
        </>,
      ]}
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
