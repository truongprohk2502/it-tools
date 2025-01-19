import UISourceCode from "../_components/ui-source-code";
import { galleriaComponentCode, galleriaTailwindCode } from "./constant";

export default function GalleriaSource() {
  return (
    <UISourceCode
      component="Galleria"
      steps={[
        {
          title: "Step 1: Create Tailwind configs",
          sourceCode: galleriaTailwindCode,
        },
        {
          title: "Step 2: Create Galleria component",
          sourceCode: galleriaComponentCode,
        },
      ]}
    />
  );
}
