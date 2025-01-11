"use client";

import ImageCropIcon from "@/assets/icons/image-crop.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { Image as ImageJS } from "image-js";
import { useRef, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import CropImageForm from "./_components/crop-image-form";
import ImageDropzone from "./_components/image-dropzone";
import ImagePreview from "./_components/image-preview";
import type { CropImageSource, CropPosition } from "./types";

const convertAspectStringToNumber = (aspect: string) => {
  const [w, h] = aspect.split(":");
  return +w / +h;
};

const ImageCropPage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<CropImageSource>({
    normal: "",
    rotated: "",
  });
  const [crop, setCrop] = useState<CropPosition>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);
  const [isFlipVertical, setIsFlipVertical] = useState<boolean>(false);
  const [isFlipHorizontal, setIsFlipHorizontal] = useState<boolean>(false);
  const [aspect, setAspect] = useState<string>("16:9");
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

  const cropperWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelectFile = async (file: File) => {
    try {
      setIsUploadingImage(true);
      const reader = new FileReader();

      const getImgSrc = async () => {
        const imgSrc = reader.result?.toString() || "";
        if (!imgSrc) return;
        const image = await ImageJS.load(imgSrc);
        const rotatedImage = image.rotate(90).toDataURL();
        setImgSrc({ normal: imgSrc, rotated: rotatedImage });
        setIsUploadingImage(false);
      };

      reader.addEventListener("load", getImgSrc);
      reader.readAsDataURL(file);
    } catch {
      setIsUploadingImage(false);
    }
  };

  const handleRemoveImage = () => {
    setImgSrc({ normal: "", rotated: "" });
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotate(0);
    setIsFlipVertical(false);
    setIsFlipHorizontal(false);
    setAspect("16:9");
    setCroppedArea(null);
  };

  const handleToggleFlipVertical = () => {
    setIsFlipVertical(!isFlipVertical);
  };

  const handleToggleFlipHorizontal = () => {
    setIsFlipHorizontal(!isFlipHorizontal);
  };

  return (
    <div className="mx-auto min-w-[65rem] max-w-[80rem] px-6 pb-16">
      <ToolHeader
        title="Image Crop"
        description="The ability to crop, rotate, flip image to specific size. Download new resized image."
        href={Route.ImageCrop}
        icon={ImageCropIcon}
      />
      {!imgSrc.normal && (
        <ImageDropzone
          onUpload={handleSelectFile}
          isLoading={isUploadingImage}
        />
      )}
      <div
        className={cn("flex justify-between", {
          hidden: !imgSrc.normal,
        })}
      >
        <div>
          <CropImageForm
            aspect={aspect}
            rotate={rotate}
            isFlipVertical={isFlipVertical}
            isFlipHorizontal={isFlipHorizontal}
            onToggleFlipVertical={handleToggleFlipVertical}
            onToggleFlipHorizontal={handleToggleFlipHorizontal}
            onChangeAspect={setAspect}
            onChangeRotate={setRotate}
            onRemove={handleRemoveImage}
          />
        </div>
      </div>
      <div className="mt-8 flex gap-8">
        <div
          ref={cropperWrapperRef}
          className={cn("relative h-[34rem] w-full flex-1", {
            hidden: !imgSrc.normal,
          })}
        >
          <Cropper
            image={imgSrc.normal}
            crop={crop}
            zoom={zoom}
            rotation={rotate}
            aspect={convertAspectStringToNumber(aspect)}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropAreaChange={setCroppedArea}
            style={{
              containerStyle: { height: "35rem", marginBottom: "4rem" },
            }}
            transform={`
              translate(${crop.x}px, ${crop.y}px)
              rotateX(${isFlipVertical ? 180 : 0}deg)
              rotateY(${isFlipHorizontal ? 180 : 0}deg)
              rotateZ(${rotate}deg)
              scale(${zoom})
            `}
          />
        </div>
        {imgSrc.normal && imgSrc.rotated && croppedArea && (
          <ImagePreview
            imgSrc={imgSrc}
            rotate={rotate}
            scale={zoom}
            isFlipVertical={isFlipVertical}
            isFlipHorizontal={isFlipHorizontal}
            croppedArea={croppedArea}
            aspect={convertAspectStringToNumber(aspect)}
          />
        )}
      </div>
    </div>
  );
};

export default ImageCropPage;
