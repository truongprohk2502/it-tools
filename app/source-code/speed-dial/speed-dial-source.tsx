import UISourceCode from "../_components/ui-source-code";
import {
  dialogUseClickAwayCode,
  speedDialComponentCode,
  speedDialHelpersCode,
  speedDialTailwindCode,
} from "./constant";

export default function SpeedDialSource() {
  return (
    <UISourceCode
      component="SpeedDial"
      steps={[
        {
          title: "Step 1: Create useClickAway hook",
          sourceCode: dialogUseClickAwayCode,
        },
        {
          title: "Step 2: Create Tailwind config",
          sourceCode: speedDialTailwindCode,
        },
        {
          title: "Step 3: Create helper functions",
          sourceCode: speedDialHelpersCode,
        },
        {
          title: "Step 4: Create SpeedDial component",
          sourceCode: speedDialComponentCode,
        },
      ]}
    />
  );
}
