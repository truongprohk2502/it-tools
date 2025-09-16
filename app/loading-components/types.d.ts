export interface SpinnerProps {
  size?: number;
  color?: string;
  sizeUnit?: "px" | "em" | "rem" | "%";
}

export interface TransientSpinnerProps {
  $size: number;
  $color: string;
  $sizeUnit: "px" | "em" | "rem" | "%";
}

export interface Spinner3DProps {
  size?: number;
  frontColor?: string;
  backColor?: string;
  sizeUnit?: "px" | "em" | "rem" | "%";
}

export interface TransientSpinner3DProps {
  $size: number;
  $frontColor: string;
  $backColor: string;
  $sizeUnit: "px" | "em" | "rem" | "%";
}
