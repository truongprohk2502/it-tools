import UISourceCode from "../_components/ui-source-code";
import {
  carouselArrowButtonCode,
  carouselComponentCode,
  carouselPaginatorCode,
} from "./constant";

export default function CarouselSource() {
  return (
    <UISourceCode
      component="Carousel"
      steps={[
        {
          title: "Step 1: Create ArrowButton component",
          sourceCode: carouselArrowButtonCode,
        },
        {
          title: "Step 2: Create Paginator component",
          sourceCode: carouselPaginatorCode,
        },
        {
          title: "Step 3: Create Carousel component",
          sourceCode: carouselComponentCode,
        },
      ]}
    />
  );
}
