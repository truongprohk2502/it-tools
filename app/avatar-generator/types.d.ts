export interface SvgType extends React.SVGProps<SVGSVGElement> {
  isSvg?: boolean;
  color?: string;
}

export interface AvatarStyle {
  label: string;
  component: React.FC<SvgType>;
}

export interface RoundedOption {
  label: string;
  value: string;
}

export interface AvatarInformation {
  rounded: RoundedOption;
  bgColor: string;
  skinColor: string;
  faceStyle: AvatarStyle;
  topColor: string;
  topStyle: AvatarStyle;
  earStyle: AvatarStyle;
  earringColor: string;
  earringStyle: AvatarStyle;
  eyeBrowStyle: AvatarStyle;
  eyeStyle: AvatarStyle;
  noseStyle: AvatarStyle;
  glassesColor: string;
  glassesStyle: AvatarStyle;
  mouthStyle: AvatarStyle;
  beardStyle: AvatarStyle;
  clothingColor: string;
  clothingStyle: AvatarStyle;
}
