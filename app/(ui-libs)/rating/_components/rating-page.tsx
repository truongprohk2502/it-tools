"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Rating, type RatingProps } from "@/components/ui-lib/rating";
import { useState } from "react";
import { ratingProperties } from "./constant";

const generateCode = (props: RatingProps) => `<Rating
  value={rating}
  total={${props.total}}
  size="${props.size}"
  color="${props.color}"
  hasHalfValue={${props.hasHalfValue}}
  disabled={${props.disabled}}
  onChange={setRating}
/>
`;

export default function RatingPage() {
  const [ratingProps, setRatingProps] = useState<RatingProps>({
    total: 5,
    value: 0,
    size: "medium",
    color: "primary",
    hasHalfValue: false,
    disabled: false,
    onChange: () => {},
  });

  const handleChange = (value: number) => {
    setRatingProps({ ...ratingProps, value });
  };

  return (
    <div>
      <UIComponent title="Rating" code={generateCode(ratingProps)}>
        <Rating
          {...ratingProps}
          value={ratingProps.value}
          onChange={handleChange}
        />
      </UIComponent>
      <UIDocs<RatingProps>
        fields={ratingProperties}
        fieldState={ratingProps}
        onChange={setRatingProps}
      />
    </div>
  );
}
