"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Watermark, type WatermarkProps } from "@/components/ui-lib/watermark";
import { Theme } from "@/constants/system";
import useSystemTheme from "@/hooks/use-system-theme";
import { useState } from "react";
import { watermarkProperties } from "./constant";

const generateCode = (props: WatermarkProps) => `<Watermark
  text="${props.text}"
  width={${props.width}}
  height={${props.height}}
>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, architecto? 
    Enim quas repellendus impedit unde, cumque, inventore nulla cupiditate excepturi 
    nobis qui, magni praesentium. Deleniti eligendi alias veniam nulla obcaecati? 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, architecto? Enim 
    quas repellendus impedit unde, cumque, inventore nulla cupiditate excepturi nobis 
    qui, magni praesentium. Deleniti eligendi alias veniam nulla obcaecati?
  </p>
</Watermark>
`;

export default function WatermarkPage() {
  const [watermarkProps, setWatermarkProps] = useState<WatermarkProps>({
    width: 120,
    height: 60,
    color: "",
    text: "IT-Tools",
    children: null,
  });

  const theme = useSystemTheme();

  return (
    <div>
      <UIComponent title="Watermark" code={generateCode(watermarkProps)}>
        <Watermark
          {...watermarkProps}
          color={theme === Theme.Dark ? "#fff" : "#000"}
        >
          <p className="h-[18rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            architecto? Enim quas repellendus impedit unde, cumque, inventore
            nulla cupiditate excepturi nobis qui, magni praesentium. Deleniti
            eligendi alias veniam nulla obcaecati? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Fuga, architecto? Enim quas
            repellendus impedit unde, cumque, inventore nulla cupiditate
            excepturi nobis qui, magni praesentium. Deleniti eligendi alias
            veniam nulla obcaecati?
          </p>
        </Watermark>
      </UIComponent>
      <UIDocs<WatermarkProps>
        fields={watermarkProperties}
        fieldState={watermarkProps}
        onChange={setWatermarkProps}
      />
    </div>
  );
}
