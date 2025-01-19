import UISourceCode from "../_components/ui-source-code";
import { drawerComponentCode, drawerTailwindCode } from "./constant";

export default function DrawerSource() {
  return (
    <UISourceCode
      component="Drawer"
      dependencies={["react-portal"]}
      steps={[
        {
          title: "Step 1: Create Tailwind animation",
          sourceCode: drawerTailwindCode,
        },
        {
          title: "Step 2: Create Drawer component",
          sourceCode: drawerComponentCode,
        },
      ]}
    />
  );
}
