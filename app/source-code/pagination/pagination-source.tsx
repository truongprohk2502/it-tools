import UISourceCode from "../_components/ui-source-code";
import { paginationComponentCode } from "./constant";

export default function PaginationSource() {
  return (
    <UISourceCode
      component="Pagination"
      steps={[
        {
          title: "Step 1: Create Pagination component",
          sourceCode: paginationComponentCode,
        },
      ]}
    />
  );
}
