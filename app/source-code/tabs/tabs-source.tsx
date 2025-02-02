import UISourceCode from "../_components/ui-source-code";
import { tabsComponentCode } from "./constant";

export default function TabsSource() {
  return (
    <UISourceCode
      component="Tabs"
      steps={[
        {
          title: "Step 1: Create Tabs component",
          sourceCode: tabsComponentCode,
        },
      ]}
    />
  );
}
