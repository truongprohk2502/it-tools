"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Carousel, type CarouselProps } from "@/components/ui-lib/carousel";
import { useState } from "react";
import { carouselProperties } from "./constant";

const generateCode = (props: CarouselProps) => `<Carousel
  show={${props.show}}
  infiniteLoop={${props.infiniteLoop}}
  showIndicator=${props.showIndicator}
  autoplay={${props.autoplay}}
>
  <div className="bg-red-500">
    1
  </div>
  <div className="bg-green-500">
    2
  </div>
  <div className="bg-blue-500">
    3
  </div>
  <div className="bg-orange-500">
    4
  </div>
  <div className="bg-purple-500">
    5
  </div>
</Carousel>
`;

export default function ButtonPage() {
  const [carouselProps, setCarouselProps] = useState<CarouselProps>({
    show: 3,
    infiniteLoop: true,
    showIndicator: true,
    autoplay: 3000,
    children: null,
  });

  return (
    <div>
      <UIComponent title="Carousel" code={generateCode(carouselProps)}>
        <Carousel {...carouselProps} itemClassName="h-60 text-white">
          <div className="flex h-full w-full items-center justify-center bg-red-500">
            <h1 className="text-4xl font-bold">1</h1>
          </div>
          <div className="flex h-full w-full items-center justify-center bg-green-500">
            <h1 className="text-4xl font-bold">2</h1>
          </div>
          <div className="flex h-full w-full items-center justify-center bg-blue-500">
            <h1 className="text-4xl font-bold">3</h1>
          </div>
          <div className="flex h-full w-full items-center justify-center bg-orange-500">
            <h1 className="text-4xl font-bold">4</h1>
          </div>
          <div className="flex h-full w-full items-center justify-center bg-purple-500">
            <h1 className="text-4xl font-bold">5</h1>
          </div>
        </Carousel>
      </UIComponent>
      <UIDocs<CarouselProps>
        fields={carouselProperties}
        fieldState={carouselProps}
        onChange={setCarouselProps}
      />
    </div>
  );
}
