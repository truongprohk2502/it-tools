import UISourceCode from "../_components/ui-source-code";
import { breadcrumbComponentCode, breadcrumbVariantCode } from "./constant";

export default function BreadcrumbSource() {
  return (
    <UISourceCode
      component="Breadcrumb"
      steps={[
        {
          title: "Step 1: Create variant styles",
          sourceCode: breadcrumbVariantCode,
        },
        {
          title: "Step 2: Create Breadcrumb component",
          sourceCode: breadcrumbComponentCode,
        },
      ]}
    />
  );
}
