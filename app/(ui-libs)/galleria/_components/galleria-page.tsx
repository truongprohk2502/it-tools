"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Galleria, type GalleriaProps } from "@/components/ui-lib/galleria";
import { useState } from "react";
import { galleriaProperties } from "./constant";

const generateCode = (props: GalleriaProps) => `<Galleria
  animation={${props.animation}}
  images={[
    {
      photoUrl: "/galleria/galleria1.jpg",
      thumbUrl: "/galleria/galleria1s.jpg",
    },
    {
      photoUrl: "/galleria/galleria2.jpg",
      thumbUrl: "/galleria/galleria2s.jpg",
    },
    {
      photoUrl: "/galleria/galleria3.jpg",
      thumbUrl: "/galleria/galleria3s.jpg",
    },
    {
      photoUrl: "/galleria/galleria4.jpg",
      thumbUrl: "/galleria/galleria4s.jpg",
    },
    {
      photoUrl: "/galleria/galleria5.jpg",
      thumbUrl: "/galleria/galleria5s.jpg",
    },
    {
      photoUrl: "/galleria/galleria6.jpg",
      thumbUrl: "/galleria/galleria6s.jpg",
    },
    {
      photoUrl: "/galleria/galleria7.jpg",
      thumbUrl: "/galleria/galleria7s.jpg",
    },
    {
      photoUrl: "/galleria/galleria8.jpg",
      thumbUrl: "/galleria/galleria8s.jpg",
    },
  ]}
/>
`;

export default function GalleriaPage() {
  const [galleriaProps, setGalleriaProps] = useState<GalleriaProps>({
    animation: true,
    images: [
      {
        photoUrl: "/galleria/galleria1.jpg",
        thumbUrl: "/galleria/galleria1s.jpg",
      },
      {
        photoUrl: "/galleria/galleria2.jpg",
        thumbUrl: "/galleria/galleria2s.jpg",
      },
      {
        photoUrl: "/galleria/galleria3.jpg",
        thumbUrl: "/galleria/galleria3s.jpg",
      },
      {
        photoUrl: "/galleria/galleria4.jpg",
        thumbUrl: "/galleria/galleria4s.jpg",
      },
      {
        photoUrl: "/galleria/galleria5.jpg",
        thumbUrl: "/galleria/galleria5s.jpg",
      },
      {
        photoUrl: "/galleria/galleria6.jpg",
        thumbUrl: "/galleria/galleria6s.jpg",
      },
      {
        photoUrl: "/galleria/galleria7.jpg",
        thumbUrl: "/galleria/galleria7s.jpg",
      },
      {
        photoUrl: "/galleria/galleria8.jpg",
        thumbUrl: "/galleria/galleria8s.jpg",
      },
    ],
  });

  return (
    <div>
      <UIComponent title="Galleria" code={generateCode(galleriaProps)}>
        <Galleria {...galleriaProps} className="mx-auto w-[40rem]" />
      </UIComponent>
      <UIDocs<GalleriaProps>
        fields={galleriaProperties}
        fieldState={galleriaProps}
        onChange={setGalleriaProps}
      />
    </div>
  );
}
