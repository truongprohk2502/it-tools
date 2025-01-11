import type { Metadata } from "next";
import ImageCropPage from "./image-crop-page";

export const metadata: Metadata = {
  title: "Image Crop - IT Tools",
  description:
    "The ability to crop, rotate, flip image to specific size. Download new resized image.",
};

export default function Page() {
  return <ImageCropPage />;
}
